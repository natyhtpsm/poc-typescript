import { postarFilmeRepository, getFilmesRepository, updateFilmeRepository, 
deletarFilmeRepository, contarFilmesPorGenero, contarFilmesPorPlataforma } from '../repository/repository';
import { Filme } from '../protocols/type';

export async function contarFilmesService(plataforma: string | undefined, genero: string | undefined): Promise<any> {
  if (plataforma) {
    return contarFilmesPorPlataforma(plataforma);
  } else if (genero) {
    return contarFilmesPorGenero(genero);
  } else {
    throw new Error('Tipo de consulta inválido. Especifique "plataforma" ou "genero".');
  }
}

export async function deletarFilmeService(id: number): Promise<void> {
  await deletarFilmeRepository(id);
}
export async function postarFilmeService(filmeData: Filme): Promise<void> {
  await postarFilmeRepository(filmeData);
}

export async function getFilmesService(): Promise<Filme[]> {
  return getFilmesRepository();
}

export async function updateFilmeService(id: number, status: string, nota: number, resumo: string): Promise<void> {
  await updateFilmeRepository(id, status, nota, resumo);
}