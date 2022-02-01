import { Request, Response } from "express";
import FindProductByIdService from "../../../services/FindProductByIdSevice";
import CreateProductService from "../../../services/CreateProductSevice";
import UpdateProductService from "../../../../../modules/products/services/UpdateProductService";
import FindAllProductsService from "../../../../../modules/products/services/FindAllProductsService";
import DeleteProductService from "../../../../../modules/products/services/DeleteProductService";

class ProductController {
  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createProductService = new CreateProductService();

    const product = await createProductService.execute(data);

    return response.json(product);
  }

  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findProductService = new FindProductByIdService();

    const product = await findProductService.execute(Number(id));

    return response.json(product);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params
    const data = request.body

    const product = await new UpdateProductService().execute({ id: Number(id), ...data })

    return response.json(product)
  }

  async findAll(request: Request, response: Response) {
    const service = new FindAllProductsService()

    const products = await service.execute()

    return response.json(products)
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params

    const service = new DeleteProductService()

    await service.execute(Number(id))

    return response.json()
  }
}

export default new ProductController();
