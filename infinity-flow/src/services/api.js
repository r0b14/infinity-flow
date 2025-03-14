// src/services/api.js

const BASE_URL = "https://dummyjson.com";

// GET - lista paginada (skip e limit para infinite scroll)
export async function getProducts(skip = 0, limit = 10) {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
  if (!res.ok) {
    throw new Error("Erro ao buscar produtos");
  }
  return res.json();
}

// POST - cria novo produto
export async function createProduct(productData) {
  const res = await fetch(`${BASE_URL}/products/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  if (!res.ok) {
    throw new Error("Erro ao criar produto");
  }
  return res.json();
}

// PUT - atualiza produto pelo ID
export async function updateProduct(id, productData) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  if (!res.ok) {
    throw new Error("Erro ao atualizar produto");
  }
  return res.json();
}

// DELETE - remove produto pelo ID
export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Erro ao deletar produto");
  }
  return res.json();
}
