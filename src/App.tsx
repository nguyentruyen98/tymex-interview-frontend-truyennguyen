import "./App.css";

import { useState } from "react";

import viteLogo from "/vite.svg";

import ETH from "./assets/icons/eth.svg";
import Heart from "./assets/icons/heart.svg";
import RoundedVerified from "./assets/icons/rounded-verified.svg";
import image from "./assets/image1.png";
import image2 from "./assets/image2.jpg";
import { CardBody, CardContainer, CardItem } from "./components/3d-card";
import { Vortex } from "./components/vortex";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* // <Vortex
    //   rangeY={1000}
    //   particleCount={5}
    //   rangeSpeed={0.1}
    //   baseHue={200}
    //   rangeRadius={10}
    //   baseRadius={5}
    // >
   
    // </Vortex> */}
      <CardContainer className="inter-var">
        <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Make things float in air
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="mt-4 w-full">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="mt-20 flex items-center justify-between">
            <CardItem
              translateZ={20}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="group/card relative h-auto w-auto cursor-pointer rounded-[10px] bg-[#3A3841]/60 p-4">
          <div>
            <CardItem translateZ={100} className="mt-4 w-full">
              <div className="rounded-sm bg-gradient-to-r from-[#DD5AFE] to-[#6366F1]">
                <div className="flex flex-row items-center justify-between p-2 pb-0">
                  <span className="rounded-sm bg-[#3A3841]/60 px-3 py-1 text-xs leading-5 font-medium text-white">
                    Epic
                  </span>
                  <Heart />
                </div>
                <img
                  className="h-[197px] w-[235px] object-cover object-top"
                  src={image}
                  alt="Avatar"
                />
              </div>
            </CardItem>
          </div>
          <CardItem translateZ="50">
            <div className="mt-6 flex flex-row items-center justify-between text-white">
              <p className="text-base leading-6 font-semibold">The DJ</p>
              <div className="flex items-center gap-2">
                <ETH />
                <p className="text-sm leading-5 font-medium">2,75 ETH</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="relative inline-block">
                <img
                  className="h-8 w-8 rounded-full"
                  src={image2}
                  alt="Avatar"
                />
                <div className="absolute right-0 bottom-0">
                  <RoundedVerified />
                </div>
              </div>
              <p className="text-xs leading-5 font-medium text-white">
                Ghozali_Ghozalu
              </p>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
      <div className="flex gap-4">
        <button className="cursor-pointer rounded-sm bg-gradient-to-r from-[#DA458F]/100 to-[#DA34DD]/100 px-4 py-[10px] text-base font-semibold text-white">
          <p className="text-base font-semibold tracking-[0.5px] text-white">
            All
          </p>
        </button>
        <button className="cursor-pointer rounded-sm bg-gradient-to-r from-[#DA458F]/40 to-[#DA34DD]/40 px-4 py-[10px]">
          <p className="text-base font-semibold tracking-[0.575px] text-white">
            Upper Body
          </p>
        </button>
      </div>
      <div className="cursor-pointer rounded-[10px] bg-[#3A3841]/60 p-4">
        <div className="rounded-sm bg-gradient-to-r from-[#DD5AFE] to-[#6366F1]">
          <div className="flex flex-row items-center justify-between p-2 pb-0">
            <span className="rounded-sm bg-[#3A3841]/60 px-3 py-1 text-xs leading-5 font-medium text-white">
              Epic
            </span>
            <Heart />
          </div>
          <img
            className="h-[197px] w-[235px] object-cover object-top"
            src={image}
            alt="Avatar"
          />
        </div>
        <div className="mt-6 flex flex-row items-center justify-between text-white">
          <p className="text-base leading-6 font-semibold">The DJ</p>
          <div className="flex items-center gap-2">
            <ETH />
            <p className="text-sm leading-5 font-medium">2,75 ETH</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="relative inline-block">
            <div>
              <img className="h-8 w-8 rounded-full" src={image2} alt="Avatar" />
              <div className="absolute right-0 bottom-0 flex h-3 w-3 items-center justify-center rounded-full bg-[#17161A]">
                <RoundedVerified />
              </div>
            </div>
          </div>
          <p className="text-xs leading-5 font-medium text-white">
            Ghozali_Ghozalu
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
