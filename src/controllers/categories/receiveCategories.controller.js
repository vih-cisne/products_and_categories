import receiveCategoriesService from "../../services/categories/receiveCategories.service.js"



const receiveCategoriesController = async (req, res) => {

    try {

        const categories = await receiveCategoriesService()
        

        return res.status(200).json(categories)

    } catch(err) {

        return res.status(400).json({message: err.message})

    }

}

export default receiveCategoriesController