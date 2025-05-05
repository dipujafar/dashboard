import React from 'react';
import ProductCard from './ProductCard';
import { TProduct } from '@/types';

interface TopSellingProductsProps {
  products: TProduct[];
}

const TopSellingProducts: React.FC<TopSellingProductsProps> = ({ products }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4 gap-x-1">
        <h2 className="xl:text-sm 2xl:text-sm text-sm font-semibold text-gray-900">Top-Selling Products</h2>
        <a href="#" className="text-blue-600 xl:text-xs 2xl:text-sm text-sm hover:underline">View All</a>
      </div>
      <div className="divide-y divide-gray-200">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;
