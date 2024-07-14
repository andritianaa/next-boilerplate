import {
  Users,
  Settings,
  SquarePen,
  LayoutGrid,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/admin",
          label: "Dashboard",
          active: pathname == "/admin",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "/",
          label: "Posts",
          active: pathname.includes("/admin/post"),
          icon: SquarePen,
          submenus: [
            {
              href: "/admin/post",
              label: "All Posts",
              active: pathname === "/post",
            },
            {
              href: "/admin/post/new",
              label: "New Post",
              active: pathname === "/post/new",
            },
            {
              href: "/admin/post/categories",
              label: "Categories",
              active: pathname.includes("/admin/post/categories"),
            },
            {
              href: "/admin/post/tags",
              label: "Tags",
              active: pathname.includes("/admin/post/tags"),
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/admin/users",
          label: "Users",
          active: pathname.includes("/admin/users"),
          icon: Users,
          submenus: [],
        },
        {
          href: "/admin/account",
          label: "Account",
          active: pathname.includes("/admin/account"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
