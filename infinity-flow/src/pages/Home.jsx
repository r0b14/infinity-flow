// src/pages/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { getProducts, deleteProduct } from "../services/api";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";

function Home() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const LIMIT = 10;
  const bottomMarkerRef = useRef(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore && !loading) {
          fetchProducts();
        }
      },
      { threshold: 1.0 }
    );

    if (bottomMarkerRef.current) {
      observer.observe(bottomMarkerRef.current);
    }
    return () => {
      if (bottomMarkerRef.current) {
        observer.unobserve(bottomMarkerRef.current);
      }
    };
  }, [bottomMarkerRef, hasMore, loading]);

  async function fetchProducts() {
    setLoading(true);
    try {
      const data = await getProducts(skip, LIMIT);
      setProducts((prev) => [...prev, ...data.products]);
      setSkip((prev) => prev + LIMIT);
      if (skip + LIMIT >= data.total) {
        setHasMore(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      alert("Erro ao deletar produto");
    }
  }

  function handleCreateSuccess(newProduct) {
    setProducts((prev) => [newProduct, ...prev]);
  }

  return (
    <section className="bg-gray-50 pt-10 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <ProductForm onCreateSuccess={handleCreateSuccess} />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary-dark">
          Lista de Produtos
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {loading && (
          <p className="text-center text-gray-600 mt-6 animate-pulse">
            Carregando...
          </p>
        )}

        <div ref={bottomMarkerRef} className="h-2 w-full" />

        {!hasMore && (
          <p className="text-center text-gray-600 mt-6">
            Não há mais produtos a carregar.
          </p>
        )}
      </div>
    </section>
  );
}

export default Home;
