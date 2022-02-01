import IOrderProductDTO from "./IOrderProductDTO";

export default interface IOrderDTO {
  id?: number;
  client_id: string;
  status: string;
  forma_pagamento: string;
  pedido_produtos: IOrderProductDTO[];
}
