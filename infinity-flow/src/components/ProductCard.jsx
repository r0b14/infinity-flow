import React from "react";

function ProductCard({ data, onDelete }) {
  const handleDelete = () => {
    if (!onDelete) return;
    if (window.confirm(`Deseja remover o produto "${data.title}"?`)) {
      onDelete(data.id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow">
      <div>
        <h2 className="text-lg font-semibold mb-2 text-primary-dark">
          {data.title}
        </h2>
        <p className="text-gray-600 mb-3 line-clamp-2">
          {data.description}
        </p>
        <p className="text-gray-700 font-medium">
          Preço: <span className="text-primary font-semibold">${data.price}</span>
        </p>
      </div>

      <button
        onClick={handleDelete}
        className="mt-6 w-fit bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
      >
        Deletar
      </button>
    </div>
  );
}

export default ProductCard;
