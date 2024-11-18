import AccessoriesBanner from "@/components/accessories-banner";
import CollectionBanners from "@/components/collection-banners";
import Hero from "@/components/hero";
import JoinProgramBanner from "@/components/join-program-banner";
import NewArrivals from "@/components/new-arrivals";
import NewBanners from "@/components/new-banners";

export default function Home() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <CollectionBanners />
      <AccessoriesBanner />
      <JoinProgramBanner />
      <NewBanners />
    </>
  );
}
