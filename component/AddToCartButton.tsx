"use client";
import React, { useState } from "react";

type AddToCartButtonProps = {
  id: string;
  name: string;
  priceCents: number;
  onAdd: (item: { id: string; name: string; priceCents: number; qty: number }) => void;
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ id, name, priceCents, onAdd }) => {
  const [count, setCount] = useState<number>(0);

  const handleAddToCart = () => {
    const newCount = count + 1;
    setCount(newCount);
    onAdd({ id, name, priceCents, qty: newCount });
  };

  return (
    <div className="flex items-center gap-3 mt-8">
      {count === 0 ? (
        <button
          onClick={handleAddToCart}
          className="px-3 py-2 bg-amber-600 text-white  rounded-xl text-sm"
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const newCount = Math.max(count - 1, 0);
              setCount(newCount);
              if (newCount > 0) onAdd({ id, name, priceCents, qty: newCount });
            }}
            className="px-3 py-2 bg-gray-200 rounded-xl text-lg font-bold"
          >
            −
          </button>

          <span className="font-semibold text-sm">{count}</span>

          <button
            onClick={handleAddToCart}
            className="px-3 py-2 bg-gray-200 rounded-xl text-lg font-bold"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
