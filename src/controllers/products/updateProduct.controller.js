import updateProductService from "../../services/products/updateProduct.service.js"



const updateProductController = async (req, res) => {

    const { id } = req.params

    try {

        const product = await updateProductService(id, req.body)
        
        return res.status(200).json({product:product, message: "Produto atualizado com sucesso!" })

    } catch(err) {

        return res.status(400).json({message: err.message})

    }

}

export default updateProductController