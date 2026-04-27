import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
    return (<div className="bg-gray-200 h-screen flex justify-between">
        <div className="w-1/2 bg-red-500">
         <Badge variant="secondary">Precision Concierge Service</Badge>
        </div>

        <h1>Elevate your Standard of Service.</h1>

        <p>Join Servidor Local to experience a curated ecosystem connecting 
           discerning clientes with elite professional and premier companies.
        </p>

        <div className="flex justify-evenly w-full">
            <Card>
                <CardContent>
                    <CardTitle>Vetted Network</CardTitle>
                    <CardDescription>
                        Exclusive access to top-tier providers and clients
                    </CardDescription>
                </CardContent>
            </Card>
            
            <Card>
                <CardContent>
                    <CardTitle>Secured Platform</CardTitle>
                    <CardDescription>
                        Enterprise-grade security for all your transactions and data.
                    </CardDescription>
                </CardContent>
            </Card>


        </div>

       

        <div className="w-1/2 bg-blue-500">direita</div>
    </div>
    
);
}