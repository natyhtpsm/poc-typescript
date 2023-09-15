import { postarFilmeRepository, getFilmesRepository } from '../repository/repository';
import { Filme } from '../protocols/type';

export async function postarFilmeService(filmeData: Filme): Promise<void> {
  await postarFilmeRepository(filmeData);
}


export async function getFilmesService(): Promise<Filme[]> {
  return getFilmesRepository();
}
