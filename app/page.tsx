
import HeroSectionHeader from "./components/sections/herosection";
import { OpenTab } from "./components/sections/opentab";
import { BrandSection } from "./components/sections/brands";
import { PlatForm } from "./components/sections/platform";
import { CardSection } from "./components/sections/cardsection";
import { MailSection } from "./components/sections/malsection";

export default function Home() {
  return (
    <>
      <HeroSectionHeader />
      <OpenTab />
      <BrandSection />
      <PlatForm />
      <CardSection />
      <MailSection />
    </>
  );
}
