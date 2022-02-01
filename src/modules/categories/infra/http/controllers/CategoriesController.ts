import { Request, Response } from "express";
import UpdateCategoryService from "../../../../../modules/categories/services/UpdateCategoryService";
import CreateCategorieService from "../../../../../modules/categories/services/CreateCategorieService";
import FindAllCategoriesService from "../../../services/FindAllCategoriesService";
import FindCategoryByIdService from "../../../services/FindCategoryByIdService";
import Category from "../../typeorm/entities/Category";

class CategoriesController {
  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findCategoryById = new FindCategoryByIdService();

    const category = await findCategoryById.execute(Number(id));

    return response.json(category);
  }

  async findAll(request: Request, response: Response): Promise<Response> {
    const findAllCategories = new FindAllCategoriesService();

    const categories = await findAllCategories.execute();

    return response.json(categories);
  }
  async create(request: Request, response: Response) {
    const data = request.body

    const service = new CreateCategorieService()

    const category = await service.execute(data)

    return response.json(category)
  }
  async update(request: Request, response: Response) {
    const { id } = request.params
    const data = request.body

    const category = await new UpdateCategoryService().execute({ id: Number(id), ...data })

    return response.json(category)
  }
}

export default new CategoriesController();
