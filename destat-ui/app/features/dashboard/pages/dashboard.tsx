// [Number]
// Visitors
// Live Surveys
// Archived Surveys

// [Graph]
// time x Live Surveys
// time x Archived Surveys

import TrendCard from "../compoents/trend-card";
import {TrendChart} from "../compoents/trend-chart";

const data = [
    { date: "2025-10-01", data: 186 },
    { date: "2025-10-02", data: 192 },
    { date: "2025-10-03", data: 178 },
    { date: "2025-10-04", data: 201 },
    { date: "2025-10-05", data: 189 },
    { date: "2025-10-06", data: 195 },
    { date: "2025-10-07", data: 183 },
    { date: "2025-10-08", data: 199 },
    { date: "2025-10-09", data: 205 },
    { date: "2025-10-10", data: 193 },
    { date: "2025-10-11", data: 187 },
    { date: "2025-10-12", data: 202 },
    { date: "2025-10-13", data: 198 },
    { date: "2025-10-14", data: 191 },
];

export default function Dashboard() {
    return (
        <div className="mt-10 flex w-full flex-col gap-8">
            <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <TrendCard
                    title={"Total Visitors"}
                    value={"123"}
                    trendValue={"200%"}
                    trendMessage={"Trending up"}
                    periodMessage={"last 6 months"}
                />
                <TrendCard
                    title={"Live Surveys"}
                    value={"123"}
                    trendValue={"200%"}
                    trendMessage={"Trending up"}
                    periodMessage={"last 6 months"}
                />
                <TrendCard
                    title={"Archived Surveys"}
                    value={"123"}
                    trendValue={"200%"}
                    trendMessage={"Trending up"}
                    periodMessage={"last 6 months"}
                />
            </div>
            <div className="grid w-full gap-5 lg:grid-cols-2">
                <TrendChart
                    title={"Live Surveys"}
                    description={"daily live survey count"}
                    trendMessage={"Trending up by 5.2% this month"}
                    periodMessage={"October 1 - October 14, 2025"}
                    chartData={data}
                />
                <TrendChart
                    title={"Archived Surveys"}
                    description={"daily Archived Surveys count"}
                    trendMessage={"Holding steady compared to last week"}
                    periodMessage={"October 1 - October 14, 2025"}
                    chartData={data}
                />
            </div>
        </div>
    );
}