import FindCategoryByIdService from "../../../modules/categories/services/FindCategoryByIdService";
import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class CreateProductService {
  public async execute(data: IProductDTO): Promise<Product> {
    const productRepository = new ProductRepository();

    await new FindCategoryByIdService().execute(data.category_id)

    const product = await productRepository.create(data);

    return product;
  }
}
