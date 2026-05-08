import { RatesFees } from "@/components/dashboard/rates-fees";

export default function DashPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <div className="mb-8">
                <h1 className="mt-2 text-4xl font-bold text-gray-800">
                    Dashboard
                </h1>

                <p className="mt-1 text-gray-500">
                    Manage your business settings, rates, and availability.
                </p>

            </div>
            <RatesFees/>

        </div>
    )
}