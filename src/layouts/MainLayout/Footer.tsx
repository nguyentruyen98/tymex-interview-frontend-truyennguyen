import MessageIcon from "@/assets/icons/message.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import Button from "@/components/Button/Button";
import Text from "@/components/Text/Text";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <div className="bg-secondary grid w-full grid-cols-1 grid-rows-3 gap-10 px-8 py-6 pb-20 lg:grid-cols-2 lg:grid-rows-2 lg:px-16 lg:py-10 lg:pb-40 xl:grid-cols-3 xl:grid-rows-1 xl:py-15 xl:pb-52">
      <div className="xl:col-span-1">
        <Text variant="title-xl">Navigation</Text>
        <div className="mt-8 grid grid-cols-3 grid-rows-1 gap-8">
          <div className="flex flex-col gap-3">
            <Text variant="header-medium">Home</Text>
            <Text variant="header-medium">About us</Text>
            <Text variant="header-medium">Our teams</Text>
          </div>
          <div className="flex flex-col gap-3">
            <Text variant="header-medium">Whitepaper</Text>
            <Text variant="header-medium">Marketplace</Text>
            <Text variant="header-medium">Roadmap</Text>
          </div>
          <div className="flex flex-col gap-3">
            <Text variant="header-medium">FAQs</Text>
            <Text variant="header-medium">News</Text>
            <Text variant="header-medium">Community</Text>
          </div>
        </div>
      </div>
      <div className="xl:col-span-1 xl:flex xl:justify-center">
        <div>
          <Text variant="title-xl">Contact us</Text>
          <div className="mt-8 flex flex-col gap-8">
            <div className="flex gap-2">
              <PhoneIcon />
              <Text variant="header-medium">01234568910</Text>
            </div>
            <div className="flex gap-2">
              <MessageIcon />
              <Text variant="header-medium">tymex-talent@tyme.com</Text>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 xl:col-span-1">
        <Text variant="title-xl">Subscribe to receive our latest update</Text>
        <div className="mt-8 flex flex-row gap-5">
          <Input className="border-white" placeholder="Your email address" />
          <Button className="px-8 lg:px-12">Subscribe</Button>
        </div>
      </div>
      <div className="border-shadow-violet h-[0px] border-t lg:col-span-2 xl:col-span-3" />
      <div className="flex flex-col items-center gap-6 lg:col-span-2 lg:flex-row lg:justify-between xl:col-span-3">
        <Text variant="header-medium">
          ©2023 Tyme - Edit. All Rights reserved.
        </Text>
        <div className="flex gap-6">
          <Text variant="header-medium">Security</Text>
          <Text variant="header-medium">Legal</Text>
          <Text variant="header-medium">Privacy</Text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
