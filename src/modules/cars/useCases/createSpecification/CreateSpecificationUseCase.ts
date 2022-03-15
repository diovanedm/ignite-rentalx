import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateSpecificationUseCase {
    private specificationRepository: ISpecificationsRepository;

    constructor(specificationRepository: ISpecificationsRepository) {
        this.specificationRepository = specificationRepository;
    }

    execute({name, description}: IRequest): void {
        const specification = this.specificationRepository.findByName(name);

        if(specification) {
            throw new Error("Specification already exists!");  
        }

        this.specificationRepository.create({name, description})
    }
}  