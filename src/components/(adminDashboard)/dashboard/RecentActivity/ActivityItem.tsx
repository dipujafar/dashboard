import React from 'react';

import { 
  ShoppingCart, 
  Check, 
  Plus, 
  Heart, 
  Star, 
  Diamond, 
  Circle 
} from 'lucide-react';
import { TActivityItem } from '@/types';
import { cn } from '@/lib/utils';

interface ActivityItemProps {
  item: TActivityItem;
}

const bgColors = {
    "shopping-cart": "bg-indigo-500",
    check: "bg-fuchsia-500",
    plus: "bg-pink-500",
    heart: "bg-orange-400",
    star: "bg-amber-400",
    diamond: "bg-green-400",
    circle: "bg-red-400",
  };
  
 

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'shopping-cart':
      return <ShoppingCart size={18} className="text-white" />;
    case 'check':
      return <Check size={18} className="text-white" />;
    case 'plus':
      return <Plus size={18} className="text-white" />;
    case 'heart':
      return <Heart size={18} className="text-white" />;
    case 'star':
      return <Star size={18} className="text-white" />;
    case 'diamond':
      return <Diamond size={18} className="text-white" />;
    case 'circle':
      return <Circle size={18} className="text-white" />;
    default:
      return <Circle size={18} className="text-white" />;
  }
};

const ActivityItem: React.FC<ActivityItemProps> = ({ item }) => {

    // @ts-ignore
const bgColorClass = bgColors[item?.icon];

  const renderTitle = () => {
    if (item.order_id && !item.product) {
      return (
        <span>
          {item.activity} - <span className="font-medium">{item.order_id}</span>
        </span>
      );
    } else if (item.product) {
      return (
        <span>
          {item.activity} - <span className="font-medium">{item.product}</span>
        </span>
      );
    }
    return <span>{item.activity}</span>;
  };

  return (
    <div className="flex items-start mb-4 last:mb-0">
      <div className={cn(`rounded-full p-2 mr-3 ${item.color} flex-shrink-0 bg-gray-700`, bgColorClass)}>
        {getIcon(item.icon)}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className="text-sm font-semibold text-gray-800">{renderTitle()}</h4>
          <span className="text-xs text-gray-500">{item.time_ago}</span>
        </div>
        <p className="text-sm text-gray-600 mt-0.5">{item.details}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
