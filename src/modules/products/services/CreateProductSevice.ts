import AppError from "../../../shared/errors/AppErrors";
import FindCategoryByIdService from "../../../modules/categories/services/FindCategoryByIdService";
import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class CreateProductService {
  public async execute(data: IProductDTO): Promise<Product> {
    const productRepository = new ProductRepository();

    if (data.preco <= 0) {
      throw new AppError("Preço deve ser maior que zero!")
    }

    if (data.quantidade < 0) {
      throw new AppError("Quantidade em estoque não pode ser menor que zero!")
    }

    await new FindCategoryByIdService().execute(data.categoria_id)

    const product = await productRepository.create(data);

    return product;
  }
}
