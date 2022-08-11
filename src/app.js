import express from "express";
import "dotenv/config";
import { startDatabase } from "./database/index.js";
import categoriesRouter from "./routers/categories.routes.js"
import productsRouter from "./routers/products.routes.js"

const app = express();

app.use(express.json());
app.use("/categories", categoriesRouter)
app.use("/products", productsRouter)

const PORT = process.env.PORT || 3333;

export default app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
  startDatabase()
});
