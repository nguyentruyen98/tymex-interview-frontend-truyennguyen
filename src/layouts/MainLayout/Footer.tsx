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
            <Text tag="a" cursor="pointer" variant="header-medium" isAnimations>
              Home
            </Text>
            <Text tag="a" cursor="pointer" variant="header-medium" isAnimations>
              About us
            </Text>
            <Text tag="a" cursor="pointer" variant="header-medium" isAnimations>
              Our teams
            </Text>
          </div>
          <div className="flex flex-col gap-3">
            <Text tag="a" cursor="pointer" variant="header-medium" isAnimations>
              Whitepaper
            </Text>
            <Text tag="a" cursor="pointer" variant="header-medium" isAnimations>
              Marketplace
            </Text>
            <Text tag="a" cursor="pointer" variant="header-medium" isAnimations>
              Roadmap
            </Text>
          </div>
          <div className="flex flex-col gap-3">
            <Text tag="a" cursor="pointer" variant="header-medium" isAnimations>
              FAQs
            </Text>
            <Text tag="a" cursor="pointer" variant="header-medium" isAnimations>
              News
            </Text>
            <Text tag="a" cursor="pointer" variant="header-medium" isAnimations>
              Community
            </Text>
          </div>
        </div>
      </div>
      <div className="xl:col-span-1 xl:flex xl:justify-center">
        <div>
          <Text variant="title-xl">Contact us</Text>
          <div className="mt-8 flex flex-col gap-8">
            <div className="flex gap-2">
              <PhoneIcon />
              <Text
                href="tel:01234568910"
                tag="a"
                cursor="pointer"
                variant="header-medium"
              >
                01234568910
              </Text>
            </div>
            <div className="flex gap-2">
              <MessageIcon />
              <Text
                href="mailto:tymex-talent@tyme.com"
                tag="a"
                className="index"
                cursor="pointer"
                variant="header-medium"
              >
                tymex-talent@tyme.com
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 xl:col-span-1">
        <Text variant="title-xl">Subscribe to receive our latest update</Text>
        <div className="mt-8 flex flex-row gap-5">
          <Input className="border-white pl-4" placeholder="Your email address" />
          <Button className="px-8 lg:px-12">Subscribe</Button>
        </div>
      </div>
      <div className="border-shadow-violet h-[0px] border-t lg:col-span-2 xl:col-span-3" />
      <div className="flex flex-col items-center gap-6 lg:col-span-2 lg:flex-row lg:justify-between xl:col-span-3">
        <Text tag="a" cursor="pointer" variant="header-medium">
          ©2023 Tyme - Edit. All Rights reserved.
        </Text>
        <div className="flex gap-6">
          <Text tag="a" cursor="pointer" variant="header-medium" isAnimations>
            Security
          </Text>
          <Text tag="a" cursor="pointer" variant="header-medium" isAnimations>
            Legal
          </Text>
          <Text tag="a" cursor="pointer" variant="header-medium" isAnimations>
            Privacy
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
