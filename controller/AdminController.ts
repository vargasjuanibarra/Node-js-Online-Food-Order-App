import { Request, Response, NextFunction } from "express"
import { CreateVendorInput } from "../dto"

export const createVandor = async (req: Request, res: Response, next: NextFunction )=> {
    const { name, ownerName, foodType, pincode, address, phone, email, password} = <CreateVendorInput>req.body;

    
}

export const getVandor = async (req: Request, res: Response, next: NextFunction )=> {

}

export const getVandorById = async (req: Request, res: Response, next: NextFunction )=> {

}