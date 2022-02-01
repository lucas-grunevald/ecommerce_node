import { Request, Response } from "express";
import FindProductByIdService from "../../../services/FindProductByIdSevice";
import CreateProductService from "../../../services/CreateProductSevice";
import UpdateProductService from "../../../../../modules/products/services/UpdateProductService";

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

    const product = new UpdateProductService().execute({ id: Number(id), ...data })

    return response.json(product)
  }
}

export default new ProductController();
