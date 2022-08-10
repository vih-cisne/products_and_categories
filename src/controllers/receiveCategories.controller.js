import receiveCategoriesService from "../services/receiveCategories.service"



const receiveCategoriesController = async (req, res) => {

    try {

        const categories = await receiveCategoriesService()
        

        return res.status(200).json(categories)

    } catch(err) {

        return res.status(400).json(err.message)

    }

}

export default receiveCategoriesController