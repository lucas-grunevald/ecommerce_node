import AppError from "../../../shared/errors/AppErrors";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class DeleteProductService {
    async execute(id: number): Promise<void> {
        const repository = new ProductRepository()

        const wasDeleted = await repository.delete(id)

        if (!wasDeleted) {
            throw new AppError("Produto não existe!")
        }
    }
}