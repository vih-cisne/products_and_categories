import updateCategoryService from "../../services/categories/updateCategory.service.js"



const updateCategoryController = async (req, res) => {

    const { id } = req.params

    try {

        const category = await updateCategoryService(id, req.body)
        
        return res.status(200).json({category:category, message: "Categoria atualizada com sucesso!" })

    } catch(err) {

        return res.status(400).json({message: err.message})

    }

}

export default updateCategoryController