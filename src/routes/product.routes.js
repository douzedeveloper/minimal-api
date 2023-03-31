import { Router } from "express";
import { methods as productController } from "./../controllers/product.controller";

const router = Router();

router.get("/", productController.getProducts);

/*
router.post("/", productController.addProduct);
*/

export default router;