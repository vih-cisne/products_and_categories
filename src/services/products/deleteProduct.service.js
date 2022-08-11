import database from "../../database/index.js";

const deleteProductService = async (product_id) => {
    
    try {
        const res = await database.query("DELETE FROM products WHERE id = $1", [product_id])
        return res.rows[0]

    } catch(err) {
        throw new Error(err)

    }
}

export default deleteProductService