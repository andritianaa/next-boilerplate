import {
  Tag,
  Users,
  Settings,
  Bookmark,
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
          href: "/admin/dashboard",
          label: "Dashboard",
          active: pathname.includes("/admin/dashboard"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "/u",
          label: "Posts",
          active: pathname.includes("/admin/posts"),
          icon: SquarePen,
          submenus: [
            {
              href: "/admin/posts",
              label: "All Posts",
              active: pathname === "/posts",
            },
            {
              href: "/admin/posts/new",
              label: "New Post",
              active: pathname === "/posts/new",
            },
          ],
        },
        {
          href: "/admin/categories",
          label: "Categories",
          active: pathname.includes("/admin/categories"),
          icon: Bookmark,
          submenus: [],
        },
        {
          href: "/admin/tags",
          label: "Tags",
          active: pathname.includes("/admin/tags"),
          icon: Tag,
          submenus: [],
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
