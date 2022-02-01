import AppError from "../../../shared/errors/AppErrors";
import { ICategoryDTO } from "../dtos/ICategoryDTO";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class CreateCategorieService {
    async execute(data: ICategoryDTO): Promise<Category> {
        const repository = new CategoryRepository()

        if (data.id) {
            throw new AppError("Id não deve ser informada a tentar criar nova categoria")
        }

        return repository.create(data)
    }
}