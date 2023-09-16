import { Router } from 'express';
import postarFilmes from '../controllers/controller';
import { schemaValidation } from '../middlewares/middleware';
import { filmeSchema } from '../schemas/schema';
import { getFilmesController, updateFilmeController, deletarFilmeController } from '../controllers/controller';

const router = Router();

router.post('/filmes', schemaValidation(filmeSchema), postarFilmes);
router.get('/filmes', getFilmesController);
router.put('/filmes/:id', updateFilmeController);
router.delete('/deletar/:id', deletarFilmeController);

export default router;