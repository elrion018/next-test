import { FC } from "react";
import {
  HeaderClock,
  HeaderWeather,
  HeaderSearchContainer,
  HeaderGnb,
} from "./";
import { HeaderOptionTab } from "./option";
import { HeaderAlarmTab } from "./alarm";
import { HeaderLoginTab } from "./login";

/**
 * header 섹션 컴포넌트
 * @returns
 */
export const Header: FC = () => {
  return (
    <>
      <HeaderWeather></HeaderWeather>
      <HeaderClock></HeaderClock>
      <HeaderOptionTab></HeaderOptionTab>
      <HeaderAlarmTab></HeaderAlarmTab>
      <HeaderLoginTab></HeaderLoginTab>
      <HeaderSearchContainer></HeaderSearchContainer>
      <HeaderGnb></HeaderGnb>
    </>
  );
};
