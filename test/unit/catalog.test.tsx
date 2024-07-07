import React from 'react';

import { render } from '@testing-library/react';
import {Application} from "../../src/client/Application";
import {initStore} from "../../src/client/store";
import { Provider } from 'react-redux';
import {CartApi, ExampleApi} from "../../src/client/api";
import {BrowserRouter} from "react-router-dom";
import {MemoryRouter} from "react-router-dom";
import {Catalog} from "../../src/client/pages/Catalog";
describe('Каталог', () => {
  // В каталоге отображаются товары, список которых приходит с сервера - catalog.testplane.ts

  // Для каждого товара в каталоге отображается название, цена и ссылка на страницу с подробной информацией о товаре - catalog.testplane.ts

  it('Что-то', () => {
    // подготовка
    const basename = '/catalog';
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
    const { container } = render(app);
    const brandName = container.querySelector("h1");
    const items = container.querySelectorAll(".Catalog .col-12.col-sm-6.col-md-4.col-lg-3");

    // действие

    // проверка
    expect(brandName.textContent).toBe("Catalog");
  });
});