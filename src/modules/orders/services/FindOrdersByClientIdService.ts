import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class FindOrdersByClientIdService {
    async execute(cliente_id:number): Promise<Order[]>{
        const repository = new OrderRepository()        

        const orders = await repository.find(cliente_id)

        return orders
    }
}