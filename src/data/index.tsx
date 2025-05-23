import {  TActivityItem, TProduct } from "@/types";


export const topSellingProducts: TProduct[] = [
  {
    id: 1,
    name: 'Chair with Cushion',
    category: 'Furniture',
    price: 124,
    sales: 260,
    imageUrl: '/product_Image_1.png'
  },
  {
    id: 2,
    name: 'Hand Bag',
    category: 'Accessories',
    price: 564,
    sales: 181,
    imageUrl: '/product_Image_2.png'
  },
  {
    id: 3,
    name: 'Sneakers',
    category: 'Sports',
    price: 964,
    sales: 134,
    imageUrl: '/product_Image_3.png'
  },
  {
    id: 4,
    name: 'Ron Hoodie',
    category: 'Fashion',
    price: 769,
    sales: 127,
    imageUrl: '/product_Image_4.png'
  },
  {
    id: 5,
    name: 'Smart Watch',
    category: 'Electronics',
    price: 999,
    sales: 108,
    imageUrl: '/product_Image_3.png'
  }
];



  
  export const activityData: TActivityItem[] = [
    {
      id: '1',
      type: 'order',
      activity: 'New Order',
      order_id: '#12345',
      time_ago: '3 hrs ago',
      details: '2 items purchased by John Doe',
      color: 'bg-blue-500',
      icon: 'shopping-cart'
    },
    {
      id: '2',
      type: 'shipped',
      activity: 'Order Shipped',
      order_id: '#12345',
      time_ago: '1 day ago',
      details: 'Shipped via FedEx',
      color: 'bg-green-500',
      icon: 'check'
    },
    {
      id: '3',
      type: 'product',
      activity: 'Added New Products',
      time_ago: '12 days ago',
      details: 'New items added in Fashions',
      color: 'bg-pink-500',
      icon: 'plus'
    },
    {
      id: '4',
      type: 'favorited',
      activity: 'Product Favorited',
      product: 'iPhone 12 Pro',
      time_ago: '2 days ago',
      details: 'Added to favorites by Jane Smith',
      color: 'bg-red-500',
      icon: 'heart'
    },
    {
      id: '5',
      type: 'rated',
      activity: 'Product Rated',
      product: 'Samsung Galaxy S21',
      time_ago: '3 days ago',
      details: 'Rated 4.5 stars by John Doe',
      color: 'bg-yellow-500',
      icon: 'star'
    },
    {
      id: '6',
      type: 'discount',
      activity: 'Product Discount',
      product: 'Nike Air Max',
      time_ago: '4 days ago',
      details: 'Discounted price applied',
      color: 'bg-cyan-500',
      icon: 'diamond'
    },
    {
      id: '7',
      type: 'inquiry',
      activity: 'Customer Inquiry',
      order_id: '#12346',
      time_ago: '5 days ago',
      details: 'Inquiry received from customer',
      color: 'bg-purple-500',
      icon: 'circle'
    }
  ];
  