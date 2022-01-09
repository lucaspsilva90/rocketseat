import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { Request, Response } from 'express';

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

  handle(request: Request, response: Response): Response {
    const categories = this.listCategoriesUseCase.execute();

    return response.status(200).json(categories);
  }
}

export { ListCategoriesController }