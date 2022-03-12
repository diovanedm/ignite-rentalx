import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

export class ListCategoryController {
    private listCategoryUseCase: ListCategoryUseCase;

    constructor(listCategoryUseCase: ListCategoryUseCase) {
        this.listCategoryUseCase = listCategoryUseCase;
    }

    handle(req: Request, res: Response): Response {
        const listCategory = this.listCategoryUseCase.execute()
        return res.status(200).send(listCategory)
    }
    
}