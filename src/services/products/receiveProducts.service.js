import database from "../../database/index.js";

const receiveProductsService = async () => {
    
    try {
        const res = await database.query("SELECT * FROM products")

        return res.rows

    } catch(err) {

        throw new Error(err)

    }
}

export default receiveProductsService