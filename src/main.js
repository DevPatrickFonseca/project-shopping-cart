import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import {
  // createProductImageElement,
  createCustomElement,
  createProductElement,
  // getIdFromProduct,
  // createCartProductElement,
} from './helpers/shopFunctions';

const product = document.querySelector('.products');

document.querySelector('.cep-button').addEventListener('click', searchCep);

const dataStoreProducts = async () => { // Requisito 03
  const storeProducts = document.querySelector('.products');

  // Requisito 04
  product.appendChild(createCustomElement('p', 'loading', 'Carregando...'));

  const dataProduct = await fetchProductsList('computador');

  // Requisito 04 - Continua
  product.querySelector('.loading').remove();

  dataProduct.forEach((element) => {
    storeProducts.appendChild(createProductElement(element));
  });
};

try { // Requisito 05
  await dataStoreProducts();
} catch (error) {
  const errorMsg = 'Algum erro ocorreu, recarregue a página e tente novamente';
  product.appendChild(createCustomElement('p', 'error', errorMsg));
}
