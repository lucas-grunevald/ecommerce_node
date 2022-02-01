import AppError from "../../../shared/errors/AppErrors";
import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class UpdateProductService {
    async execute(data: IProductDTO): Promise<Product> {
        const { id } = data

        if (!id) {
            throw new AppError("Parâmetro ID não encontrado!")
        }

        const repository = new ProductRepository()

        return repository.update(data)
    }
}