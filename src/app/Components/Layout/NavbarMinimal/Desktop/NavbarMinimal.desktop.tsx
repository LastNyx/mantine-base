import { useState } from "react";
import { Center, Stack } from "@mantine/core";
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconUser,
} from "@tabler/icons-react";
import classes from "./NavbarMinimal.desktop.module.css";
import { ColorSchemeToggle } from "@/lib/components/ColorSchemeToggle/ColorSchemeToggle.tsx";
import { NavLinkButton } from "@/lib/components/NavLinkButton/NavLinkButton.tsx";

const mockdata = [
  { icon: IconHome2, label: "Home" },
  { icon: IconGauge, label: "Dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
  { icon: IconCalendarStats, label: "Releases" },
  { icon: IconUser, label: "Account" },
  { icon: IconFingerprint, label: "Security" },
  { icon: IconSettings, label: "Settings" },
];

export function NavbarMinimalDesktop() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavLinkButton
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>{/*<MantineLogo type="mark" size={30} />*/}</Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <ColorSchemeToggle isNavLink={true} />
        <NavLinkButton icon={IconSwitchHorizontal} label="Change account" />
        <NavLinkButton icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  );
}
