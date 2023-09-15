import { Request, Response } from 'express';
import { postarFilmeService } from '../service/service';

export default async function postarFilmeController(req: Request, res: Response): Promise<void> {
  try {
    await postarFilmeService(req.body);
    res.status(201).json({ message: 'Filme inserido com sucesso!' });
  } catch (error) {
    console.error('Erro ao inserir o filme:', error);
    res.status(500).json({ error: 'Erro ao inserir o filme' });
  }
}

/* 
export default async function postarFilme(req: Request, res: Response): Promise<void> {
  const body = req.body as Filme;
  try {
    const query = `
        INSERT INTO Filmes (nome, plataforma, genero, status, nota, resumo)
        VALUES ($1, $2, $3, $4, $5, $6)
      `;
    const values = [
      body.nome,
      body.plataforma, 
      body.genero, 
      body.status, 
      body.nota, 
      body.resumo, 
    ];

    await db.query(query, values);
    res.status(201).json({ message: 'Filme inserido com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao inserir o filme' });
  }
} */