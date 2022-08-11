import database from "../../database/index.js";

const receiveProductsByCategoryService = async (category_id) => {
    
    try {
        const res = await database.query(`
        SELECT 
            c.name AS category, price, p.name
        FROM
            categories c
        JOIN products p
            ON $1 = p.category_id`, 
        [category_id])
        return res.rows

    } catch(err) {

        throw new Error(err)

    }
}

export default receiveProductsByCategoryService