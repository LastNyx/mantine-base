import {
  IconGauge,
  IconHome2,
  IconSettings,
  IconUser,
  IconUsersGroup,
} from "@tabler/icons-react";

export interface INavigationData {
  icon: typeof IconHome2;
  label: string;
  link?: string;
  links?: INavigationData[];
}

export const navigationData: INavigationData[] = [
  {
    icon: IconHome2,
    label: "Home",
    link: "/",
  },
  { icon: IconGauge, label: "Dashboard", link: "/dashboard" },
  { icon: IconSettings, label: "Settings", link: "/settings" },
  {
    icon: IconUsersGroup,
    label: "UserGroup",
    links: [{ icon: IconUser, label: "User", link: "/users" }],
  },
];
