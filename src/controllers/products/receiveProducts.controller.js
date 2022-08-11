import receiveProductsService from "../../services/products/receiveProducts.service.js"


const receiveProductsController = async (req, res) => {

    try {

        const products = await receiveProductsService()
        

        return res.status(200).json(products)

    } catch(err) {

        return res.status(400).json({message: err.message})

    }

}

export default receiveProductsController