import { Outlet } from "react-router-dom";
import { AppShell, Burger, Divider, Group, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavbarMinimalDesktop } from "@/app/Components/Layout/NavbarMinimal/Desktop/NavbarMinimal.desktop.tsx";
import classes from "./SimpleDashboardLayout.module.css";
import { useEffect, useState } from "react";
import useWindowSize from "@/lib/Hooks/useWindowSize/UseWindowSize.tsx";
import { NavbarMinimalMobile } from "@/app/Components/Layout/NavbarMinimal/Mobile/NavbarMinimal.mobile.tsx";
import PageBreadcrumbs from "@/lib/components/Breadcrumbs/PageBreadcrumbs.tsx";

const SimpleDashboardLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  const [expandNavLink, setExpandNavLink] = useState(false);
  const { width } = useWindowSize();
  // useLocationKey();

  const toggleExpandNavLink = () => {
    setExpandNavLink(!expandNavLink);
    localStorage.setItem("navbarExpanded", !expandNavLink ? "true" : "false");
  };

  useEffect(() => {
    const storedExpanded = localStorage.getItem("navbarExpanded");
    if (storedExpanded !== null) {
      setExpandNavLink((storedExpanded ?? "false") === "true");
    }
  }, []);

  return (
    <AppShell
      header={{
        height: rem("60px"),
        collapsed: width >= 768,
      }}
      navbar={{
        width: "auto",
        breakpoint: "md",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        {width >= 768 ? (
          <NavbarMinimalDesktop
            expandNavLink={expandNavLink ?? false}
            toggleExpandNavLink={toggleExpandNavLink}
          />
        ) : null}

        {width < 768 ? <NavbarMinimalMobile /> : null}
      </AppShell.Navbar>
      <AppShell.Main
        className={classes.mainContainer}
        data-expanded={
          width >= 768 && expandNavLink ? "data-expanded" : undefined
        }
      >
        <div style={{ padding: "var(--mantine-spacing-sm)" }}>
          <PageBreadcrumbs />
        </div>
        <Divider py={rem(5)} />
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default SimpleDashboardLayout;
