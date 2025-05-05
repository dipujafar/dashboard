"use client";
import React, { useState } from "react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Line,
  ComposedChart,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Select } from "antd";

const data = [
  { name: "Jan", growth: 130, profit: 210, sales: 200 },
  { name: "Feb", growth: 110, profit: 180, sales: 320 },
  { name: "Mar", growth: 190, profit: 110, sales: 150 },
  { name: "Apr", growth: 360, profit: 280, sales: 300 },
  { name: "May", growth: 150, profit: 300, sales: 380 },
  { name: "Jun", growth: 220, profit: 370, sales: 450 },
  { name: "Jul", growth: 170, profit: 350, sales: 380 },
  { name: "Aug", growth: 350, profit: 340, sales: 360 },
  { name: "Sep", growth: 260, profit: 380, sales: 420 },
  { name: "Oct", growth: 270, profit: 410, sales: 550 },
  { name: "Nov", growth: 120, profit: 460, sales: 480 },
  { name: "Dec", growth: 320, profit: 480, sales: 490 },
];

const chartConfig = {
  growth: {
    label: "Growth",
    color: "#6366f1", // Indigo color to match blue bars
  },
  profit: {
    label: "Profit",
    color: "#e4e4e7", // Light gray for the background area
  },
  sales: {
    label: "Sales",
    color: "#ec4899", // Pink color to match the line
  },
};

interface SalesOverviewChartProps {
  className?: string;
}

const SalesOverviewChart: React.FC<SalesOverviewChartProps> = ({
  className,
}) => {
  const [selectedYear, setSelectedYear] = useState("2025");

  const handleChange = (value: string) => {
    setSelectedYear(value);
  };

  return (
    <Card className={cn("w-full h-full shadow-sm px-0 max-h-[520px]", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <CardTitle className="text-lg font-medium">Sales Report </CardTitle>
        <div className="flex items-center gap-x-3">
        <Select
          value={selectedYear}
          style={{ width: 100 }}
          onChange={handleChange}
          options={[
            { value: "2025", label: "2025" },
            { value: "2026", label: "2026" },
            { value: "2027", label: "2027" },
            { value: "2028", label: "2028" },
            { value: "2029", label: "2029" },
            { value: "2030", label: "2030" },
          ]}
        />
        </div>
      </CardHeader>
      <CardContent className="pt-0 px-0 xl:px-2">
        <div className=" w-full">
          <ChartContainer config={chartConfig} className="h-full w-full px-0 max-h-[400px] ">
            <ComposedChart
              data={data}
            
            >
              <defs>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e4e4e7" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#e4e4e7" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#f5f5f5" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280", fontSize: 12 }}
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
                formatter={(value) => (
                  <span className="text-sm text-gray-600">{value}</span>
                )}
              />
              <defs>
                <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e4e4e7" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#e4e4e7" stopOpacity={0.1} />
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
