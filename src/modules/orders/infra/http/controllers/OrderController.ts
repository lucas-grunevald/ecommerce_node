import { Request, Response } from "express";
import FindOrderByIdService from "../../../services/FindOrderByIdSevice";
import CreateOrderService from "../../../services/CreateOrderSevice";
import FindOrdersByClientIdService from "../../../../../modules/orders/services/FindOrdersByClientIdService";

class OrderController {
  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const {cliente_id} = data

    const createOrderService = new CreateOrderService();

    const product = await createOrderService.execute({...data, cliente_id: Number(cliente_id)});

    return response.json(product);
  }

  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOrderService = new FindOrderByIdService();

    const product = await findOrderService.execute(Number(id));

    return response.json(product);
  }
  async find(request:Request, response: Response){
    const {cliente_id} = request.body

    const service = new FindOrdersByClientIdService()

    const orders = await service.execute(cliente_id)

    return response.json(orders)
  }
}

export default new OrderController();
