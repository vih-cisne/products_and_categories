import createProductService from "../../services/products/createProduct.service.js"



const createProductController = async (req, res) => {

    const { name, category_id, price } = req.body

    try {

        const product = await createProductService(name, category_id, price)

        return res.status(201).json({product: product, message: 'Produto criado com sucesso!'})

    } catch(err) {

        return res.status(400).json({message: err.message})

    }

}

export default createProductController