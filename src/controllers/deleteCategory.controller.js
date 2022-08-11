import deleteCategoryService from "../services/deleteCategory.service"



const deleteCategoryController = async (req, res) => {

    const { id } = req.params

    try {

        const category = await deleteCategoryService(id)
        
        return res.status(204).json({category: category, message: "Categoria deletada com sucesso!"})

    } catch(err) {

        return res.status(400).json({message: err.message})

    }

}

export default deleteCategoryController