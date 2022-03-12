import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest { 
    name: string;
    description: string;
}

export class CreateSpecificationService {
    private specificationsRepository: ISpecificationsRepository;

    constructor(specificationsRepository: ISpecificationsRepository) {
        this.specificationsRepository = specificationsRepository;
    }
    
    execute({name, description}: IRequest): void{
        const existSpecification = this.specificationsRepository.findByName(name);

        if(existSpecification) {
            throw new Error("Specification already exist");
            
        }
        
        this.specificationsRepository.create({name, description})
    }
}