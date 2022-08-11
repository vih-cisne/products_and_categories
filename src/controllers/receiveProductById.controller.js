import receiveProductByIdService from "../services/receiveProductById.service"



const receiveProductByIdController = async (req, res) => {

    const { id } = req.params

    try {

        const product = await receiveProductByIdService(id)
        
        return res.status(200).json(product)

    } catch(err) {

        return res.status(400).json({message: err.message})

    }

}

export default receiveProductByIdController