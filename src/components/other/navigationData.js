import {
  ListBulletIcon,
  PhotoIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/20/solid";


export const navigation = [
    {
      user: "Admin",
      name: "Catalogo",
      icon: ListBulletIcon,
      current: false,
      children: [
        { name: "Buscar", href: "/dashboard" },
        { name: "Crear", href: "/dashboard/crear" },
        { name: "Editar", href: "/dashboard/editar-buscar" },
        { name: "Cargar excel", href: "/dashboard/cargar" },
      ],
    },
    {
      user: "User",
      name: "Catalogo",
      icon: ListBulletIcon,
      current: false,
      children: [
        { name: "Buscar", href: "/dashboard" },
      ],
    },
    {
      name: "Chat",
      gap: true,
      href: "/dashboard/chat",
      icon: ChatBubbleBottomCenterIcon,
      current: false,
    },
    {
      name: "Proyecto",
      href: "/dashboard/proyecto",
      icon: WindowIcon,
      current: false,
    },
    {
      user: "User",
      name: "Cofiguración",
      href: "/dashboard/panel-user",
      icon: PhotoIcon,
      children: [
        { name: "Datos", href: "/dashboard/panel-user" },
        { name: "Contraseña", href: "/dashboard/password-user" }
      ],
    },
    {
      user: "Admin",
      name: "Cofiguración",
      icon: PhotoIcon,
      children: [
        { name: "Datos", href: "/dashboard/panel-admin" },
        { name: "Contraseña", href: "/dashboard/password-admin" }
      ],
    },
    
  ];