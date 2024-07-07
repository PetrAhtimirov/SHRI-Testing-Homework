describe("Общие требования", () => {
  it("На ширине меньше 576px навигационное меню скрывается за \"гамбургер\"", async ({browser}) => {
    // подготовка
    await browser.url("http://localhost:3000/hw/store");
    await browser.setWindowSize(575, 100);

    // действие

    // проверка
    await expect(browser.$(".Application-Toggler.navbar-toggler").isDisplayed()
              && !browser.$(".Application-Menu.collapse.navbar-collapse").isDisplayed());
  });

  it("При выборе элемента из меню \"гамбургера\", меню закрываться", async ({browser}) => {
    // подготовка
    await browser.url("http://localhost:3000/hw/store");
    await browser.setWindowSize(575, 100);

    // действие
    await browser.$(".Application-Toggler.navbar-toggler").click();
    await browser.$(".Application-Menu.navbar-collapse .navbar-nav .nav-link:nth-child(3)").click();

    // проверка
    await expect(!browser.$(".Application-Menu.navbar-collapse").isDisplayed());
  });
});