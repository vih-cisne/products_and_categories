import receiveCategoryByIdService from "../services/receiveCategoryById.service"



const receiveCategoryByIdController = async (req, res) => {

    const { id } = req.params

    try {

        const category = await receiveCategoryByIdService(id)
        
        return res.status(200).json(category)

    } catch(err) {

        return res.status(400).json({message: err.message})

    }

}

export default receiveCategoryByIdController