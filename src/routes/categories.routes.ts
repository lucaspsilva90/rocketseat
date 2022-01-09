import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/UseCases/createCategory';
import { listCategoriesController } from '../modules/cars/UseCases/listCategories';
import { importCategoryController } from '../modules/cars/UseCases/importCategory';

const upload = multer({
  dest: './tmp'
})

const categoriesRoutes = Router();

categoriesRoutes.post('', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('', (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response)
})

export { categoriesRoutes };