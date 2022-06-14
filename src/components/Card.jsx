import React, { useState } from 'react';

const Card = ({ data }) => {
  const [productCount, setProductCount] = useState(0);

  return (
    <div className="p-2 rounded-lg bg-orange-300 shadow-lg">
      <div className="font-semibold">{data?.title}</div>
      <div>${data?.price}</div>
      <div className="flex gap-4 items-center">
        <button
          className="px-2 py-1 bg-red-600 rounded-lg text-white"
          onClick={() => {
            if (productCount > 0) {
              setProductCount((prev) => prev - 1);
            }
          }}
        >
          Remove Product
        </button>
        {productCount}
        <button
          className="px-2 py-1 bg-green-600 rounded-lg text-white"
          onClick={() => setProductCount((prev) => prev + 1)}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Card;
