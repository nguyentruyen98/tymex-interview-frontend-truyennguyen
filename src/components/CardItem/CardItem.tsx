import { memo, useMemo } from "react";

import ETH from "@/assets/icons/eth.svg";
import Heart from "@/assets/icons/heart.svg";
import RoundedVerifiedOffline from "@/assets/icons/rounded-verified-offline.svg";
import RoundedVerifiedOnline from "@/assets/icons/rounded-verified-online.svg";
import Image1 from "@/assets/images/image1.webp";
import Image2 from "@/assets/images/image2.webp";
import Image3 from "@/assets/images/image3.webp";
import Image4 from "@/assets/images/image4.webp";
import Image5 from "@/assets/images/image5.webp";
import Text from "@/components/Text/Text";
import {
  CardBody,
  CardContainer,
  CardItem as CardItem3D,
} from "@/components/ui/3d-card";
import { withFadeIn } from "@/hocs/withFadeIn";
import { cn } from "@/lib/utils";

import { CARD_THEME_COLOR } from "./CardItem.constants";
import { CardItemProps } from "./CardItem.type";

const CardItem = memo(
  ({
    price = 0,
    isFavorite = false,
    category,
    title,
    author,
    theme,
    imageId,
  }: CardItemProps) => {
    const { avatar: authorAvatar, firstName, lastName, onlineStatus } = author;

    const authorStatusIcon = useMemo(() => {
      if (onlineStatus === "online") return <RoundedVerifiedOnline />;
      return <RoundedVerifiedOffline />;
    }, [onlineStatus]);

    const cartAvatar = useMemo(() => {
      if (imageId <= 4) return Image1;
      if (imageId <= 8) return Image2;
      if (imageId <= 12) return Image3;
      if (imageId <= 16) return Image4;
      return Image5;
    }, [imageId]);

    return (
      <CardContainer
        containerClassName="shrink-0"
        className="inter-var inline-flex cursor-pointer"
      >
        <CardBody className="group/card bg-shadow-violet/60 relative h-auto w-auto cursor-pointer rounded-[10px] p-4">
          <div>
            <CardItem3D translateZ={60} className="mt-4 w-full">
              <div
                className={cn(
                  "rounded-sm bg-gradient-to-r",
                  CARD_THEME_COLOR[theme],
                )}
              >
                <div className="flex flex-row items-center justify-between p-2 pb-0">
                  <span className="bg-shadow-violet/60 rounded-sm px-3 py-1 text-xs leading-5 font-medium text-white">
                    {category}
                  </span>
                  {isFavorite && <Heart />}
                </div>
                <img
                  className="h-[197px] w-[235px] object-cover object-top"
                  src={cartAvatar}
                  alt="Avatar"
                />
              </div>
            </CardItem3D>
          </div>
          <CardItem3D translateZ="50" className="w-full">
            <div className="mt-6 flex flex-row items-center justify-between text-white">
              <Text variant="header" className="w-32 truncate">
                {title}
              </Text>
              <div className="flex items-center gap-2">
                <ETH />
                <Text>{`${price} ETH`}</Text>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="relative inline-block">
                <img
                  className="h-8 w-8 rounded-full"
                  src={authorAvatar}
                  alt="Author Avatar"
                />
                <div className="absolute right-0 bottom-0">
                  {authorStatusIcon}
                </div>
              </div>
              <p className="text-xs leading-5 font-medium text-white">
                {`${firstName} ${lastName}`}
              </p>
            </div>
          </CardItem3D>
        </CardBody>
      </CardContainer>
    );
  },
);

const CardItemWithAnimation = withFadeIn<CardItemProps>(CardItem);

export default CardItemWithAnimation;
