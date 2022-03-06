import { Category } from "../model/Category";

// DTO => DATA TRANSFER OBJECT
interface ICreateCategoryDTO {
    name: string; 
    description: string;
}

class CategoriesRepository {
    private categories: Category[] = [];

    constructor() {
        this.categories = []
    }

    create({ name, description }: ICreateCategoryDTO): Category {
        const category = new Category()

        Object.assign(category, {
            name, 
            description,
            createdAt: new Date()
        })

        this.categories.push(category)
        return category;
    }
}

export { CategoriesRepository };
