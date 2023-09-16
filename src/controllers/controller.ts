import { Request, Response } from 'express';
import { postarFilmeService, getFilmesService, updateFilmeService, 
  deletarFilmeService, contarFilmesService } from '../service/service';

export async function updateFilmeController(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { status, nota, resumo } = req.body;
  try {
    await updateFilmeService(Number(id), status, nota, resumo);
    res.status(200).json({ message: 'Filme atualizado com sucesso!' });
  } catch (error) {
    console.error('Erro ao atualizar o filme:', error);
    res.status(500).json({ error: 'Erro ao atualizar o filme' });
  }
}

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

export async function deletarFilmeController(req: Request, res: Response): Promise<void> {
  const { id } = req.params; 
  try {
    await deletarFilmeService(Number(id));
    res.status(200).json({ message: 'Filme deletado com sucesso!' });
  } catch (error) {
    console.error('Erro ao deletar o filme:', error);
    res.status(500).json({ error: 'Erro ao deletar o filme' });
  }
}

export async function contarFilmesController(req: Request, res: Response): Promise<void> {
  try {
    const plataforma: string | undefined = req.query.plataforma as string | undefined;
    const genero: string | undefined = req.query.genero as string | undefined;
    const plataformaString = plataforma ? plataforma.toString() : undefined;
    const generoString = genero ? genero.toString() : undefined;
    //exemplo query: http://localhost:4000/contar?plataforma=Netflix
    //exemplo2 query: http://localhost:4000/contar?genero=Comédia
    //exemplo3 query: http://localhost:4000/contar?plataforma=Netflix&genero=Comédia
    const resultado = await contarFilmesService(plataformaString, generoString);

    res.status(200).json(resultado);
  } catch (error) {
    console.error('Erro ao contar filmes:', error);
    res.status(500).json({ error: 'Erro ao contar filmes' });
  }
}







