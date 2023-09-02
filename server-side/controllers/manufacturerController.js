const { Manufacturer } = require("../models");

class ManufacturerController {
  static async fetchManufacturers(req, res, next) {
    try {
      const manufacturers = await Manufacturer.findAll();
      res.status(200).json(manufacturers);
    } catch (err) {
      next(err);
    }
  }

  static async addManufacturer(req, res, next) {
    try {
      const { name } = req.body;
      await Manufacturer.create({ name });
      res.status(201).json({ msg: "Add new manufacturer success!" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteManufacturer(req, res, next) {
    try {
      const { id } = req.params;

      const manufacturer =  await Manufacturer.destroy({ where: { id } });
      if (manufacturer === 0) throw { name: 'NotFound' }

      res.status(200).json({ msg: `Success to delete id ${id}` });
    } catch (err) {
      next(err);
    }
  }

  static async editManufacturer(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      if (!name) throw { name: 'ManufacturerRequired' }

      const manufacturer = await Manufacturer.update({ name }, { where: { id } });
      if (manufacturer[0] === 0) throw { name: "NotFound" };

      res.status(201).json({ message: "Edit manufacturer success" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ManufacturerController;
