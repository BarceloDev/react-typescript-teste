````md
# Product Register - React + TypeScript

## 📌 Sobre o Projeto

Este projeto é um pequeno teste desenvolvido para praticar conceitos fundamentais de React com TypeScript.

A aplicação permite:

- visualizar produtos
- cadastrar novos produtos
- manipular estados com `useState`
- renderizar listas dinamicamente
- trabalhar com formulários controlados
- utilizar tipagem com TypeScript

O objetivo principal não foi criar uma aplicação completa, mas sim entender como o React funciona junto com TypeScript na prática.

---

# 🚀 Tecnologias Utilizadas

- React
- TypeScript
- Vite

---

# 📂 Estrutura do Projeto

```bash
src/
 ├── App.tsx
 ├── main.tsx
```

---

# 🧠 Conceitos Praticados

## useState

O projeto utiliza o hook `useState` para:

- armazenar os produtos
- armazenar o nome do produto
- armazenar o preço do produto

Exemplo:

```tsx
const [products, setProducts] = useState<ProductProp[]>([]);
```

---

## Tipagem com TypeScript

Foi criado um tipo chamado `ProductProp` para padronizar os produtos da aplicação.

```tsx
type ProductProp = {
  id: number;
  title: string;
  price: number;
};
```

Isso garante:

- mais segurança
- autocomplete
- menos erros
- padronização dos dados

---

## Renderização Dinâmica

Os produtos são renderizados utilizando `.map()`:

```tsx
products.map((product) => {
  return (
    <div key={product.id}>
      <h1>{product.title}</h1>
    </div>
  );
});
```

---

## Formulários Controlados

Os inputs são controlados pelo estado do React.

Exemplo:

```tsx
<input value={nome} onChange={(e) => setNome(e.target.value)} />
```

---

# ➕ Funcionalidade de Cadastro

Ao enviar o formulário:

1. O React impede o recarregamento da página
2. Um novo objeto é criado
3. O produto é adicionado ao array de produtos
4. A interface atualiza automaticamente

---

# ⚠️ Aprendizados Importantes

Durante o desenvolvimento foram encontrados alguns erros importantes:

- tentar adicionar objeto diretamente com spread incorreto
- esquecer propriedades obrigatórias do tipo
- trabalhar com `number` em inputs HTML
- diferença entre `string` e `number`
- importância do `key` no `.map()`

Esses erros ajudaram no entendimento real de:

- imutabilidade
- tipagem
- renderização
- atualização de estado

---

# ▶️ Como Executar o Projeto

## Instalar dependências

```bash
npm install
```

## Rodar o projeto

```bash
npm run dev
```

---

# 🎯 Objetivo do Projeto

Este projeto foi desenvolvido apenas como estudo para aprofundar conhecimentos em:

- React
- TypeScript
- manipulação de estado
- componentização
- renderização declarativa

Ele serve como base para projetos maiores no futuro.
````
