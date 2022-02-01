import AppError from "../../../shared/errors/AppErrors";
import { ICategoryDTO } from "../dtos/ICategoryDTO";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";
import FindCategoryByIdService from "./FindCategoryByIdService";

export default class UpdateCategoryService {
    async execute(data: ICategoryDTO): Promise<Category> {
        const { id } = data

        if (!id) {
            throw new AppError("Parâmetro ID não encontrado!")
        }

        const repository = new CategoryRepository()

        await new FindCategoryByIdService().execute(id)

        return repository.update(data)
    }
}