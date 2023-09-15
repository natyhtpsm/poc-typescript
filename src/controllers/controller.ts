import { db } from '../database/database';
interface Filme {
    nome: string;
    plataforma: string;
    genero: string;
    status: string;
    nota?: number;
    resumo?: string;
}
  
  async function postarFilme(req: Request, res: Response): Promise<void> {
    const body = req.body as Filme; 
    try {
      const query = `
        INSERT INTO Filmes (nome, plataforma, genero, status, nota, resumo)
        VALUES ($1, $2, $3, $4, $5, $6)
      `;
  
      const values = [
        body.nome, // Use 'body.nome' em vez de 'filme.nome'
        body.plataforma, // Use 'body.plataforma' em vez de 'filme.plataforma'
        body.genero, // Use 'body.genero' em vez de 'filme.genero'
        body.status, // Use 'body.status' em vez de 'filme.status'
        body.nota, // Use 'body.nota' em vez de 'filme.nota'
        body.resumo, // Use 'body.resumo' em vez de 'filme.resumo'
      ];
  
      await db.query(query, values);
  
      console.log('Filme inserido com sucesso!');
      res.status(201).json({ message: 'Filme inserido com sucesso!' });
    } catch (error) {
      console.error('Erro ao inserir o filme:', error);
      res.status(500).json({ error: 'Erro ao inserir o filme' });
    }
  }