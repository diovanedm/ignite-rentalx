import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationUseCase";

export const specificationRouter = Router();
const specificationsRepository = new SpecificationsRepository();

specificationRouter.post('/', (req, res) => {
    const {name, description} = req.body;
    const createSpecificationService = new CreateSpecificationService(specificationsRepository)

    createSpecificationService.execute({name, description})
    return res.status(201).send()
})