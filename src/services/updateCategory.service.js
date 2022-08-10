import database from "../database";

const updateCategoryService = async (category_id, changes) => {

    const keys = Object.keys(changes)
    let keysToChange = []
    let values = []

    keys.forEach((key, index) => {
        keysToChange.push(`${key} = $${index+1}`)
        values.push(changes[key])
    })

    
    try {
        const res = await database.query(`UPDATE 
        categories 
        SET ${keysToChange.join(',')} 
        WHERE id = $${keys.length+1} 
        RETURNING *`,
        [...values, category_id])
        return res.rows[0]

    } catch(err) {

        throw new Error(err)

    }
}

export default updateCategoryService