import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";

export default interface IProductRepository {
  create(data: IProductDTO): Promise<Product>;
  findById(id: number): Promise<Product | undefined>;
  update(data: IProductDTO): Promise<Product>;
  findAll(): Promise<Product[]>;
  delete(id: number): Promise<boolean>;
  findByIds(ids:number[]):Promise<Product[]>;
  updateMany(data: IProductDTO[]):Promise<Product[]>;
}
