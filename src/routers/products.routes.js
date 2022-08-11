import { Router } from "express";
import createProductController from "../controllers/createProduct.controller";
import deleteProductController from "../controllers/deleteProduct.controller";
import receiveProductByIdController from "../controllers/receiveProductById.controller";
import receiveProductsController from "../controllers/receiveProducts.controller";
import receiveProductsByCategoryController from "../controllers/receiveProductsByCategory.controller";
import updateProductController from "../controllers/updateProduct.controller";

const router = Router();

router.post("", createProductController);
router.get("", receiveProductsController);
router.get("/:id", receiveProductByIdController);
router.get("/category/:id", receiveProductsByCategoryController);
router.delete("/:id", deleteProductController);
router.patch("/:id", updateProductController);




export default router;