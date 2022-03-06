import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepositoy';



const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const categories = categoriesRepository.create({name, description});
    
    return res.status(201).send(categories); 
})


export { categoriesRoutes };
