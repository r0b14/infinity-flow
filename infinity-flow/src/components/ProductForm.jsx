import React, { useState } from "react";
import { createProduct } from "../services/api";

export default function ProductForm({ onCreateSuccess }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title || !price) {
      alert("Preencha título e preço");
      return;
    }
    try {
      const newProduct = await createProduct({ title, price: Number(price) });
      alert("Produto criado com sucesso!");
      onCreateSuccess?.(newProduct);
      setTitle("");
      setPrice("");
    } catch (error) {
      console.error(error);
      alert("Erro ao criar produto!");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
    >
      <div className="flex flex-col">
        <label htmlFor="title" className="font-semibold mb-1 text-primary-dark">
          Título
        </label>
        <input
          id="title"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex: Novo Produto"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="price" className="font-semibold mb-1 text-primary-dark">
          Preço
        </label>
        <input
          id="price"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Ex: 100"
        />
      </div>
      <button
        type="submit"
        className="w-fit bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary-dark transition-colors"
      >
        Criar
      </button>
    </form>
  );
}
