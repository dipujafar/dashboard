import React from 'react';
import MetricsCard from './MetricsCard';


const MetricsDashboard: React.FC = () => {
  const metrics = [
    {
      title: "Total Sales",
      value: "854",
      changeValue: "2.56",
      increased: true,
      type: "sales" as const
    },
    {
      title: "Revenue",
      value: "31,876",
      changeValue: "0.34",
      increased: true,
      type: "revenue" as const
    },
    {
      title: "Average Order Value",
      value: "$34,241",
      changeValue: "7.66",
      increased: true,
      type: "value" as const
    },
    {
      title: "Total Orders",
      value: "1,76,586",
      changeValue: "0.74",
      increased: false,
      type: "orders" as const
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3 w-full max-h-[500px] ">
      {metrics.map((metric, index) => (
        <MetricsCard
          key={index}
          title={metric.title}
          value={metric.value}
          changeValue={metric.changeValue}
          increased={metric.increased}
          type={metric.type}
        />
      ))}
    </div>
  );
};

export default MetricsDashboard