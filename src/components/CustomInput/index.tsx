import { Input } from "@/components/ui/input";
import { clsx } from "clsx";

interface CustomInputProps extends React.ComponentProps<"input"> {
  placeholder?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const CustomInput = ({
  placeholder = "",
  icon: Icon,
  className,
  ...props
}: CustomInputProps) => {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      )}
      <Input
        className={clsx(
          "w-full rounded-full bg-secondary pl-9 text-sm focus-visible:ring-0 focus-visible:ring-offset-0",
          className
        )}
        placeholder={placeholder}
        type="search"
        {...props}
      />
    </div>
  );
};
