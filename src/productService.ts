import { writeFile, readFile } from 'fs/promises'

class ProductService {
    async createProductList(data) {
        try {
            await writeFile('products.json', JSON.stringify(data, null, 2))

        } catch (error) {
            throw new Error(error)
        }
    }

    async listProduct() {
        const productList = await readFile('products.json', "utf-8")

        return JSON.parse(productList)
    }

    async getStock() {
        const productList = await this.listProduct()

        const stockProducts = productList.map(item => {
            let stock = {
                nome: item.nome,
                quantidade: item.qtde,
                preco: item.preco,
                valor_stock: item.preco + item.qtde
            }


            return stock
        })


        return stockProducts

    }

    async getStockValue() {
        const stockList = await this.getStock()

        const stockValue = stockList.reduce((valorAnterior, item) => valorAnterior + item.valor_stock , 0)

        return {
            valor: stockValue
        }
    }


}

export default new ProductService()