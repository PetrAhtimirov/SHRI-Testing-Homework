describe("Страницы", () => {
  it("В магазине рендерится главная страница", async ({browser}) => {
    await browser.url("http://localhost:3000/hw/store");
    await expect(browser.$(".Home .row .col p")).toHaveText("Welcome to Kogtetochka store!");
  });
  it("В магазине рендерится страница каталог", async ({browser}) => {
    await browser.url("http://localhost:3000/hw/store/catalog");
    await expect(browser.$("h1")).toHaveText("Catalog");
  });
  it("В магазине рендерится страница условия доставки", async ({browser}) => {
    await browser.url("http://localhost:3000/hw/store/delivery");
    await expect(browser.$("h1")).toHaveText("Delivery");
  });
  it("В магазине рендерится страница контакты", async ({browser}) => {
    await browser.url("http://localhost:3000/hw/store/contacts");
    await expect(browser.$("h1")).toHaveText("Contacts");
  });
});