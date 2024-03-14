import { useState } from "react";
import { Center, Flex, Stack } from "@mantine/core";
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconHomeBolt,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconUser,
} from "@tabler/icons-react";
import classes from "./NavbarMinimal.mobile.module.css";
import { ColorSchemeToggle } from "@/lib/components/ColorSchemeToggle/ColorSchemeToggle.tsx";
import { NavLinkButton } from "@/lib/components/Buttons/NavLinkButton/NavLinkButton.tsx";

const mockdata = [
  {
    icon: IconHome2,
    label: "Home",
    links: [{ icon: IconHomeBolt, label: "Home Sub", link: "/home-sub" }],
  },
  { icon: IconGauge, label: "Dashboard", link: "/dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics", link: "/analytics" },
  { icon: IconCalendarStats, label: "Releases", link: "/releases" },
  { icon: IconUser, label: "Account", link: "/account" },
  { icon: IconFingerprint, label: "Security", link: "/security" },
  { icon: IconSettings, label: "Settings", link: "/settings" },
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
