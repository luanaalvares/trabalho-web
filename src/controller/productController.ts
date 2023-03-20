import { Request, Response } from 'express'
import productService from '../productService'

class ProductController {

    async create(req: Request, res: Response) {
        await productService.createProductList(req.body)

        return res.status(201).send()
    }

    async list(req: Request, res: Response) {
        const productList = await productService.listProduct()

        return res.status(200).send(productList)
    }

    async stock(req: Request, res: Response) {
        const productStock = await productService.getStock()

        return res.status(200).send(productStock)
    }

    async getStockValue(req: Request, res: Response) {
        const stockValue = await productService.getStockValue()

        return res.status(200).send(stockValue)
    }


}

export default new ProductController()