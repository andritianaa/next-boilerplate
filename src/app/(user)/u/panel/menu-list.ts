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
          href: "/u/dashboard",
          label: "Dashboard",
          active: pathname.includes("/u/dashboard"),
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
          active: pathname.includes("/u/posts"),
          icon: SquarePen,
          submenus: [
            {
              href: "/u/posts",
              label: "All Posts",
              active: pathname === "/posts",
            },
            {
              href: "/u/posts/new",
              label: "New Post",
              active: pathname === "/posts/new",
            },
          ],
        },
        {
          href: "/u/categories",
          label: "Categories",
          active: pathname.includes("/u/categories"),
          icon: Bookmark,
          submenus: [],
        },
        {
          href: "/u/tags",
          label: "Tags",
          active: pathname.includes("/u/tags"),
          icon: Tag,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/u/users",
          label: "Users",
          active: pathname.includes("/u/users"),
          icon: Users,
          submenus: [],
        },
        {
          href: "/u/account",
          label: "Account",
          active: pathname.includes("/u/account"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
