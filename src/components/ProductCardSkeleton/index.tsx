import { Skeleton } from "../ui/skeleton";

export const ProductCardSkeleton = () => {
  return (
    <div className="group w-[300px] h-[300px]">
      <div className="bg-pastelPink rounded-lg overflow-hidden mb-3 aspect-square relative">
        <Skeleton className="w-full h-full" /> {/* Skeleton para la imagen */}
      </div>

      <h3 className="font-medium text-sm mb-2">
        <Skeleton className="w-2/3 h-4" />{" "}
        {/* Skeleton para el nombre del producto */}
      </h3>

      <div className="mb-2">
        <Skeleton className="w-1/2 h-4" />{" "}
        {/* Skeleton para la calificación (o StarRating) */}
      </div>

      <div className="flex items-center gap-2">
        <Skeleton className="w-1/4 h-4" /> {/* Skeleton para el precio */}
        <Skeleton className="w-1/3 h-4" />{" "}
        {/* Skeleton para el precio original tachado */}
        <Skeleton className="w-1/6 h-4" />{" "}
        {/* Skeleton para el porcentaje de descuento */}
      </div>
    </div>
  );
};
