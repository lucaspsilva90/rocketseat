import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/UseCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/UseCases/listCategories/ListCategoriesController';

const upload = multer({
  dest: './tmp',
});

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('', createCategoryController.handle);

categoriesRoutes.get('', listCategoriesController.handle);

export { categoriesRoutes };
