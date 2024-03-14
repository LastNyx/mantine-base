import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { INavigationData } from "@/app/Navigation/Navigation.ts";

interface IProps {
  link?: string;
  links?: INavigationData[];
}

const useLinkLocation = ({ link, links }: IProps) => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [childActive, setChildActive] = useState(false);

  const handleActive = () => {
    const splittedPathName = location.pathname.split("/");
    const pathKey = splittedPathName[1];

    const findLinks = links?.find((link) => link.link === `/${pathKey}`);

    if (findLinks) {
      setChildActive(true);
    } else if (link === `/${pathKey}`) {
      setActive(true);
    } else {
      setChildActive(false);
      setActive(false);
    }
  };

  useEffect(() => {
    handleActive();
  }, [location]);

  return { active, childActive };
};

export default useLinkLocation;
