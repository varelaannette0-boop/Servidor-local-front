import { PedidoCard } from "@/components/core/pedido-card";

export default function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <PedidoCard
                title = "Instalar porta de entrada"
                desciption ="preciso instalar uma porta de entrada em uma casa de"
                image ="/placeholder.png"
                category = {{
                    id: "1",
                    nome: "Construção civil",
                    icone: "/icone-placeholder.png",
                }}
            />
            
        </div>
    );
}
