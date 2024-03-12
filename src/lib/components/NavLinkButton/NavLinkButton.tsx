import { IconHome2 } from "@tabler/icons-react";
import { rem, Tooltip, UnstyledButton } from "@mantine/core";
import classes from "./NavLinkButton.module.css";

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
  isMobile?: boolean;
}

export function NavLinkButton({
  icon: Icon,
  label,
  active,
  onClick,
  isMobile = false,
}: NavbarLinkProps) {
  return (
    <>
      <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton
          onClick={onClick}
          className={isMobile === true ? classes.linkMobile : classes.link}
          data-active={active || undefined}
        >
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
          {isMobile ? (
            <div style={{ height: rem(20), paddingLeft: rem(5) }}>{label}</div>
          ) : null}
        </UnstyledButton>
      </Tooltip>
    </>
  );
}
