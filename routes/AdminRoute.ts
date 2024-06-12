import express, {Request, Response, NextFunction} from 'express';
import { createVandor, getVandor, getVandorById } from '../controller';

const router = express.Router();

router.post('/vandor', createVandor);
router.get('/vandor', getVandor);
router.post('/vandor/:id', getVandorById);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "Hello from Admin route"})
})

export { router as AdminRoute }