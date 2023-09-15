import { Router } from 'express';
import postarFilmes from '../controllers/controller';
import { schemaValidation } from '../middlewares/middleware';
import { filmeSchema } from '../schemas/schema';

const router = Router();

router.post('/filmes', schemaValidation(filmeSchema), postarFilmes);

export default router;