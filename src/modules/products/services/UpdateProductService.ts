import FindCategoryByIdService from "../../../modules/categories/services/FindCategoryByIdService";
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

        if (data.preco && data.preco <= 0) {
            throw new AppError("Preço deve ser maior que zero!")
        }

        if (data.quantidade && data.quantidade < 0) {
            throw new AppError("Quantidade em estoque não pode ser menor que zero!")
        }

        await new FindCategoryByIdService().execute(data.category_id)

        const repository = new ProductRepository()

        return repository.update(data)
    }
}