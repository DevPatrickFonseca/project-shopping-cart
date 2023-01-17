import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('01 - Se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
    expect(fetchProduct === undefined).toBeFalsy();
  });

  it('02 - Se fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalled();
  });

  it('03 - Se fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561')
  expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('04 - Se retorna produto esperado', async () => {
    const search = await fetchProduct('MLB1405519561')
    expect(search).toEqual(product);
  });

  it('05 - Se fetchProduct sem argumento retorna mensagem', async () => {
    const errorMsg = new Error('ID não informado');
    fetchProduct().catch(error => expect(error).toEqual(errorMsg));
  });
});
