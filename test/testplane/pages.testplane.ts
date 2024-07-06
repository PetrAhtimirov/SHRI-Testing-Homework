describe("Страницы", () => {
  it("В магазине рендерится главная страница", async ({browser}) => {
    await browser.url("http://localhost:3000/hw/store");
    await expect(browser.$(".Home .row .col p")).toHaveText("Welcome to Kogtetochka store!");
  });
  it("На главной странице статическое содержимое", async ({browser}) => {
    await browser.url("http://localhost:3000/hw/store");
    const content = browser.$(".Home");
    await content.waitForDisplayed();
    await content.assertView('plane');
  });
  it("В магазине рендерится страница каталог", async ({browser}) => {
    await browser.url("http://localhost:3000/hw/store/catalog");
    await expect(browser.$("h1")).toHaveText("Catalog");
  });
  it("В магазине рендерится страница условия доставки", async ({browser}) => {
    await browser.url("http://localhost:3000/hw/store/delivery");
    await expect(browser.$("h1")).toHaveText("Delivery");
  });
  it("На странице условий доставки статическое содержимое", async ({browser}) => {
    await browser.url("http://localhost:3000/hw/store/delivery");
    const content = browser.$(".Delivery");
    await content.waitForDisplayed();
    await content.assertView('plane');
  });
  it("В магазине рендерится страница контакты", async ({browser}) => {
    await browser.url("http://localhost:3000/hw/store/contacts");
    await expect(browser.$("h1")).toHaveText("Contacts");
  });
  it("На странице контактов статическое содержимое", async ({browser}) => {
    await browser.url("http://localhost:3000/hw/store/contacts");
    const content = browser.$(".Contacts");
    await content.waitForDisplayed();
    await content.assertView('plane');
  });
});