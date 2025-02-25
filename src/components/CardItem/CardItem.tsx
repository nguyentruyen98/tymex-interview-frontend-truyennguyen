import { memo } from "react";

import ETH from "@/assets/icons/eth.svg";
import Heart from "@/assets/icons/heart.svg";
import RoundedVerified from "@/assets/icons/rounded-verified.svg";
import exampleCardArrivalAvatar from "@/assets/images/example_card_arrival_avatar.png";
import exampleCardCreatorAvatar from "@/assets/images/example_card_creator_avatar.jpg";
import {
  CardBody,
  CardContainer,
  CardItem as CardItem3D,
} from "@/components/ui/3d-card";

import { CardItemProps } from "./CardItem.type";

const CardItem = memo(
  ({
    avatar = exampleCardArrivalAvatar,
    creatorAvatar = exampleCardCreatorAvatar,
    price = 0,
    category,
    name,
    creator,
  }: CardItemProps) => {
    return (
      <CardContainer className="inter-var inline-flex cursor-pointer">
        <CardBody className="group/card relative h-auto w-auto cursor-pointer rounded-[10px] bg-[#3A3841]/60 p-4">
          <div>
            <CardItem3D translateZ={60} className="mt-4 w-full">
              <div className="rounded-sm bg-gradient-to-r from-[#DD5AFE] to-[#6366F1]">
                <div className="flex flex-row items-center justify-between p-2 pb-0">
                  <span className="rounded-sm bg-[#3A3841]/60 px-3 py-1 text-xs leading-5 font-medium text-white">
                    {category}
                  </span>
                  <Heart />
                </div>
                <img
                  className="h-[197px] w-[235px] object-cover object-top"
                  src={avatar}
                  alt="Avatar"
                />
              </div>
            </CardItem3D>
          </div>
          <CardItem3D translateZ="50" className="w-full">
            <div className="mt-6 flex flex-row items-center justify-between text-white">
              <p className="text-base leading-6 font-semibold">{name}</p>
              <div className="flex items-center gap-2">
                <ETH />
                <p className="text-sm leading-5 font-medium">{`${price} ETH`}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="relative inline-block">
                <img
                  className="h-8 w-8 rounded-full"
                  src={creatorAvatar}
                  alt="Avatar"
                />
                <div className="absolute right-0 bottom-0">
                  <RoundedVerified />
                </div>
              </div>
              <p className="text-xs leading-5 font-medium text-white">
                {creator}
              </p>
            </div>
          </CardItem3D>
        </CardBody>
      </CardContainer>
    );
  },
);

export default CardItem;
