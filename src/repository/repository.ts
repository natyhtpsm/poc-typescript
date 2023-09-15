import { db } from '../database/database';
import { Filme } from '../protocols/type';

export async function getFilmesRepository(): Promise<Filme[]> {
  const query = 'SELECT * FROM Filmes';
  const result = await db.query(query);
  return result.rows; 
}

export async function postarFilmeRepository(filmeData: Filme): Promise<void> {
  const { nome, plataforma, genero, status, nota, resumo } = filmeData;
  const query = `
    INSERT INTO Filmes (nome, plataforma, genero, status, nota, resumo)
    VALUES ($1, $2, $3, $4, $5, $6)
  `;
  const values = [nome, plataforma, genero, status, nota, resumo];

  await db.query(query, values);
}
