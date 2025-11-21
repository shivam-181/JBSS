import { LucideIcon } from "lucide-react";
import { IconBadge } from "@/components/icon-badge";
import { formatPrice } from "@/lib/format";

interface InfoCardProps {
  icon: LucideIcon;
  label: string;
  numberOfItems: number;
  variant?: "default" | "success";
  shouldFormat?: boolean;
}

export const InfoCard = ({
  variant,
  icon: Icon,
  numberOfItems,
  label,
  shouldFormat,
}: InfoCardProps) => {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3">
      <IconBadge variant={variant} icon={Icon} />
      <div>
        <p className="font-medium">
          {label}
        </p>
        <p className="text-gray-500 text-sm">
          {shouldFormat ? formatPrice(numberOfItems) : numberOfItems} {numberOfItems === 1 ? "Sale" : "Sales"}
        </p>
      </div>
    </div>
  )
}