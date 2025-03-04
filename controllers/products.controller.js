const { ProductService } = require("../service/products.service")

class ProductController{
    static async getAll(req, res){
        try{
            const products = await ProductService.getAll();
            res.status(200).json(products);
        }catch(error){
            res.status(500).json({message: error.message || "Error trying to read the data, try again later"});
        }
    }

    static async getOneById(req, res){
        try {
            const {id} = req.params;
            const product = await ProductService. getOneBy(id);
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({message: "Product not found"});
            }
        } catch (error) {
            res.status(500).json({error: error.message || "Error trying to read the id, try again later"});
        }
    }

    static async create(req, res){
        try {
            const productData = req.body;
            const newProduct = await ProductService.create(productData);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({error: error.message || "Error trying to create the product, try again later"});
        }
    }

    static async update(req, res){
        try {
            const {id} = req.params;
            const data = req.body;
            const updatedProduct = await ProductService.update(id, data);
            if (updatedProduct) {
                res.status(200).json(updatedProduct);
            } else {
                res.status(404).json({message: "Product not found"});
            }
        } catch (error) {
            res.status(500).json({error: error.message || "Error trying to update the product, try again later"});
        }
    }

    static async delete(req, res){
        try {
            const {id} = req.params;
            const deleted = await ProductService.delete(id);
            if (deleted) {
                res.status(204).json({message: "Product deleted successfully"});
            } else {
                res.status(404).json({message: "Product not found"});
            }
        } catch (error) {
            res.status(500).json({error: error.message || "Error trying to delete the product, try again later"});
        }
    }
}

module.exports = { ProductController }