import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class PostegresCategoriesRepository implements ICategoriesRepository {
    create({name, description}: ICreateCategoryDTO): void {
        console.log(name, description)
    }
    list(): Category[] {
        return null;
    }
    findByName(name: string): Category {
        return null;
    }

}

export { PostegresCategoriesRepository };
