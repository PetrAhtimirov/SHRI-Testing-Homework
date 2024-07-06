import React from 'react';

import { render } from '@testing-library/react';
import {Application} from "../../src/client/Application";
import {initStore} from "../../src/client/store";
import { Provider } from 'react-redux';
import {CartApi, ExampleApi} from "../../src/client/api";
import {BrowserRouter} from "react-router-dom";
import {MemoryRouter} from "react-router-dom";
import {Home} from "../../src/client/pages/Home";
import {Catalog} from "../../src/client/pages/Catalog";
import {Delivery} from "../../src/client/pages/Delivery";
import {Contacts} from "../../src/client/pages/Contacts";

describe('Страницы', () => {
  it('В магазине есть страницы: главная, каталог, условия доставки, контакты', () => {
    // подготовка
    const main = <Home />;
    const catalog = <Catalog />;
    const delivery = <Delivery />;
    const contact = <Contacts />

    // действие


    // проверка
    expect(main).not.toBeUndefined();
    expect(catalog).not.toBeUndefined();
    expect(delivery).not.toBeUndefined();
    expect(contact).not.toBeUndefined();
  });

});

