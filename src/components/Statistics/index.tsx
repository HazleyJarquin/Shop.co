interface Props {
  number: string;
  name: string;
  isFirst?: boolean;
}

export const Statistics = ({ name, number, isFirst }: Props) => {
  return (
    <div
      className={`${
        isFirst ? "border-r-2" : ""
      } bg-transparent flex flex-col items-start pr-5 lg:border-r-2`}
    >
      <p className="text-4xl font-bold">{number}</p>

      <span className="text-gray-500">{name}</span>
    </div>
  );
};
