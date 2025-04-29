import React from 'react';
import { cn } from '@/lib/utils';
import { 
  ShoppingCart, 
  Users, 
  DollarSign, 
  ChartBar
} from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string;
  changeValue: string;
  increased: boolean;
  type: 'products' | 'users' | 'revenue' | 'sales';
}

const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  changeValue,
  increased,
  type,
}) => {
  const getIcon = () => {
    const iconClasses = "text-white h-5 w-5";
    
    const bgColors = {
      products: "bg-indigo-500",
      users: "bg-fuchsia-500",
      revenue: "bg-pink-500",
      sales: "bg-orange-400",
    };
    
    const bgColorClass = bgColors[type];
    
    return (
      <div className={cn("rounded-full p-2 flex items-center justify-center", bgColorClass)}>
        {type === 'products' && <ShoppingCart className={iconClasses} />}
        {type === 'users' && <Users className={iconClasses} />}
        {type === 'revenue' && <DollarSign className={iconClasses} />}
        {type === 'sales' && <ChartBar className={iconClasses} />}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        {getIcon()}
      </div>
      <p className="text-2xl font-bold mb-1">{value}</p>
      <div className="flex items-center">
        <span className={cn(
          "text-xs font-medium",
          increased ? "text-green-500" : "text-red-500"
        )}>
          {increased ? "Increased By" : "Decreased By"} {changeValue}% 
          {increased ? " ↑" : " ↓"}
        </span>
      </div>
    </div>
  );
};

export default MetricsCard;