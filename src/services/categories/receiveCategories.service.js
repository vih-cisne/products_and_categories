import database from "../../database/index.js";

const receiveCategoriesService = async () => {
    
    try {
        const res = await database.query("SELECT * FROM categories")

        return res.rows

    } catch(err) {

        throw new Error(err)

    }
}

export default receiveCategoriesService