const ItemController = require("../controllers/itemController");
const CategoryController = require("../controllers/categoryController");
const ManufacturerController = require("../controllers/manufacturerController");
const authentication = require("../middlewares/authentication");
const router = require("express").Router();

router.use(authentication)

router.post('/item', ItemController.addItem)
router.delete('/item/:id', ItemController.deleteItem)
router.put('/item/:id', ItemController.editItem)

router.get('/category', CategoryController.fetchCategories)
router.post('/category', CategoryController.addCategory)
router.delete('/category/:id', CategoryController.deleteCategory)
router.put('/category/:id', CategoryController.editCategory)

router.get('/manufacturer', ManufacturerController.fetchManufacturers)
router.post('/manufacturer', ManufacturerController.addManufacturer)
router.delete('/manufacturer/:id', ManufacturerController.deleteManufacturer)
router.put('/manufacturer/:id', ManufacturerController.editManufacturer)

module.exports = router;

