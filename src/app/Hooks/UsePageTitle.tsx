import { useEffect } from "react";
import { useTitleStore } from "@/app/Store/TitleStore.tsx";

interface IUsePageTitleProps {
  title: string;
  index?: boolean;
  prevRoute?: string | number;
}

const usePageTitle = (props: IUsePageTitleProps) => {
  const { title, prevRoute = undefined, index = true } = props;

  const { setStates } = useTitleStore();

  useEffect(() => {
    setStates(title, index, prevRoute);
  }, []);
};

export default usePageTitle;
