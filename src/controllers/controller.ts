import { Request, Response } from 'express';
import { postarFilmeService, getFilmesService } from '../service/service';

export default async function postarFilmeController(req: Request, res: Response): Promise<void> {
  try {
    await postarFilmeService(req.body);
    res.status(201).json({ message: 'Filme inserido com sucesso!' });
  } catch (error) {
    console.error('Erro ao inserir o filme:', error);
    res.status(500).json({ error: 'Erro ao inserir o filme' });
  }
}

export async function getFilmesController(req: Request, res: Response): Promise<void> {
  try {
    const filmes = await getFilmesService();
    res.status(200).json(filmes);
  } catch (error) {
    console.error('Erro ao buscar os filmes:', error);
    res.status(500).json({ error: 'Erro ao buscar os filmes' });
  }
}
