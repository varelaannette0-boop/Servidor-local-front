import { Card, CardContent } from "../ui/card"

interface CategoriaType {
    id: string;
    nome: string;
    icone: string;
}

interface PedidoCardProps {
    title: string;
    desciption: string;
    image: string;
    category: CategoriaType;
}

export const PedidoCard = (pedidoCardProps: PedidoCardProps) => {
    return (
        <Card className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
            <CardContent className="p-0">
                <div className="relative"/>
                    <img src="{image}" alt="title" className="w-full h-40 object-cover" />
                
               <div className="absolute -bottom-6 left-4 bg-white rounded-full p-3 shadow">
            <span className="text-xl">{}</span>
          </div>
        
                

                
            </CardContent>
        </Card>
    )
}