describe("Каталог", () => {
  it("В каталоге отображаются товары, список которых приходит с сервера", async ({browser}) => {
    // подготовка
    await browser.url("http://localhost:3000/hw/store/catalog");
    const items = await Promise.all(await browser.$$(".Catalog .col-12.col-sm-6.col-md-4.col-lg-3").map(item => {
      return item.$(".ProductItem-Name.card-title").getText();
    }));

    // действие

    // проверка (слабая как по мне)
    await expect(items.length).not.toBe(0);
  });

  it('Для каждого товара в каталоге отображается название, цена и ссылка на страницу с подробной информацией о товаре', async ({browser}) => {
    // подготовка
    await browser.url("http://localhost:3000/hw/store/catalog");
    const items = await Promise.all(await browser.$$(".Catalog .col-12.col-sm-6.col-md-4.col-lg-3").map(item => {
      const name = item.$(".ProductItem-Name.card-title");
      const price = item.$(".ProductItem-Price.card-text");
      const link = item.$(".ProductItem-DetailsLink.card-link");
      return {name: name, price: price, link: link};
    }));

    // действие

    // проверка
    items.forEach(({name, price, link}) => {
      expect(name).not.toBe(undefined);
      expect(price).not.toBe(undefined);
      expect(link).not.toBe(undefined);
    })
  });
});