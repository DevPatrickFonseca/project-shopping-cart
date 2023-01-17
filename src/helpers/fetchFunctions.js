export const fetchProduct = async (produto) => {
  const urlApiId = `https://api.mercadolibre.com/items/${produto}`;

  if (produto === undefined) throw new Error('ID não informado');

  const dataApiId = await fetch(urlApiId);
  const dataMlId = await dataApiId.json();

  return dataMlId;
};

export const fetchProductsList = async (produto) => {
  const urlApi = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;

  if (!produto) throw new Error('Termo de busca não informado');
  const dataApi = await (await fetch(urlApi)).json();
  const dataMl = await dataApi.results;

  return dataMl;
};
