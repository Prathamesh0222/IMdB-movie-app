import Link from "next/link";

interface MenuItemProps {
    title: string;
    address : string;
    Icon : React.ElementType ;
}

export default function MenuItem({title, address, Icon}: MenuItemProps) {
  return (
    <Link href={address} className="hover:text-amber-500">
        <div className="text-2xl sm:hidden">
        <Icon/>
        </div>
        <p className="uppercase hidden sm:inline">{title}</p>
    </Link>
  )
}
