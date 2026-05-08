import { DollarSign, Shield } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export const RatesFees = () => {
  return (
    <Card className="rounded-3xl border border-gray-200 shadow-sm">
      <CardContent className="p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">Rates & Fees</h2>

          <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 transition">
            Edit
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-3 ">
            <div className="flex items-center gap-2 text-gray-400">
              <DollarSign size={18} />
              <span className="text-sm font-medium uppercase tracking-wide">
                Hourly Rate
              </span>
            </div>
            <h3 className="text 4-xl font-bold text-gray-800">
              §50
              <span className="text-lg font-medium text-gray-400">
                /hr
              </span>
            </h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
