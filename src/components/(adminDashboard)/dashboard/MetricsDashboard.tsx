import React from 'react';
import MetricsCard from './MetricsCard';


const MetricsDashboard: React.FC = () => {
  const metrics = [
    {
      title: "Total Products",
      value: "854",
      changeValue: "2.56",
      increased: true,
      type: "products" as const
    },
    {
      title: "Total Users",
      value: "31,876",
      changeValue: "0.34",
      increased: true,
      type: "users" as const
    },
    {
      title: "Total Revenue",
      value: "$34,241",
      changeValue: "7.66",
      increased: true,
      type: "revenue" as const
    },
    {
      title: "Total Sales",
      value: "1,76,586",
      changeValue: "0.74",
      increased: false,
      type: "sales" as const
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
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