import React from "react";
import SideInformationsLayout from "./SideInformationsLayout";
import SideInformationContainer from "./components/SideInformationContainer";
import { leftSideInformation } from "./components/data";
import SocialMediaIcon from "./components/SocialMediaIcon";

function SideInformations() {
  return (
    <>
      <SideInformationsLayout orientation="left">
        <SideInformationContainer>
          {leftSideInformation.map((el) => (
            <SocialMediaIcon key={el.name} icon={<el.logo />} link={el.url} />
          ))}
        </SideInformationContainer>
      </SideInformationsLayout>
      <SideInformationsLayout orientation="right">
        <SideInformationContainer>
          <p className="rotate-90 mb-6 font-bold text-gray-500 hover:-translate-y-1 hover:text-main500 transition-all text-[8px]">
            truc@truc.com
          </p>
        </SideInformationContainer>
      </SideInformationsLayout>
    </>
  );
}
export default SideInformations;
