import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { CheckCircle, Clock } from "lucide-react";

import { getAnalytics } from "@/actions/get-analytics";
import { InfoCard } from "./_components/info-card";
import { Chart } from "@/components/chart";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const {
    data,
    totalRevenue,
    totalSales,
  } = await getAnalytics(userId);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <InfoCard
          icon={Clock}
          label="Total Revenue"
          numberOfItems={totalRevenue}
          shouldFormat={true}
        />
        <InfoCard
          icon={CheckCircle}
          label="Total Sales"
          numberOfItems={totalSales}
          variant="success"
        />
      </div>
      <Chart data={data} />
    </div>
  );
}