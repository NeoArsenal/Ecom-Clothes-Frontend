
import { MenuIcon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
  return(
    <Popover>
        <PopoverTrigger>
                <MenuIcon />    
        </PopoverTrigger>
        <PopoverContent>
            <Link href="/categories/polos/basic" className="block">Polos Basic</Link>
            <Link href="/categories/shirts/formal" className="block">Camisas Formales</Link>
            <Link href="/categories/jeans" className="block">Jeans</Link>
            <Link href="/categories/sportswear" className="block">Ropa Deportiva</Link>
            <Link href="/categories/winter-clothes" className="block">Ropa de Invierno</Link>
            <Link href="/categories/accessories" className="block">Accesorios</Link>

        </PopoverContent>
    </Popover>
  );
}

export default ItemsMenuMobile;