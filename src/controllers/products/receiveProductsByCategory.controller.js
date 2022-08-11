import receiveProductsByCategoryService from "../../services/products/receiveProductsByCategory.service.js"


const receiveProductsByCategoryController = async (req, res) => {

    const { id } = req.params

    try {

        const products = await receiveProductsByCategoryService(id)
        
        return res.status(200).json(products)

    } catch(err) {

        return res.status(400).json({message: err.message})

    }

}

export default receiveProductsByCategoryController