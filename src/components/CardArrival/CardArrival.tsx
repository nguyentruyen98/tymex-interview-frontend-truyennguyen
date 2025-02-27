import { memo } from "react";

import backGround from "@/assets/images/card_arrival_bg.png";
import exampleCardArrivalAvatar from "@/assets/images/example_card_arrival_avatar.png";
import Text from "@/components/Text/Text";
import { CardContainer, CardItem } from "@/components/ui/3d-card";

import { CardArrivalProps } from "./CardArrival.type";

const CardArrival = memo(
  ({ name, avatar = exampleCardArrivalAvatar }: CardArrivalProps) => {
    return (
      <CardContainer className="inline-flex cursor-pointer flex-col items-center">
        <CardItem translateZ="100" className="relative">
          <img
            className="relative z-10 h-[168px] w-[200px] object-cover object-top"
            src={avatar}
            alt="Avatar"
          />
          <img
            src={backGround}
            className="absolute bottom-[-1px] h-[120px] w-[200px] border border-[#FBC625] object-cover shadow-[-12px_12px_#101010]"
          />
        </CardItem>
        <CardItem translateZ="70">
          <Text className="mt-6" variant="title-lg" color="secondary">
            {name}
          </Text>
        </CardItem>
      </CardContainer>
    );
  },
);

export default CardArrival;
