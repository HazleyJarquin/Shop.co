import { Star, StarHalf } from "lucide-react";

interface Props {
  rating: number;
}

export const StarRating = ({ rating }: Props) => {
  const clampedRating = Math.max(0, Math.min(5, rating));

  const roundedRating = Math.round(clampedRating * 2) / 2;

  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return (
            <Star
              key={index}
              className="w-6 h-6 text-starColor fill-starColor"
            />
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <div key={index} className="relative">
              <Star className="w-6 h-6 text-gray-300" />
              <StarHalf className="w-6 h-6 text-starColor fill-starColor absolute top-0 left-0" />
            </div>
          );
        } else {
          return <Star key={index} className="w-6 h-6 text-gray-300" />;
        }
      })}
      <span className="ml-2 text-gray-600">{clampedRating.toFixed(1)}/5</span>
    </div>
  );
};
