import React from 'react';

import { render } from '@testing-library/react';
import {Application} from "../../src/client/Application";
import {initStore} from "../../src/client/store";
import { Provider } from 'react-redux';
import {CartApi, ExampleApi} from "../../src/client/api";
import {BrowserRouter} from "react-router-dom";
import {MemoryRouter} from "react-router-dom";

const mobileWidth = 575; // px

function resizeToMobileDevice() {
    (window as any).innerWidth = mobileWidth;
    (window as any).dispatchEvent(new Event('resize'));
}

describe('Simple Test Case', () => {
    it('Should render', () => {
        const app = <div>example</div>;

        const { container } = render(app);

        console.log(container.outerHTML);

        expect(container.textContent).toBe('example');
    });
});

describe('Общие тесты', () => {

    // Проверка адапатации верстки происходит в testplane, при скриншотном тесте в мобильном браузере

    it('В шапке отображаются ссылки на страницы магазина, а также ссылка на корзину', () => {
        // подготовка
        const basename = '/';
        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);
        const app = (
          <MemoryRouter initialEntries={[basename]} initialIndex={0}>
              <Provider store={store}>
                  <Application />
              </Provider>
          </MemoryRouter>
        );

        // действие
        const { container } = render(app);
        const navLinks = container.querySelectorAll(".navbar-nav .nav-link");

        // проверка
        const catalogLink = Array.from(navLinks).find(link => link.textContent === 'Catalog' && link.getAttribute("href") === '/catalog');
        expect(catalogLink).not.toBeUndefined();
        const deliveryLink = Array.from(navLinks).find(link => link.textContent === 'Delivery' && link.getAttribute("href") === '/delivery');
        expect(deliveryLink).not.toBeUndefined();
        const contactsLink = Array.from(navLinks).find(link => link.textContent === 'Contacts' && link.getAttribute("href") === '/contacts');
        expect(contactsLink).not.toBeUndefined();
        const cartLink = Array.from(navLinks).find(link => link.textContent === 'Cart' && link.getAttribute("href") === '/cart');
        expect(cartLink).not.toBeUndefined();
    });

    it('Название магазина является ссылкой на главную страницу', () => {
        // подготовка
        const basename = '/';
        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);
        const app = (
          <MemoryRouter initialEntries={[basename]} initialIndex={0}>
              <Provider store={store}>
                  <Application />
              </Provider>
          </MemoryRouter>
        );

        // действие
        const { container } = render(app);
        const brandName = container.querySelector(".Application-Brand.navbar-brand");

        // проверка
        expect(brandName.getAttribute("href")).toBe("/");
    });

    // На ширине меньше 576px навигационное меню должно скрываться за "гамбургер" -
    // проверка реализована в general.testplane.ts
});