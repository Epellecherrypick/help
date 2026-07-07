// src/data/sidebarConfig.js
import { IoStatsChartSharp } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { IoFastFoodSharp } from "react-icons/io5";
import { SiFiles } from "react-icons/si";
import { IoPeopleSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { LuChartSpline } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";


export const sidebarConfig = {
  admin: [
    { label: "Overview", icon: <IoStatsChartSharp className="w-7 h-7 text-white"/>, href: "/dashboard" },
    { label: "Orders", icon: <GoChecklist className="w-7 h-7 text-white"/>, href: "/dashboard/orders" },
    { label: "Deliveries", icon: <TbTruckDelivery className="w-7 h-7 text-white"/>, href: "/dashboard/deliveries" },
    { label: "Dishes", icon: <IoFastFoodSharp  className="w-7 h-7 text-white"/>, href: "/dashboard/dishes" },
    { label: "Categories", icon: <SiFiles  className="w-7 h-7 text-white"/>, href: "/dashboard/categories" },
    { label: "Workers", icon: <IoPeopleSharp  className="w-7 h-7 text-white"/>, href: "/dashboard/workers" },
    { label: "Hire / Fire", icon: <GrUserManager  className="w-7 h-7 text-white"/>, href: "/dashboard/hire-fire" },
    { label: "Reports", icon: <LuChartSpline  className="w-7 h-7 text-white"/>, href: "/dashboard/reports" },
    { label: "Settings", icon: <IoSettingsOutline  className="w-7 h-7 text-white"/>, href: "/dashboard/settings" },
  ],
  manager: [
    { label: "Overview", icon: <IoStatsChartSharp className="w-7 h-7 text-white"/>, href: "/dashboard" },
    { label: "Orders", icon: <GoChecklist className="w-7 h-7 text-white"/>, href: "/dashboard/orders" },
    { label: "Deliveries", icon:  <TbTruckDelivery className="w-7 h-7 text-white"/>, href: "/dashboard/deliveries" },
    { label: "Dishes", icon: <IoFastFoodSharp  className="w-7 h-7 text-white"/>, href: "/dashboard/dishes" },
    { label: "Categories", icon: <SiFiles  className="w-7 h-7 text-white"/>, href: "/dashboard/categories" },
    { label: "Hire Worker", icon: <GrUserManager  className="w-7 h-7 text-white"/>, href: "/dashboard/hire-fire" },
  ],
  kitchen: [
    { label: "Overview", icon: <IoStatsChartSharp className="w-7 h-7 text-white"/>, href: "/dashboard" },
    { label: "Dishes", icon: <IoFastFoodSharp  className="w-7 h-7 text-white"/>, href: "/dashboard/dishes" },
    { label: "Orders", icon: <GoChecklist className="w-7 h-7 text-white"/>, href: "/dashboard/orders" },
    { label: "Deliveries", icon: <TbTruckDelivery className="w-7 h-7 text-white"/>, href: "/dashboard/deliveries" },
  ],
}

export const roleLabels = {
  admin: { title: "Administrator", color: "bg-purple-500", icon: "👑" },
  manager: { title: "Manager", color: "bg-blue-500", icon: "🧑‍💼" },
  kitchen: { title: "Kitchen Staff", color: "bg-orange-500", icon: "👨‍🍳" },
}