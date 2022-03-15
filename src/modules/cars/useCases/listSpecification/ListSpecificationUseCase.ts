import { Specification } from "../../model/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

export class ListSpecificationUseCase {
    private specificationsRepository: SpecificationsRepository;

    constructor(specificationsRepository: SpecificationsRepository) {
        this.specificationsRepository = specificationsRepository;
    }

    execute(): Specification[] {
        const specifications = this.specificationsRepository.list();
        return specifications;
    }
}