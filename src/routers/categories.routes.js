import { Router } from "express";
import createCategoryController from "../controllers/createCategory.controller";
import deleteCategoryController from "../controllers/deleteCategorycontroller";
import receiveCategoriesController from "../controllers/receiveCategories.controller";
import receiveCategoryByIdController from "../controllers/receiveCategoryById.controller";
import updateCategoryController from "../controllers/updateCategory.controller";

const router = Router();

router.post("", createCategoryController);
router.get("", receiveCategoriesController);
router.get("/:id", receiveCategoryByIdController);
router.patch("/:id", updateCategoryController);
router.delete("/:id", deleteCategoryController);



export default router;