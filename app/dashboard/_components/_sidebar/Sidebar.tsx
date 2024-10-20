import { LuCandy, LuFrame, LuStore, LuTruck, LuUser, LuUsers } from "react-icons/lu";
import NavItem from "./NavItem";


export default function Sidebar(){
    return(
    <nav className="w-[10vw] h-[90vh] bg-orange-200 flex flex-col items-center py-20 justify-center gap-10">
        <NavItem icon={<LuStore className="text-4xl"/>} path="/dashboard"/>
        <NavItem icon={<LuTruck className="text-4xl"/>} path="/dashboard/providers"/>
        <NavItem icon={<LuCandy className="text-4xl"/>} path="/dashboard/products"/>
        <NavItem icon={<LuUser className="text-4xl" />} path="/dashboard/managers"/>
        <NavItem icon={<LuUsers className="text-4xl" />} path="/dashboard/employees"/>
    </nav>
    );
}