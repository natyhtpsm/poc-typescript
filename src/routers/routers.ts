import { Router } from 'express';
import postarFilmes from '../controllers/controller';
import { schemaValidation } from '../middlewares/middleware';
import { filmeSchema } from '../schemas/schema';
import { getFilmesController } from '../controllers/controller';

const router = Router();

router.post('/filmes', schemaValidation(filmeSchema), postarFilmes);
router.get('/filmes', getFilmesController);

export default router;