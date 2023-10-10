<div align="center">
  <h1><strong>SHOPPING CART💻</h1>
  </div>

<div>
	<p>No projeto de carrinho de compras dinâmico, utilizei a API do <strong>Mercado Livre</strong> para obter e buscar informações sobre produtos à venda.

Durante o desenvolvimento deste projeto, apliquei os princípios do desenvolvimento orientado a testes, também conhecido como TDD (Test Driven Development). 

Isso me ajudou a garantir que o código fosse de alta qualidade, compreendesse os casos de uso da aplicação e funcionasse corretamente.</p>
</div>

## <strong>🧰Tecnologias, linguagens e ferramentas:</strong><br />
  <div align="center">
    <a href="https://github.com/PFonsecaFV/PFonsecaFV">
    <img src="https://github.com/PFonsecaFV/PFonsecaFV/blob/main/src/icons/ic_js.svg" width="60" fill="none" />
    <img src="https://github.com/PFonsecaFV/PFonsecaFV/blob/main/src/icons/ic_babel.svg" width="60" fill="none" />
    <img src="https://github.com/PFonsecaFV/PFonsecaFV/blob/main/src/icons/ic_jest.svg" width="60" fill="none" />
    <img src="https://github.com/PFonsecaFV/PFonsecaFV/blob/main/src/icons/ic_mocha.svg" width="60" fill="none" />
  </a>
  </div>
  

## <strong>🎯Habilidades Utilizadas</strong><br />

- Desenvolvimento orientado a testes (TDD) para garantir a qualidade do código.
- Consumo de dados de uma API externa (Mercado Livre) para exibir produtos.
- Manipulação do Local Storage para armazenar informações do carrinho de compras.
- Cálculo do valor total dos itens no carrinho de compras.
- Exibição do endereço completo de um CEP usando APIs de CEPs.

## 📝Orientações para instalar e testar o projeto

1. Crie um diretório usando o comando mkdir e entre no diretório:
	```bash
	mkdir patrick-fonseca-projetos && cd patrick-fonseca-projetos
	```
 2. Clone o repositório e use o comando no terminal:
	```bash
	git clone git@github.com:PFonsecaFV/project-shopping-cart.git
	```
3. Acesse o diretório do projeto:
	```bash
	cd patrick-fonseca-projetos
	```
4. Instale suas dependências:
	```bash
	npm install
	```

5. Entre no VS Code e rode os testes:
	```bash
	code .
	```

6. Rode os testes:
	```bash
	npm run test 
	```
 
	```bash
	npm run test-coverage
	```

## <strong>🎯O que foi desenvolvido</strong><br />
01. **Desenvolvimento Orientado a Testes (TDD):** 
	- Implementei testes para cobrir no mínimo 50% das funções e linhas no arquivo `fetchFunctions`. 
	- Isso inclui testar se a função `fetchProductsList` é uma função, se ela chama a função `fetch` corretamente, se utiliza o endpoint correto e se retorna os dados esperados. 
	- Também testei cenários de erro.

02. **Implementação da Função `fetchProductsList`:** 
	- Desenvolvi a função `fetchProductsList` para buscar produtos na API do Mercado Livre com base em um termo de busca. 
	- Ela verifica se o termo de busca foi informado e constrói a URL corretamente. 
	- Os resultados são retornados na forma de um array de produtos.

03. **Listagem de Produtos:** 
	- Utilizei a função `fetchProductsList` para criar uma lista de produtos na página, chamando-a com o termo `'computador'`. Criei elementos HTML para cada produto retornado e os adicionei à seção de produtos.

04. **Carregamento durante a Requisição à API:** 
	- Implementei um elemento "Carregando..." que é exibido durante a requisição à API. 
	- Isso fornece feedback ao usuário enquanto os dados são carregados. 
	- O elemento é removido após a conclusão da requisição.

05. **Exibição de Mensagem de Erro:** 
	- Em caso de erro na requisição à API, exibo uma mensagem de erro informando ao usuário que algo deu errado. 
	- Essa mensagem é exibida apenas quando ocorre um erro na requisição.

06. **Desenvolvimento Orientado a Testes (TDD):** 
	- Implementei testes que cobrem no mínimo 100% das funções e linhas no arquivo `fetchFunctions`. 
	- Isso inclui testar a função `fetchProduct` da mesma maneira que foi feito para `fetchProductsList`.

07. **Implementação da Função `fetchProduct`:** 
	- Desenvolvi a função `fetchProduct` para buscar detalhes de um produto com base em seu ID. 
	- Ela verifica se o ID foi informado e constrói a URL corretamente.

08. **Adição de Produtos ao Carrinho:** 
	- Implementei a funcionalidade que permite adicionar produtos ao carrinho de compras. 
	- Ao clicar no botão "Adicionar ao carrinho" de um produto, o ID desse produto é salvo no Local Storage e seus detalhes são buscados usando a função `fetchProduct`. 
	- Os produtos são então adicionados ao carrinho.

09. **Carregamento do Carrinho de Compras ao Iniciar a Página:** 
	- Ao carregar a página, recupero os itens adicionados ao carrinho de compras do Local Storage e exibo os detalhes dos produtos no carrinho.

10. **Cálculo do Valor Total do Carrinho de Compras:** 
	- Calculei o valor total dos itens no carrinho de compras.
	- Esse valor é atualizado sempre que um produto é adicionado ou removido do carrinho.

11. **Requisição à API de CEPs e Exibição do Endereço:** 
	- Implementei uma função que faz uma requisição a APIs de CEPs e exibe o endereço completo com base no CEP fornecido. 
	- Usei `Promise.any` para selecionar a resposta mais rápida entre duas APIs diferentes.

## ✅O que foi desenvolvido e testado

01. Se fetchProduct é uma função

02. Se fetch é chamado ao executar fetchProduct

03. Se fetch é chamado com o endpoint correto ao executar fetchProduct

04. Se retorna produto esperado

05. Se fetchProduct sem argumento retorna mensagem

06. Se fetchProductsList é uma função

07. Se fetch é chamado ao executar fetchProductsList

08. Se fetch é chamado com o endpoint correto ao executar fetchProductsList

09. Se fetchProductsList retorna objeto computadorSearch

10. Se fetchProductsList sem argumento retorna mensagem


---

<div align="center">
  <h2>Patrick Fonseca</h2>
	  <a href="https://www.linkedin.com/in/PatrickFonseca/" target="_blank">
      <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank">
    </a>
</div>
