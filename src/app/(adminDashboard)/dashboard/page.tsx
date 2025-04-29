import EaringOverviewChart from "@/components/(adminDashboard)/dashboard/EarningOverviewChart";
import LatestUser from "@/components/(adminDashboard)/dashboard/LatestUser";
import MetricsDashboard from "@/components/(adminDashboard)/dashboard/MetricsDashboard";
import SalesOverviewChart from "@/components/(adminDashboard)/dashboard/SalesOverviewChart";
import Statistic from "@/components/(adminDashboard)/dashboard/Statistic";
import UserOverviewChart from "@/components/(adminDashboard)/dashboard/UserOverviewChart";

const DashboardPage = () => {
  return (
    <div className="lg:space-y-8 space-y-4 ">
     <MetricsDashboard></MetricsDashboard>
     <SalesOverviewChart></SalesOverviewChart>
      <EaringOverviewChart></EaringOverviewChart>
      <LatestUser></LatestUser>
    </div>
  );
};

export default DashboardPage;
