import React from "react";
import { StarRating } from "../StarRating";
import { BadgeCheckIcon } from "lucide-react";

interface Props {
  rating: number;
  name: string;
  opinion: string;
}

export const OpinionCard = ({ name, opinion, rating }: Props) => {
  return (
    <div className="w-full h-[240px] bg-white p-5 rounded-xl flex flex-col gap-3 border-2 cursor-context-menu">
      <StarRating rating={rating} showNumber={false} />
      <div className="flex gap-2 items-center">
        <p className="font-semibold">{name}.</p>
        <BadgeCheckIcon size={20} className="text-white" fill="#01AB31" />
      </div>

      <p className="text-sm text-gray-500 line-clamp-5">{`"${opinion}"`}</p>
    </div>
  );
};
