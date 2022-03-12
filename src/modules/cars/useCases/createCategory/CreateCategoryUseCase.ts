import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryUseCase {
    private categoriesRepository: ICategoriesRepository;

    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository
    }

    execute({ name, description }: IRequest): void{
        const categoriesAlreadyExists = this.categoriesRepository.findByName(name);
        
        if(categoriesAlreadyExists) {
            throw new Error("Category already exists!");
        }
    
        this.categoriesRepository.create({name, description});
    }
}
