import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/UseCases/createCategory';
import { importCategoryController } from '../modules/cars/UseCases/importCategory';
import { listCategoriesController } from '../modules/cars/UseCases/listCategories';

const upload = multer({
  dest: './tmp',
});

const categoriesRoutes = Router();

categoriesRoutes.post('', (request, response) => createCategoryController.handle(request, response));

categoriesRoutes.get('', (request, response) => listCategoriesController.handle(request, response));

categoriesRoutes.post('/import', upload.single('file'), (request, response) => importCategoryController.handle(request, response));

export { categoriesRoutes };
