import Banner, { BannerTypes } from "./banner";

const BannersData: BannerTypes[] = [
  {
    heading: "جدیدتر از همه",
    title: "Kryo X26 MTB Is Here",
    detail:
      "لورم ایپسوم متن ساخت نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد طراحی اساسا مورد استفاده قرار گیرد.",
    image: "/asset/bike-hero.jpg",
    button: "خرید",
    align: "center",
  },
];

const NewBanners = () => {
  return (
    <>
      {BannersData.map((banner, key) => (
        <Banner banner={banner} key={key} />
      ))}
    </>
  );
};

export default NewBanners;
