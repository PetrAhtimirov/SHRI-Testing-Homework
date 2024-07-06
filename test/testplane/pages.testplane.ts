describe("Страницы", () => {
  it("В магазине рендерится главная страница", async ({browser}) => {
    // подготовка
    await browser.url("http://localhost:3000/hw/store");

    // действие

    // проверка
    await expect(browser.$(".Home .row .col p")).toHaveText("Welcome to Kogtetochka store!");
  });
  it("На главной странице статическое содержимое", async ({browser}) => {
    // подготовка
    await browser.url("http://localhost:3000/hw/store");
    const content = browser.$(".Home");
    await content.waitForDisplayed();

    // действие

    // проверка
    await content.assertView('plane');
  });
  it("В магазине рендерится страница каталог", async ({browser}) => {
    // проверка
    await browser.url("http://localhost:3000/hw/store/catalog");

    // действие

    // проверка
    await expect(browser.$("h1")).toHaveText("Catalog");
  });
  it("В магазине рендерится страница условия доставки", async ({browser}) => {
    // проверка
    await browser.url("http://localhost:3000/hw/store/delivery");

    // действие

    // проверка
    await expect(browser.$("h1")).toHaveText("Delivery");
  });
  it("На странице условий доставки статическое содержимое", async ({browser}) => {
    // проверка
    await browser.url("http://localhost:3000/hw/store/delivery");
    const content = browser.$(".Delivery");
    await content.waitForDisplayed();

    // действие

    // проверка
    await content.assertView('plane');
  });
  it("В магазине рендерится страница контакты", async ({browser}) => {
    // проверка
    await browser.url("http://localhost:3000/hw/store/contacts");

    // действие

    // проверка
    await expect(browser.$("h1")).toHaveText("Contacts");
  });
  it("На странице контактов статическое содержимое", async ({browser}) => {
    // проверка
    await browser.url("http://localhost:3000/hw/store/contacts");
    const content = browser.$(".Contacts");
    await content.waitForDisplayed();

    // действие

    // проверка
    await content.assertView('plane');
  });
});