import Image from "next/image";
import styles from "./page.module.css";
import HeroSectionHeader from "./components/sections/herosection";
import { OpenTab } from "./components/sections/opentab";

export default function Home() {
  return (
    <>
      <HeroSectionHeader />
      <OpenTab />
    </>
  );
}
