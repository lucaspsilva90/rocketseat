import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationsServiceController } from "./ListSpecificationsController"
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase"

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationRepository);
const listSpecificationsController = new ListSpecificationsServiceController(listSpecificationsUseCase);

export { listSpecificationsController }