import { Router } from "express";
import createProductController from "../controllers/products/createProduct.controller.js";
import deleteProductController from "../controllers/products/deleteProduct.controller.js";
import receiveProductByIdController from "../controllers/products/receiveProductById.controller.js";
import receiveProductsController from "../controllers/products/receiveProducts.controller.js";
import receiveProductsByCategoryController from "../controllers/products/receiveProductsByCategory.controller.js";
import updateProductController from "../controllers/products/updateProduct.controller.js";

const router = Router();

router.post("", createProductController);
router.get("", receiveProductsController);
router.get("/:id", receiveProductByIdController);
router.get("/category/:id", receiveProductsByCategoryController);
router.delete("/:id", deleteProductController);
router.patch("/:id", updateProductController);


export default router;