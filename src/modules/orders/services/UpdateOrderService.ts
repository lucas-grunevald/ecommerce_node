import IOrderDTO from "../dtos/IOrderDTO";
import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class UpdateOrderService {
    async execute(data:IOrderDTO): Promise<Order>{
        const repository = new OrderRepository()

        return repository.update(data)
    }
}