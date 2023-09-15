import { postarFilmeRepository } from '../repository/repository';
import { Filme } from '../protocols/type';

export async function postarFilmeService(filmeData: Filme): Promise<void> {
  await postarFilmeRepository(filmeData);
}
