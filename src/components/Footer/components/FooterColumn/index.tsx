import Link from "next/link";

interface Props {
  title: string;
  options: { name: string; href: string }[];
}

export const FooterColumn = ({ title, options }: Props) => {
  return (
    <div className="w-full flex flex-col items-center gap-1">
      <h1 className="text-lg uppercase tracking-[0.25em]">{title}</h1>
      {options.map((option) => (
        <Link className="text-gray-500" key={option.name} href={option.href}>
          {option.name}
        </Link>
      ))}
    </div>
  );
};
