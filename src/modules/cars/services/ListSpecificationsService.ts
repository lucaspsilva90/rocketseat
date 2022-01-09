import { Specification } from "../models/Specification";
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

class ListSpecificationService {
  constructor(private specificationRepository: ISpecificationsRepository) {
  }

  execute(): Specification[] {
    return this.specificationRepository.list();
  }
}


export { ListSpecificationService }