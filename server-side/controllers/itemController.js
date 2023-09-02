const { Item } = require("../models");

class ItemController {
  static async fetchItems(req, res, next) {
    try {
      const items = await Item.findAll();
      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  }

  static async addItem(req, res, next) {
    try {
      const { name, price, image, stock, CategoryId, ManufacturerId, description } = req.body;
      await Item.create({ name, price, image, stock, CategoryId, ManufacturerId, description });
      res.status(201).json({ msg: "Add new Item success!" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteItem(req, res, next) {
    try {
      const { id } = req.params;
      const item = await Item.destroy({ where: { id } });
      if (item === 0) throw { name: 'NotFound' }

      res.status(200).json({ msg: `Success to delete id ${id}` });
    } catch (err) {
      next(err);
    }
  }

  static async editItem(req, res, next) {
    try {
      const { id } = req.params;
      const { name, price, image, stock, CategoryId, ManufacturerId, description } = req.body;

      if (!name) throw { name: 'ItemNameRequired' }
      if (!price) throw { name: 'ItemPriceRequired' }
      if (!image) throw { name: 'ItemImageRequired' }
      if (!stock) throw { name: 'ItemStockRequired' }
      if (!CategoryId) throw { name: 'ItemCategoryIdRequired' }
      if (!ManufacturerId) throw { name: 'ItemManufacturerIdRequired' }
      if (!description) throw { name: 'ItemDescriptionRequired' }

      const Item = await Item.update({ name, price, image, stock, CategoryId, ManufacturerId, description }, { where: { id } });
      if (Item[0] === 0) throw { name: "NotFound" };

      res.status(201).json({ message: "Edit Item success" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ItemController;
