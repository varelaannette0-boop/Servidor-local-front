import { Card, CardContent } from "../ui/card";

interface CategoriaType {
  id: string;
  nome: string;
  icone: string;
}

interface PedidoCardProps {
  title: string;
  description: string;
  image: string;
  category: CategoriaType;
}

export const PedidoCard = ({
  title,
  description,
  image,
  category,
}: PedidoCardProps) => {
  return (
    <Card className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-lg">
      <CardContent className="p-0  ">
        <div className="relative flex  items-center justify-center">
            <img src={image} alt={title} className="h-48 w-full object-cover" />

          <div className="absolute  h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-md  ">
            <img
              src={category.icone}
              alt={category.nome}
              className="h-6 w-6 object-contain"
            />
          </div>
        </div>

        <div className="p-5 pt-10">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

          <p className="mt-2 text-sm text-gray-500">{description}</p>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase text-gray-400">Categoria</p>

              <p className="font-medium text-gray-700">{category.nome}</p>
            </div>

            <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600">
              Ver Prestadores
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
