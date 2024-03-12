import { useState } from "react";
import { Center, Flex, Stack } from "@mantine/core";
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
import classes from "./NavbarMinimal.mobile.module.css";
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

export function NavbarMinimalMobile() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavLinkButton
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
      isMobile={true}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>{/*<MantineLogo type="mark" size={30} />*/}</Center>

      <div className={classes.navbarMain}>
        <Flex
          justify="flex-start"
          gap={0}
          align={"center"}
          direction={"column"}
        >
          {links}
        </Flex>
      </div>

      <Stack justify="flex-end" align="center" gap={0}>
        <ColorSchemeToggle isNavLink={true} isMobile={true} />
        <NavLinkButton
          icon={IconSwitchHorizontal}
          label="Change account"
          isMobile={true}
        />
        <NavLinkButton icon={IconLogout} label="Logout" isMobile={true} />
      </Stack>
    </nav>
  );
}
