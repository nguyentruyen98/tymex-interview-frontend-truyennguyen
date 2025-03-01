import Background from "@/assets/icons/bg.svg";
import NewArrival from "@/assets/icons/new.svg";
import TextBackground from "@/assets/icons/text-bg.svg";
import bg from "@/assets/images/bg.webp";
import Image1 from "@/assets/images/image1.webp";
import Image2 from "@/assets/images/image2.webp";
import Image3 from "@/assets/images/image3.webp";
import Image5 from "@/assets/images/image5.webp";
import image6 from "@/assets/images/image6.webp";
import CardArrival from "@/components/CardArrival/CardArrival";
import Text from "@/components/Text/Text";

const Hero = () => {
  return (
    <div className="relative">
      <div>
        <div className="absolute inset-0 top-28 z-10 flex justify-center sm:top-36 lg:left-20 lg:justify-start xl:top-40 xl:left-44">
          <div className="w-80 sm:w-lg lg:w-xl xl:w-5xl">
            <NewArrival />
          </div>
        </div>
        <img
          src={bg}
          alt="Background"
          className="h-[560px] w-full object-cover object-center sm:h-[704px] lg:h-[545px] xl:h-[816px]"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-black/70" />
        <div className="absolute top-60 right-0 z-20 flex justify-center max-lg:inset-x-0 sm:top-80 lg:top-40 lg:right-20 lg:justify-normal xl:top-[161px] xl:right-44">
          <img
            src={image6}
            alt="Background"
            className="h-80 sm:h-96 xl:h-[655px]"
          />
          <div className="absolute top-56 bottom-[10px] z-30 sm:top-64 lg:left-7 xl:top-[476px] xl:left-14">
            <div className="relative w-52 sm:w-64 xl:w-[437px]">
              <TextBackground />
              <Text
                className="absolute top-1 left-7 z-40 sm:top-3 sm:left-10 xl:top-14"
                variant="title-7xl"
              >
                The DJ
              </Text>
            </div>
          </div>
        </div>
        <div className="relative bottom-0 z-10 bg-[#FBC625] py-4 xl:absolute xl:bottom-0 xl:w-full xl:bg-transparent">
          <div className="absolute bottom-0 hidden w-full xl:block">
            <Background />
          </div>
          <div className="bottom-0 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 xl:justify-start xl:gap-20 xl:px-20">
            <CardArrival avatar={Image1} name="Assassin" />
            <CardArrival avatar={Image3} name="Neon Guy" />
            <CardArrival avatar={Image2} name="Mafia England" />
            <CardArrival avatar={Image5} name="Bassketball Girl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
