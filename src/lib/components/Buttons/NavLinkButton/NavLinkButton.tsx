import { IconChevronRight, IconHome2 } from "@tabler/icons-react";
import { Collapse, Menu, rem, Tooltip, UnstyledButton } from "@mantine/core";
import classes from "./NavLinkButton.module.css";
import { useDisclosure } from "@mantine/hooks";
import ToggleableLink from "@/lib/components/ToggleableLink/ToggleableLink.tsx";
import useLinkLocation from "@/lib/Hooks/useLinkLocation/useLinkLocation.tsx";
import { INavigationData } from "@/app/Navigation/Navigation.ts";
import { Fragment, useEffect } from "react";

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  link?: string;
  links?: INavigationData[];
  active?: boolean;
  onClick?(): void;
  isMobile?: boolean;
  expanded?: boolean;
  disableTooltip?: boolean;
}

export function NavLinkButton({
  icon: Icon,
  label,
  link,
  links = [],
  onClick,
  isMobile = false,
  expanded = false,
  disableTooltip = false,
}: NavbarLinkProps) {
  const hasLinks = links.length > 0;
  const [opened, { toggle, open, close }] = useDisclosure();
  const { active, childActive } = useLinkLocation({
    link: link,
    links: links,
  });

  useEffect(() => {
    if (childActive) {
      open();
    } else {
      close();
    }
  }, [childActive]);

  return (
    <Fragment>
      {!hasLinks ? (
        <Tooltip
          label={label}
          position="right"
          transitionProps={{ duration: 0.5 }}
          disabled={expanded || disableTooltip}
        >
          <ToggleableLink
            key={label}
            to={link ?? ""}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <UnstyledButton
              onClick={() => {
                if (hasLinks && (expanded || isMobile)) {
                  toggle();
                } else {
                  onClick?.();
                }
              }}
              className={classes.link}
              data-active={hasLinks ? undefined : active || undefined}
              data-expanded={expanded ? "data-expanded" : undefined}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Icon
                  style={{ width: rem(20), height: rem(20) }}
                  stroke={1.5}
                />

                {isMobile || expanded ? (
                  <div style={{ paddingLeft: rem(5) }}>
                    <span>{label}</span>
                  </div>
                ) : null}
              </div>
            </UnstyledButton>
          </ToggleableLink>
        </Tooltip>
      ) : null}

      {hasLinks ? (
        <>
          <Menu
            shadow="md"
            width={200}
            position={"right"}
            trigger="hover"
            openDelay={100}
            closeDelay={400}
            disabled={disableTooltip}
          >
            <Menu.Target>
              <div>
                <UnstyledButton
                  onClick={() => {
                    if (hasLinks && (expanded || isMobile)) {
                      toggle();
                    } else {
                      onClick?.();
                    }
                  }}
                  className={classes.link}
                  data-active={hasLinks ? undefined : active || undefined}
                  data-expanded={expanded ? "data-expanded" : undefined}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Icon
                      style={{ width: rem(20), height: rem(20) }}
                      stroke={1.5}
                    />

                    {isMobile || expanded ? (
                      <div style={{ height: rem(20), paddingLeft: rem(5) }}>
                        <span>{label}</span>
                      </div>
                    ) : null}
                  </div>

                  {hasLinks && (isMobile || expanded) ? (
                    <div
                      className={classes.arrow}
                      style={{
                        transform: opened ? "rotate(90deg)" : "rotate(0deg)",
                      }}
                    >
                      <IconChevronRight
                        style={{ width: rem(20), height: rem(20) }}
                      />
                    </div>
                  ) : null}
                </UnstyledButton>
              </div>
            </Menu.Target>

            {hasLinks ? (
              <>
                <Menu.Dropdown>
                  {links.map((link) => (
                    <ToggleableLink
                      key={link.label}
                      to={link.link ?? ""}
                      style={{ textDecoration: "none" }}
                    >
                      <Menu.Item>{link.label}</Menu.Item>
                    </ToggleableLink>
                  ))}
                </Menu.Dropdown>
              </>
            ) : null}
          </Menu>

          <Collapse in={opened || childActive}>
            <div style={{ paddingLeft: rem("10px") }} className={"lmao"}>
              {links.map((link) => (
                <NavLinkButton {...link} key={link.link} expanded={expanded} />
              ))}
            </div>
          </Collapse>
        </>
      ) : null}
    </Fragment>
  );
}
