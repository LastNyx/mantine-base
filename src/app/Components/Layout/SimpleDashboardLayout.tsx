import { Outlet } from "react-router-dom";
import { AppShell, Burger, Group, rem } from "@mantine/core";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import { NavbarMinimalDesktop } from "@/app/Components/Layout/NavbarMinimal/Desktop/NavbarMinimal.desktop.tsx";
import { NavbarMinimalMobile } from "@/app/Components/Layout/NavbarMinimal/Mobile/NavbarMinimal.mobile.tsx";

const SimpleDashboardLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  const { width } = useViewportSize();

  return (
    <AppShell
      header={{
        height: rem("60px"),
        collapsed: width >= 768,
      }}
      navbar={{
        width: "auto",
        breakpoint: "sm",
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
        {width >= 768 ? <NavbarMinimalDesktop /> : <NavbarMinimalMobile />}
      </AppShell.Navbar>
      <AppShell.Main
        style={{
          height: "100%",
          paddingLeft: width >= 768 ? rem("80px") : 0,
          paddingTop: width >= 768 ? 0 : rem("60px"),
        }}
      >
        <div style={{ padding: rem("15px") }}>
          <Outlet />
        </div>
      </AppShell.Main>
    </AppShell>
  );
};

export default SimpleDashboardLayout;
