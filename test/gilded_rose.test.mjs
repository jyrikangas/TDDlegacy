import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].name).to.equal("foo");
  })

  it("should update Aged Brie with less than 0 sellIn and less than 0 quality to have 1 quality", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, -1)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 1).to.equal(true);
  })

  it("should update Aged Brie with less than 0 sellIn and less than 0 quality to have -2 sellIn", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, -1)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].sellIn === -2).to.equal(true);
  })

  it("should update Aged Brie with 0 sellIn and less than 0 quality to have 1 quality", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, -1)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 1).to.equal(true);
  })

  it("should update Aged Brie with 0 sellIn and less than 0 quality to have -1 sellIn", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, -1)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].sellIn === -1).to.equal(true);
  })



  it("should update Aged Brie with 0 sellIn and 0 quality to have 2 quality", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 2).to.equal(true);
  })

  it("should update Aged Brie with 0 sellIn and  0 quality to have -1 sellIn", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, -1)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].sellIn === -1).to.equal(true);
  })
  
  it("should update Aged Brie with 0 sellIn and over 49 quality to have 50 quality", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 49)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 50).to.equal(true);
  })


  it("should update Aged Brie with 0 sellIn and over 49 quality to have -1 sellIn", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 49)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].sellIn === -1).to.equal(true);
  })

  it("should update Aged Brie with 0 sellIn and 50 quality to have 50 quality", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 50).to.equal(true);
  })

  it("should update Aged Brie with 0 sellIn and 50 quality to have -1 sellIn", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].sellIn === -1).to.equal(true);
  })

  it("should update foo to with 1 quality to have 0 quality", () => {
    const gildedRose = new Shop([new Item("foo", 1, 1)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 0).to.equal(true);
  })
  
  it("should update Backstage passes to a TAFKAL80ETC concert with 6 sellIn and 1 quality to have 3 quality", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 1)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 3).to.equal(true);
  })

  it("should update Backstage passes to a TAFKAL80ETC concert with 5 sellIn and 1 quality to have 4 quality", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 1)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 4).to.equal(true);
  })

  it("should update foo with less than 0 sellIn and 2 quality to have 0 quality", () => {
    const gildedRose = new Shop([new Item("foo", -1, 2)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 0).to.equal(true);
  })

  it("should update Backstage passes to a TAFKAL80ETC concert with less than 0 sellIn and 1 quality to have 0 quality", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 1)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 0).to.equal(true);
  })

  it("should update foo with 0 sellIn and 1 quality to have 0 quality", () => {
    const gildedRose = new Shop([new Item("foo", 0, 1)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 0).to.equal(true);
  })
  it ("should update empty string with 0 sellIn and 1 quality to have -1 sellIn", () => {
    const gildedRose = new Shop([new Item("", 0, 1)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].sellIn === -1).to.equal(true);
  })

  it ("should update Sulfras with 0 sellIn and 1 quality to have -1 sellIn", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 1)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].sellIn === 0).to.equal(true);
  })
  it ("should update Sulfuras with 0 sellIn and 51 quality to have  quality", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 51)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 51).to.equal(true);
  })
  it ("should update foo with 0 sellIn and less than 0 quality to have 0 quality", () => {
    const gildedRose = new Shop([new Item("foo", 0, -1)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === -1).to.equal(true);
  })
  it ("should update foo with 0 sellIn and 0 quality to have 0 quality", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 0).to.equal(true);
  })
  it ("should update Backstage passes with 11 sellIn and 0 quality to have 0 quality", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 1).to.equal(true);
  })

  it ("should update Backstage passes with 6 sellIn and 49 quality to have 50 quality", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 49)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 50).to.equal(true);
  })
  it ("should update Backstage passes with 5 sellIn and 48 quality to have 50 quality", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 50).to.equal(true);
  })

  it ("should update Sulfuras with -1 sellIn and 2 quality to have 2 quality", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 2)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 2).to.equal(true);
  })
  it ("should update foo with 1 sellIn and 2 quality to have 1 quality", () => {
    const gildedRose = new Shop([new Item("foo", 1, 2)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 1).to.equal(true);
  })

});
describe("Conjured items", () => {
  it("should lower in quality by 2 if sellIn is more than 0", () => {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 4).to.equal(true);
  })

  it("should lower in quality by 4 if sellIn is less than 0", () => {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", -1, 6)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].quality === 2).to.equal(true);
  })
})