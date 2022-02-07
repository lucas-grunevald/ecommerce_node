import IOrderProductDTO from "./IOrderProductDTO";

export default interface IOrderDTO {
  id?: number;
  cliente_id: number;
  status: string;
  valor:number;
  forma_pagamento: string;
  pedido_produtos: IOrderProductDTO[];
}
