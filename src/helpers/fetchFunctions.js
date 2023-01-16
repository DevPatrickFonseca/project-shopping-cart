export const fetchProduct = async (produto) => {
  // seu código aqui
  const urlApiId = `https://api.mercadolibre.com/items/${produto}`;

  if (produto === undefined) throw new Error('ID não informado');

  try {
    const dataApiId = await fetch(urlApiId);
    const dataMlId = await dataApiId.json();
    return dataMlId;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchProductsList = async (produto) => {
  // seu código aqui
  const urlApi = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;

  if (!produto) throw new Error('Termo de busca não informado');

  try {
    const dataApi = await (await fetch(urlApi)).json();
    const dataMl = await dataApi.results;

    return dataMl;
  } catch (error) {
    throw new Error(error);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProductsList,
    fetchProduct,
  };
}
