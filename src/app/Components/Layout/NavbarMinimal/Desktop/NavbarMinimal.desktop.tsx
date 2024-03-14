import { Divider, rem, Stack } from "@mantine/core";
import {
  IconArrowBarLeft,
  IconArrowBarRight,
  IconLogout,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import classes from "./NavbarMinimal.desktop.module.css";
import { ColorSchemeToggle } from "@/lib/components/ColorSchemeToggle/ColorSchemeToggle.tsx";
import { NavLinkButton } from "@/lib/components/Buttons/NavLinkButton/NavLinkButton.tsx";
import { navigationData } from "@/app/Navigation/Navigation.ts";

interface NavbarMinimalDesktopProps {
  expandNavLink?: boolean;
  toggleExpandNavLink?: () => void;
}

export function NavbarMinimalDesktop(props: NavbarMinimalDesktopProps) {
  const { expandNavLink, toggleExpandNavLink } = props;

  const links = navigationData.map((link) => (
    <NavLinkButton
      {...link}
      key={link.label}
      expanded={expandNavLink}
      disableTooltip={expandNavLink}
    />
  ));

  return (
    <nav
      className={classes.navbar}
      data-expanded={expandNavLink ? "data-expanded" : undefined}
    >
      <Stack
        justify="center"
        className={classes.expandButton}
        data-expanded={expandNavLink ? "data-expanded" : undefined}
      >
        <NavLinkButton
          icon={expandNavLink ? IconArrowBarLeft : IconArrowBarRight}
          label={expandNavLink ? "Close" : "Expand"}
          onClick={toggleExpandNavLink}
          disableTooltip={expandNavLink}
        />
      </Stack>

      <Divider />

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Divider p={rem("5px")} />

      <Stack justify="center" gap={0}>
        <ColorSchemeToggle
          isNavLink={true}
          expanded={expandNavLink}
          disableTooltip={expandNavLink}
        />
        <NavLinkButton
          icon={IconSwitchHorizontal}
          label="Change account"
          expanded={expandNavLink}
          disableTooltip={expandNavLink}
        />
        <NavLinkButton
          icon={IconLogout}
          label="Logout"
          expanded={expandNavLink}
          disableTooltip={expandNavLink}
        />
      </Stack>
    </nav>
  );
}
