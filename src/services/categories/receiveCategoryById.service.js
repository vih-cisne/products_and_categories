import database from "../../database/index.js";

const receiveCategoryByIdService = async (category_id) => {
    
    try {
        const res = await database.query("SELECT * FROM categories WHERE id = $1", [category_id])
        return res.rows[0]

    } catch(err) {

        throw new Error(err)

    }
}

export default receiveCategoryByIdService