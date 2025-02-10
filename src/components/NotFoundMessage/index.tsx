import React from "react";
import { AlertTriangle } from "lucide-react";

interface Props {
  message: string;
}

export const NotFoundMessage = ({ message }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-2xl shadow-md bg-white max-w-sm mx-auto">
      <AlertTriangle className="w-12 h-12 text-red-500" />
      <p className="mt-4 text-gray-700 text-center font-medium">{message}</p>
    </div>
  );
};
