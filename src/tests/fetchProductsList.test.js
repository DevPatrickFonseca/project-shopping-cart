import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('01 - Se fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
    expect(fetchProductsList === undefined).toBeFalsy();
  });

  it('02 - Se fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalled();
  });

  it('03 - Se fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('04 - Se fetchProductsList retorna objeto computadorSearch', async () => {
    const search = await fetchProductsList('computador')
    await expect(search).toEqual(computadorSearch)
  });

  it('05 - Se fetchProductsList sem argumento retorna mensagem', async () => {
    const errorMsg = new Error('Termo de busca não informado');
    fetchProductsList().catch(error => expect(error).toEqual(errorMsg));
  });

});
