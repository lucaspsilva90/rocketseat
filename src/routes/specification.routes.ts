import { Router } from 'express';

import { CreateSpecificationController } from '../modules/cars/UseCases/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from '../modules/cars/UseCases/listSpecification/ListSpecificationsController';

const specificationsRoutes = Router();

const createSpecificationsController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post('', createSpecificationsController.handle);

specificationsRoutes.get('', listSpecificationsController.handle);

export { specificationsRoutes };
