import React from 'react';
import { cn } from '@/lib/utils';
import { 
  ShoppingCart, 
  DollarSign, 
  ChartBar
} from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string;
  changeValue: string;
  increased: boolean;
  type: 'value' | 'orders' | 'revenue' | 'sales';
}

const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  changeValue,
  increased,
  type,
}) => {
  const getIcon = () => {
    const iconClasses = "text-white lg:size-5 size-4";
    
    const bgColors = {
      sales: "bg-indigo-500",
      revenue: "bg-fuchsia-500",
      value: "bg-pink-500",
      orders: "bg-orange-400",
    };
    
    const bgColorClass = bgColors[type];
    
    return (
      <div className={cn("rounded-full p-2 flex items-center justify-center", bgColorClass)}>
        {type === 'sales' && <ShoppingCart className={iconClasses} />}
        {type === 'revenue' && <DollarSign className={iconClasses} />}
        {type === 'value' && <DollarSign className={iconClasses} />}
        {type === 'orders' && <ChartBar className={iconClasses} />}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg lg:px-5 px-3 py-4 shadow-sm  flex flex-col justify-center">
      <div className="flex justify-between items-center ">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        {getIcon()}
      </div>
      <p className="lg:text-2xl text-xl font-bold mb-1">{value}</p>
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