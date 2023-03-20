import { Router } from 'express'
import productController from './controller/productController'

const routes = Router()

routes.post('/products', productController.create)
routes.get('/products', productController.list)
routes.get('/products-stock', productController.stock)
routes.get('/products-stock-value', productController.getStockValue)

export { routes }