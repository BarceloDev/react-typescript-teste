import { useState } from "react";

type ProductProp = {
  id: number | string;
  title: string;
  price: number;
};

export default function App() {
  const [nome, setNome] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [products, setProducts] = useState<ProductProp[]>([
    {
      id: 1,
      title: "Monitor",
      price: 320.89,
    },
    {
      id: 2,
      title: "Gabinete",
      price: 420.9,
    },
    {
      id: 3,
      title: "Mouse",
      price: 40.89,
    },
  ]);

  function addProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const add = {
      id: products.length + 1,
      title: nome,
      price: price,
    };

    setProducts([...products, add]);
    setNome("");
    setPrice(0);
  }

  return (
    <div className="w-screen h-screen flex flex-col gap-4 p-4">
      <div className="w-screen grid grid-cols-3 gap-4">
        {products.map((product) => {
          return (
            <div key={product.id} className="p-6 rounded-xl shadow">
              <h1>ID:{product.id}</h1>
              <h1>Title:{product.title}</h1>
              <h1>Price:{product.price}</h1>
            </div>
          );
        })}
      </div>

      <form onSubmit={addProduct} className="w-full grid grid-cols-3 gap-4">
        <input
          type="text"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
          className="p-4 border-2 border-gray-300 rounded-2xl"
          placeholder="Nome Produto"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(Number(e.target.value));
          }}
          className="p-4 border-2 border-gray-300 rounded-2xl"
          placeholder="Preço Produto"
        />
        <input
          type="submit"
          value="Registrar"
          className="p-4 bg-blue-500 rounded-2xl text-white"
        />
      </form>
    </div>
  );
}
