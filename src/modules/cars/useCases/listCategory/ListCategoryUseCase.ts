import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export class ListCategoryUseCase {
    private categoryRepository: ICategoriesRepository;

    constructor(categoryRepository: ICategoriesRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute(): Category[]{
        const categories = this.categoryRepository.list()
        return categories;
    }
}