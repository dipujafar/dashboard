import { TProduct } from '@/types';
import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
  product: TProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center 2xl:gap-2 xl:gap-1 gap-3 ">
        <div className="2xl:size-14 xl:size-12 size-14 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
          <Image 
            src={product.imageUrl} 
            alt={product.name} 
            width={1200}
            height={1200}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex flex-col items-start">
          <h3 className="2xl:font-medium xl:font-normal font-medium text-gray-900 2xl:text-sm xl:text-xs text-base ">{product.name}</h3>
          <p className="xl:text-xs text-sm text-blue-600">{product.category}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="font-semibold text-gray-900">${product.price}</span>
        <span className="xl:text-xs text-sm text-gray-500">{product.sales} Sales</span>
      </div>
    </div>
  );
};

export default ProductCard;
