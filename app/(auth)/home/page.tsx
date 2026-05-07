// app/page.tsx

import { PedidoCard } from "@/components/core/pedido-card";
import { PaintingIcon } from "@/assets/icons/painting-icons";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="mb-6 text-3xl font-bold">
        Home
      </h1>

      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        <PedidoCard
          title="Instalar porta de entrada"
          description="Preciso instalar uma porta de entrada em uma casa."
          image="/construcao.png"
          category={{
            id: "1",
            nome: "Construção civil",
            icone: "/icone-placeholder.png",
          }}
        />

        <PedidoCard
          title="Pintura"
          description="Preciso pintar as paredes da casa."
          image="/pintura.png" 
          category={{
            id: "2",
            nome: "Pintura",
            icone: "/icone-placeholder.png",
          }}
        />

        <PedidoCard
          title="Instalação de eletricidade"
          description="Instalar tomadas e iluminação ."
          image="/eletricista.png"
          category={{
            id: "3",
            nome: "Eletricidade",
            icone: "/icone-placeholder.png",
          }}
        />

        <PedidoCard
          title="Reparação canalização"
          description="Conserto urgente de vazamento na cozinha."
          image="/canalizacao.png"
          category={{
            id: "4",
            nome: "Canalização",
            icone: "/icone-placeholder.png",
          }}
        />

        <PedidoCard
          title="jardinagem"
          description="Preciso de cuidar de jardim da casa"
          image="/jardinagem.png"
          category={{
            id: "5",
            nome: "Jardinagem",
            icone: "/icone-placeholder.png",
          }}
        />

        <PedidoCard
          title="Instalação de câmeras de segurança"
          description="Preciso de instalar câmera de segurança em casa"
          image="/camera.png"
          category={{
            id: "6",
            nome: "segurança",
            icone: "/icone-placeholder.png",
          }}
        />

      </div>
    </div>
  );
}
