const { Category } = require("../models");

class CategoryController {
  static async fetchCategories(req, res, next) {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  }

  static async addCategory(req, res, next) {
    try {
      const { name } = req.body;
      await Category.create({ name });
      res.status(201).json({ msg: "Add new category success!" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const { id } = req.params;
      
      const category = await Category.destroy({ where: { id } });
      if (category === 0) throw { name: 'NotFound' }

      res.status(200).json({ msg: `Success to delete id ${id}` });
    } catch (err) {
      next(err);
    }
  }

  static async editCategory(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      if (!name) throw { name: 'CategoryRequired' }
      
      const category = await Category.update({ name }, { where: { id } });
      if (category[0] === 0) throw { name: "NotFound" };

      res.status(201).json({ message: "Edit category success" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CategoryController;
