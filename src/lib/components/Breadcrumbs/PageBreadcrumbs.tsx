import { useLocation } from "react-router-dom";
import { Breadcrumbs, rem } from "@mantine/core";
import ToggleableLink from "@/lib/components/ToggleableLink/ToggleableLink.tsx";
import { toTitleCase } from "@/lib/Utils/Casing/ToTitleCase.ts";
import { IconHome2 } from "@tabler/icons-react";

const PageBreadcrumbs = () => {
  const location = useLocation();
  const pathParts = [...new Set(location.pathname.split("/"))];

  const breadcrumbsItems = pathParts.map((part, index) => {
    const path = pathParts.slice(0, index + 1).join("/");
    return {
      label:
        part === "" ? (
          <IconHome2
            style={{
              height: rem(18),
              width: rem(18),
            }}
          />
        ) : (
          toTitleCase(part)
        ),
      path: path === "" ? "/" : path,
    };
  });

  return (
    <Breadcrumbs
      styles={{
        breadcrumb: {
          display: "flex",
          textDecoration: "none",
          color: "var(--mantine-primary-color-filled)",
        },
      }}
    >
      {breadcrumbsItems.map((item, index) => (
        <ToggleableLink to={item.path} key={index}>
          {item.label}
        </ToggleableLink>
      ))}
    </Breadcrumbs>
  );
};

export default PageBreadcrumbs;
