import ProductRepository from "../../../modules/products/infra/typeorm/repositories/ProductRepository";
import AppError from "../../../shared/errors/AppErrors";
import IOrderDTO from "../dtos/IOrderDTO";
import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class CreateOrderService {
  public async execute(data: IOrderDTO): Promise<Order> {
    const orderRepository = new OrderRepository();
    const productRepository = new ProductRepository()

    
    if(!data.cliente_id){
      throw new AppError("Cliente não informado!")
    }

    if(data.pedido_produtos.length < 1){
      throw new AppError("Pedido deve ter pelo menos um produto!")
    }

    data.pedido_produtos.forEach(el => {
      if(!el.quantidade){
        throw new AppError("A quantidade do produto deve ser informada!")
      }
    })

    let valor = 0

    const produtos = await productRepository.findByIds(data.pedido_produtos.map(el => el.produto_id))

    if(produtos.length != data.pedido_produtos.length){
      throw new AppError("Inconsistência na lista de produtos!")
    }

    produtos.forEach(el => {
      let pedido_produto = data.pedido_produtos.find(p => p.produto_id == el.id)

      if(!pedido_produto){
        throw new AppError(`Produto: ${el.nome} não encontrado!`)
      }

      if(el.quantidade < pedido_produto.quantidade){
        throw new AppError(`Produto ${el.nome} sem estoque!`)
      }

      valor += pedido_produto.quantidade * el.preco

      el.quantidade -= pedido_produto.quantidade
    })

    const order = await orderRepository.create({...data, valor});

    productRepository.updateMany(produtos)

    return order;
  }
}
