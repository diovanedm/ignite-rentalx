import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

export class ListSpecificationController {
    private listSpecificationUseCase: ListSpecificationUseCase;
    constructor(listSpecificationUseCase: ListSpecificationUseCase) {
        this.listSpecificationUseCase = listSpecificationUseCase;
    }

    handle(req: Request, res: Response) : Response {
        const specifications = this.listSpecificationUseCase.execute();

        return res.status(200).json(specifications);
    }
}