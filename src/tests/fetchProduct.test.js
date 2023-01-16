import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('01 - Se retorna produto esperado', async () => {
    const search = await fetchProduct('MLB1405519561')
    expect(search).toEqual(product);
  });
});
