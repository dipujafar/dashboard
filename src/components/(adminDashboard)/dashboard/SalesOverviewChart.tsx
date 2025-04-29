"use client"
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Line,
  ComposedChart,
} from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const data = [
  { name: 'Jan', growth: 130, profit: 210, sales: 200 },
  { name: 'Feb', growth: 110, profit: 180, sales: 320 },
  { name: 'Mar', growth: 190, profit: 110, sales: 150 },
  { name: 'Apr', growth: 360, profit: 280, sales: 300 },
  { name: 'May', growth: 150, profit: 300, sales: 380 },
  { name: 'Jun', growth: 220, profit: 370, sales: 450 },
  { name: 'Jul', growth: 170, profit: 350, sales: 380 },
  { name: 'Aug', growth: 350, profit: 340, sales: 360 },
  { name: 'Sep', growth: 260, profit: 380, sales: 420 },
  { name: 'Oct', growth: 270, profit: 410, sales: 550 },
  { name: 'Nov', growth: 120, profit: 460, sales: 480 },
  { name: 'Dec', growth: 320, profit: 480, sales: 490 },
];

const chartConfig = {
  growth: { 
    label: "Growth",
    color: "#6366f1" // Indigo color to match blue bars
  },
  profit: {
    label: "Profit",
    color: "#e4e4e7" // Light gray for the background area
  },
  sales: {
    label: "Sales",
    color: "#ec4899" // Pink color to match the line
  }
};

interface SalesOverviewChartProps {
  className?: string;
}

const SalesOverviewChart: React.FC<SalesOverviewChartProps> = ({ className }) => {
  return (
    <Card className={cn("w-full shadow-sm", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <CardTitle className="text-lg font-medium">Sales Overview</CardTitle>
        <div className="flex items-center">
          <button className="text-sm text-gray-500 flex items-center">
            Sort By
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path 
                d="M6 9L12 15L18 9" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className=" w-full">
          <ChartContainer config={chartConfig} className='max-h-[350px] w-full'>
            <ComposedChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e4e4e7" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#e4e4e7" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#f5f5f5" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 12 }}
                domain={[0, 700]}
                tickCount={8}
              />
              <Tooltip
              // @ts-ignore
                content={(props) => <ChartTooltipContent {...props} />}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="circle"
                iconSize={8}
                formatter={(value) => <span className="text-sm text-gray-600">{value}</span>}
              />
              <defs>
                <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e4e4e7" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#e4e4e7" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <Bar 
                dataKey="growth" 
                fill="#6366f1" 
                radius={[4, 4, 0, 0]} 
                barSize={20} 
                name="Growth"
              />
              <Line 
                type="monotone" 
                dataKey="profit" 
                stroke="#A0A7B7" 
                strokeWidth={2} 
                dot={false} 
                activeDot={false}
                name="Profit" 
                strokeOpacity={0.5}
                fill="#A0A7B7"
                
              />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#ec4899" 
                strokeWidth={3} 
                dot={false} 
                name="Sales"
              />
            </ComposedChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesOverviewChart;
