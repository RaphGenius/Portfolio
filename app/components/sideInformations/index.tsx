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
        <SideInformationContainer></SideInformationContainer>
      </SideInformationsLayout>
    </>
  );
}
export default SideInformations;
