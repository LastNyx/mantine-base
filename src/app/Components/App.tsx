import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "../Theme.ts";
import { Router } from "@/app/Routes/Router.tsx";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
