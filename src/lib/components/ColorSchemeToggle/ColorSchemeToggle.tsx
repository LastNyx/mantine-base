import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./ColorSchemeToggle.module.css";
import { NavLinkButton } from "@/lib/components/Buttons/NavLinkButton/NavLinkButton.tsx";

interface IColorSchemeProps {
  isNavLink?: boolean;
  isMobile?: boolean;
  expanded?: boolean;
  disableTooltip?: boolean;
}

export function ColorSchemeToggle(props: IColorSchemeProps) {
  const {
    isNavLink = false,
    isMobile = false,
    expanded = false,
    disableTooltip = false,
  } = props;
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <>
      {isNavLink ? (
        <NavLinkButton
          icon={colorScheme === "dark" ? IconSun : IconMoon}
          label={`Toggle ${colorScheme === "dark" ? "light" : "dark"} mode`}
          onClick={() =>
            setColorScheme(computedColorScheme === "light" ? "dark" : "light")
          }
          isMobile={isMobile}
          expanded={expanded}
          disableTooltip={disableTooltip}
        />
      ) : null}

      {!isNavLink ? (
        <ActionIcon
          onClick={() =>
            setColorScheme(computedColorScheme === "light" ? "dark" : "light")
          }
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
      ) : null}
    </>
  );
}
