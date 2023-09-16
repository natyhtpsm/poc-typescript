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

export async function updateFilmeRepository(id: number, status: string, nota: number, resumo: string): Promise<void> {
    const query = `
      UPDATE Filmes
      SET status = $1, nota = $2, resumo = $3
      WHERE id = $4
    `;
    const values = [status, nota, resumo, id];
    await db.query(query, values);
}

export async function deletarFilmeRepository(id: number): Promise<void> {
    const query = 'DELETE FROM Filmes WHERE id = $1';
    const values = [id];
    await db.query(query, values);
}