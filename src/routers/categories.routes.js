import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller.js";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller.js";
import receiveCategoriesController from "../controllers/categories/receiveCategories.controller.js";
import receiveCategoryByIdController from "../controllers/categories/receiveCategoryById.controller.js";
import updateCategoryController from "../controllers/categories/updateCategory.controller.js";

const router = Router();

router.post("", createCategoryController);
router.get("", receiveCategoriesController);
router.get("/:id", receiveCategoryByIdController);
router.patch("/:id", updateCategoryController);
router.delete("/:id", deleteCategoryController);



export default router;