const router = require("express").Router();

const Product = require("../controllers/productController");

const upload = require("../middlewares/uploader");
const autentikasi = require("../middlewares/authenticate");
const checkOwnership = require("../middlewares/checkOwnership");

router.post("/", autentikasi, upload.array("images"), Product.createProduct);
router.get("/", autentikasi, Product.findProducts);
router.get("/:id", Product.findProductById);
router.patch("/:id", Product.UpdateProduct);
router.delete("/:id", Product.deleteProduct);

module.exports = router;
