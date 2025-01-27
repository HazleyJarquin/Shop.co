interface Props {
  number: string;
  name: string;
}

export const Statistics = ({ name, number }: Props) => {
  return (
    <div className="bg-transparent flex flex-col items-start border-r-2 pr-5">
      <p className="text-4xl font-bold">{number}</p>

      <span className="text-gray-500">{name}</span>
    </div>
  );
};
