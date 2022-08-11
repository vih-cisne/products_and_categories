import deleteProductService from "../services/deleteProduct.service"



const deleteProductController = async (req, res) => {

    const { id } = req.params

    try {

        const product = await deleteProductService(id)
        
        return res.status(204).json({product: product, message: "Produto deletado com sucesso!"})

    } catch(err) {

        return res.status(400).json({message: err.message})

    }

}

export default deleteProductController