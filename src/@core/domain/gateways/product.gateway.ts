import { Product } from "../entities/Product";

export interface ProductGateway {
  findAll(): Promise<Product[]>;
  findById(id: number): Promise<Product>;
}