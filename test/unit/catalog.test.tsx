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
  it('Что-то', () => {
    // подготовка
    const basename = '/catalog';
    const api = new ExampleApi(basename);
    console.log(api);
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
    const brandName = container.querySelector("h1");

    // проверка
    expect(brandName.textContent).toBe("Catalog");
  });
});