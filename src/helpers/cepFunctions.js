export const getAddress = (resultApi) => {
  // Retorna Endereço Completo
  const {
    street,
    address,
    district,
    neighborhood,
    city,
    state,
  } = resultApi;
  return `${street || address} - ${district || neighborhood} - ${city} - ${state}`;
};

const ifApiZipError = (zipError) => (
  zipError.status !== undefined || zipError.type !== undefined
);

const loadingApi = async (loadUrlApi) => {
  const zipCode = await (await fetch(loadUrlApi)).json();

  if (ifApiZipError(zipCode)) {
    throw new Error('Ocorreu um erro: Por favor digite novamente');
  }
  return zipCode;
};

export const searchCep = async () => {
  const addressZipCode = document.getElementsByClassName('cep-input')[0];
  const urlApiZip1 = `https://cep.awesomeapi.com.br/json/${addressZipCode.value}`;
  const urlApiZip2 = `https://brasilapi.com.br/api/cep/v2/${addressZipCode.value}`;
  const addressCart = document.getElementsByClassName('cart__address')[0];

  try {
    const address = await Promise.any([
      loadingApi(urlApiZip1),
      loadingApi(urlApiZip2),
    ]);
    addressCart.innerText = getAddress(address); // Retorna em Template Literals
  } catch {
    addressCart.innerText = 'CEP não encontrado';
  }
};
