import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import categoriesRouter from "./routers/categories.routes"

const app = express();

//startDatabase?

app.use(express.json());
app.use("/categories", categoriesRouter)

export default app.listen(process.env.DB_PORT || 3333, () => {
  startDatabase()
});
