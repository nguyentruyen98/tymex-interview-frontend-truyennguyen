import Text from "@/components/Text/Text";

const MainNav = () => {
  return (
    <div className="hidden gap-7 sm:flex lg:gap-12 xl:gap-[60px]">
      <Text variant="title-lg">Home</Text>
      <Text variant="title-lg">About Us</Text>
      <Text variant="title-lg">Our Team</Text>
      <Text variant="title-lg" color="gradient" cursor="pointer">
        Marketplace
      </Text>
      <Text variant="title-lg">Roadmap</Text>
      <Text variant="title-lg">Whitepaper</Text>
    </div>
  );
};

export default MainNav;
