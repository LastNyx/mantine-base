import usePageTitle from "@/app/Hooks/UsePageTitle.tsx";
import { useTitleStore } from "@/app/Store/TitleStore.tsx";
import { ColorSchemeToggle } from "@/lib/components/ColorSchemeToggle/ColorSchemeToggle.tsx";

const HomePage = () => {
  usePageTitle({ title: "Home Page" });
  const { title } = useTitleStore();

  return (
    <>
      <div>{title}</div>
      <div>
        <ColorSchemeToggle />
      </div>
    </>
  );
};

export default HomePage;
