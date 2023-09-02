const UserController = require("../controllers/userController");
const ItemController = require("../controllers/itemController");
const router = require("express").Router();
const adminRoute = require("./adminRoute")

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.get('/item', ItemController.fetchItems)

router.use(adminRoute)

module.exports = router;