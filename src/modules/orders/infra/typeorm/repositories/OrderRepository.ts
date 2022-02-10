import IOrderDTO from "../../../dtos/IOrderDTO";
import IOrderRepository from "../../../repositories/IOrderRepository";
import { getRepository, Repository } from "typeorm";
import Order from "../entities/Order";

export default class OrderRepository implements IOrderRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  async findById(id: number): Promise<Order | undefined> {
    return this.ormRepository
      .createQueryBuilder("order")
      .leftJoinAndSelect("order.pedido_produtos", "pp")
      .leftJoinAndSelect("pp.produto", "p")
      .where("order.id = :id", { id })
      .getOne();
  }

  async create(data: IOrderDTO): Promise<Order> {
    const order = this.ormRepository.create(data);
    console.log(order)
    return this.ormRepository.save(order);
  }

  findByClientId(cliente_id:number): Promise<Order[]>{
    return this.ormRepository
    .createQueryBuilder("order")
    .leftJoinAndSelect("order.pedido_produtos", "pp")
    .leftJoinAndSelect("pp.produto", "p")
    .where("order.cliente_id = (:cliente_id)", { cliente_id })
    .getMany()
  }

  update(data:IOrderDTO): Promise<Order>{
    return this.ormRepository.save(data);
  }
  
}
