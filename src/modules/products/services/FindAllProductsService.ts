import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class FindAllProductsService {
    async execute(): Promise<Product[]> {
        const repository = new ProductRepository()

        return repository.findAll()
    }
}