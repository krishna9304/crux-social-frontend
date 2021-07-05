import Layout from "../components/layout";
import DesktopLayout from "../components/desktop";
import MobileLayout from "../components/mobile";
import { useMediaQuery } from "../utilities/mediaQuery";
export default function Home() {
  let isPageWide = useMediaQuery("(min-width: 1100px)");
  return (
    <Layout classname="select-none w-screen">
      {isPageWide ? <DesktopLayout /> : <MobileLayout />}
    </Layout>
  );
}
