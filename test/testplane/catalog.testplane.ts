describe("Каталог", () => {
  it("В каталоге отображаются товары, список которых приходит с сервера", async ({browser}) => {
    // подготовка
    await browser.url("http://localhost:3000/hw/store/catalog");
    const items = await Promise.all(await browser.$$(".Catalog .col-12.col-sm-6.col-md-4.col-lg-3").map(item => {
      return item.$(".ProductItem-Name.card-title").getText();
    }));

    // действие

    // проверка, она не проходит - мы получаем разные данные
    await expect(items).toStrictEqual([
      "Licensed kogtetochka",
      "Recycled kogtetochka",
      "Generic kogtetochka",
      "Gorgeous kogtetochka",
      "Gorgeous kogtetochka",
      "Luxurious kogtetochka",
      "Awesome kogtetochka",
      "Handmade kogtetochka",
      "Gorgeous kogtetochka",
      "Recycled kogtetochka",
      "Bespoke kogtetochka",
      "Elegant kogtetochka",
      "Oriental kogtetochka",
      "Elegant kogtetochka",
      "Gorgeous kogtetochka",
      "Incredible kogtetochka",
      "Awesome kogtetochka",
      "Luxurious kogtetochka",
      "Electronic kogtetochka",
      "Fantastic kogtetochka",
      "Handmade kogtetochka",
      "Small kogtetochka",
      "Sleek kogtetochka",
      "Fantastic kogtetochka",
      "Intelligent kogtetochka",
      "Refined kogtetochka",
      "Electronic kogtetochka"
    ]);
  });
});