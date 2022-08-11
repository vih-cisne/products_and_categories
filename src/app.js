import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import categoriesRouter from "./routers/categories.routes"
import productsRouter from "./routers/products.routes"


const app = express();

//startDatabase?

app.use(express.json());
app.use("/categories", categoriesRouter)
app.use("/products", productsRouter)



export default app.listen(process.env.DB_PORT || 3333, () => {
  startDatabase()
});
