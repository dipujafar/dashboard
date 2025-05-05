import MetricsDashboard from "@/components/(adminDashboard)/dashboard/MetricsDashboard";
import RecentActivity from "@/components/(adminDashboard)/dashboard/RecentActivity/RecentActivity";
import SalesOverviewChart from "@/components/(adminDashboard)/dashboard/SalesOverviewChart";
import TopSellingProducts from "@/components/(adminDashboard)/dashboard/TopSellingProducts/TopSellingProducts";
import { activityData, topSellingProducts } from "@/data";

const DashboardPage = () => {
  return (
    <div className="lg:space-y-8 space-y-4 ">
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 gap-5">
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3  gap-5 2xl:col-span-4 xl:col-span-3">
          <MetricsDashboard></MetricsDashboard>
          <div className="2xl:col-span-3  xl:col-span-2">
            <SalesOverviewChart></SalesOverviewChart>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-1 grid-cols-1 gap-5">
          <TopSellingProducts products={topSellingProducts} />
          <RecentActivity activities={activityData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
