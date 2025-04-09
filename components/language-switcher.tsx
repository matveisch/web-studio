import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function LanguageSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:text-primary cursor-pointer p-1 text-sm font-medium">
        <Globe className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">English</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">German</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
