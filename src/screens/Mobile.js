import React, { Component } from "react";
import styled, { css } from "styled-components";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import CupertinoButtonLight from "../components/CupertinoButtonLight";

function Mobile(props) {
  return (
    <>
      <Rect1>
        <Image1Row>
          <Image1 src={require("../assets/images/Group_1_(1).png")}></Image1>
          <Start3>Start</Start3>
          <Image2 src={require("../assets/images/list_1.png")}></Image2>
        </Image1Row>
        <Image3 src={require("../assets/images/Group.png")}></Image3>
        <GroupStack>
          <Group>
            <Welcome5>WELCOME</Welcome5>
            <LoremIpsum1>
              Lorem ipsum dolor sit amet {"\n"}consectetur
            </LoremIpsum1>
            <Text1>
              Lorem ipsum, dolor sit amet consectetur {"\n"}adipisicing elit.
              Suscipit nemo hic quos, ab,{"\n"} dolor aperiam nobis cum est eos
              error{"\n"}ipsum, voluptate culpa nesciunt delectus{"\n"} iste?
            </Text1>
          </Group>
          <CupertinoButtonLight1
            style={{
              position: "absolute",
              left: 16,
              top: 249,
              width: 170,
              height: 48
            }}
          ></CupertinoButtonLight1>
        </GroupStack>
      </Rect1>
      <Group1>
        <Partners3>PARTNERS</Partners3>
        <LoremIpsumDolor2>Lorem Ipsum Dolor</LoremIpsumDolor2>
        <LoremIpsumDolor1>
          Lorem ipsum, dolor sit amet {"\n"}consectetur{"\n"}adipisicing elit.
        </LoremIpsumDolor1>
      </Group1>
      <Image4 src={require("../assets/images/XMLID_24_1.png")}></Image4>
      <Image5 src={require("../assets/images/XMLID_1__(1)1.png")}></Image5>
      <Image6 src={require("../assets/images/XMLID_1_1.png")}></Image6>
      <Image7 src={require("../assets/images/XMLID_1__(2)1.png")}></Image7>
      <Image8 src={require("../assets/images/Group_(1)1.png")}></Image8>
      <CupertinoButtonLight
        style={{
          width: 170,
          height: 48,
          marginTop: 129,
          marginLeft: 103
        }}
      ></CupertinoButtonLight>
      <Image9 src={require("../assets/images/Group_(2)1.png")}></Image9>
      <Image10 src={require("../assets/images/Group_(3)1.png")}></Image10>
      <Group3>
        <LoremIpsum4>Lorem ipsum dolor sit amet {"\n"}consectetur</LoremIpsum4>
        <Text3>
          Lorem ipsum, dolor sit amet consectetur{"\n"}adipisicing elit.
          Suscipit nemo hic quos,{"\n"}ab, dolor aperiam nobis cum est eos error
          {"\n"}ipsum, voluptate culpa nesciunt delectus{"\n"}iste?
        </Text3>
        <CupertinoButtonLight
          style={{
            width: 170,
            height: 48,
            marginTop: 15
          }}
        ></CupertinoButtonLight>
      </Group3>
      <Group4>
        <Team1>TEAM</Team1>
        <OurTalents1>Our Talents</OurTalents1>
        <LoremIpsumDolor3>
          Lorem ipsum, dolor sit amet consectetur{"\n"}Suscipit nemo hic quos,
          ab,
        </LoremIpsumDolor3>
      </Group4>
      <Group5>
        <Rect2>
          <Image11 src={require("../assets/images/face1.png")}></Image11>
          <PegLegge1>Peg Legge</PegLegge1>
          <Ceo1>CEO</Ceo1>
        </Rect2>
      </Group5>
      <Group6>
        <Rect3>
          <Image12 src={require("../assets/images/face21.png")}></Image12>
          <RichardGuerra1>Richard Guerra</RichardGuerra1>
          <Cto1>CTO</Cto1>
        </Rect3>
      </Group6>
      <Group7>
        <Rect4>
          <Image13 src={require("../assets/images/face22.png")}></Image13>
          <AlexandraStolz1>Alexandra Stolz</AlexandraStolz1>
          <Designer1>DESIGNER</Designer1>
        </Rect4>
      </Group7>
      <Group8>
        <Rect5>
          <Image14 src={require("../assets/images/face4.png")}></Image14>
          <JanetBray1>Janet Bray</JanetBray1>
          <Developer1>DEVELOPER</Developer1>
        </Rect5>
      </Group8>
      <CupertinoButtonLight
        style={{
          width: 170,
          height: 48,
          marginTop: 30,
          marginLeft: 103
        }}
      ></CupertinoButtonLight>
      <Rect6>
        <Image15 src={require("../assets/images/Frame_30.png")}></Image15>
        <LoremIpsum5>© Start, 2022. All rights reserved.</LoremIpsum5>
      </Rect6>
      <Group9>
        <LoremIpsum6>Lorem ipsum dolor sit amet {"\n"}consectetur</LoremIpsum6>
        <Text4>
          Lorem ipsum, dolor sit amet consectetur{"\n"}adipisicing elit.
          Suscipit nemo hic quos,{"\n"}ab, dolor aperiam nobis cum est eos error
          {"\n"}ipsum, voluptate culpa nesciunt delectus{"\n"}iste?
        </Text4>
        <CupertinoButtonLight
          style={{
            width: 170,
            height: 48,
            marginTop: 15
          }}
        ></CupertinoButtonLight>
      </Group9>
    </>
  );
}

const Rect1 = styled.div`
  width: 375px;
  height: 642px;
  background-color: rgba(116,198,157,1);
  flex-direction: column;
  display: flex;
`;

const Image1 = styled.img`
  width: 100%;
  height: 38px;
  object-fit: contain;
`;

const Start3 = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 28px;
  width: 70px;
  height: 37px;
  margin-left: 10px;
`;

const Image2 = styled.img`
  width: 100%;
  height: 35px;
  margin-left: 154px;
  margin-top: 1px;
  object-fit: contain;
`;

const Image1Row = styled.div`
  height: 38px;
  flex-direction: row;
  display: flex;
  margin-top: 21px;
  margin-left: 30px;
  margin-right: 26px;
`;

const Image3 = styled.img`
  width: 335px;
  height: 100%;
  margin-top: 35px;
  margin-left: 26px;
  object-fit: contain;
`;

const Group = styled.div`
  top: 0px;
  left: 0px;
  width: 335px;
  height: 288px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Welcome5 = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  color: rgba(255,255,255,1);
  font-size: 16px;
  letter-spacing: 4px;
  margin-top: 20px;
  margin-left: 17px;
`;

const LoremIpsum1 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 600;
  color: rgba(255,255,255,1);
  font-size: 28px;
  text-align: left;
  margin-top: 11px;
  margin-left: 17px;
`;

const Text1 = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 200;
  color: rgba(255,255,255,1);
  font-size: 15px;
  text-align: justify;
  margin-top: 9px;
  margin-left: 17px;
`;

const GroupStack = styled.div`
  width: 335px;
  height: 297px;
  margin-top: 6px;
  margin-left: 14px;
  position: relative;
`;

const Group1 = styled.div`
  width: 340px;
  height: 144px;
  flex-direction: column;
  display: flex;
  margin-top: 19px;
  margin-left: 18px;
`;

const Partners3 = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  color: rgba(116,198,157,1);
  font-size: 16px;
  letter-spacing: 5px;
  margin-top: 10px;
  align-self: center;
`;

const LoremIpsumDolor2 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,0,0,1);
  font-size: 24px;
  text-align: center;
  margin-top: 12px;
  align-self: center;
`;

const LoremIpsumDolor1 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,0,0,1);
  font-size: 22px;
  text-align: center;
  width: 335px;
  height: 85px;
  margin-top: 8px;
  align-self: center;
`;

const Image4 = styled.img`
  width: 153px;
  height: 50px;
  margin-top: 63px;
  margin-left: 111px;
  object-fit: contain;
`;

const Image5 = styled.img`
  width: 160px;
  height: 50px;
  margin-top: 100px;
  margin-left: 108px;
  object-fit: contain;
`;

const Image6 = styled.img`
  width: 167px;
  height: 48px;
  margin-top: 97px;
  margin-left: 104px;
  object-fit: contain;
`;

const Image7 = styled.img`
  width: 211px;
  height: 43px;
  margin-top: -262px;
  margin-left: 82px;
  object-fit: contain;
`;

const Image8 = styled.img`
  width: 190px;
  height: 37px;
  margin-top: 103px;
  margin-left: 93px;
  object-fit: contain;
`;

const Image9 = styled.img`
  width: 335px;
  height: 241px;
  margin-top: 44px;
  margin-left: 20px;
  object-fit: contain;
`;

const Image10 = styled.img`
  width: 335px;
  height: 316px;
  margin-top: 378px;
  margin-left: 20px;
  object-fit: contain;
`;

const Group3 = styled.div`
  width: 334px;
  height: 243px;
  flex-direction: column;
  display: flex;
  margin-top: 26px;
  margin-left: 30px;
`;

const LoremIpsum4 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 24px;
  text-align: left;
  margin-top: 29px;
`;

const Text3 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 15px;
  text-align: left;
  margin-top: 13px;
  margin-left: -1px;
`;

const Group4 = styled.div`
  width: 340px;
  height: 167px;
  flex-direction: column;
  display: flex;
  margin-top: 83px;
  margin-left: 18px;
`;

const Team1 = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  color: rgba(116,198,157,1);
  font-size: 16px;
  letter-spacing: 5px;
  text-align: center;
  margin-top: -8px;
  margin-left: 137px;
  margin-right: 137px;
`;

const OurTalents1 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,0,0,1);
  font-size: 24px;
  text-align: center;
  margin-top: 10px;
  align-self: center;
`;

const LoremIpsumDolor3 = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,0,0,1);
  font-size: 20px;
  text-align: center;
  margin-top: 18px;
  align-self: center;
`;

const Group5 = styled.div`
  width: 279px;
  height: 299px;
  flex-direction: column;
  display: flex;
  margin-top: 12px;
  margin-left: 48px;
`;

const Rect2 = styled.div`
  width: 279px;
  height: 299px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  box-shadow: 3px 4px 12px  0.25px rgba(0,0,0,1) ;
`;

const Image11 = styled.img`
  width: 175px;
  height: 100%;
  margin-top: 19px;
  margin-left: 52px;
  object-fit: contain;
`;

const PegLegge1 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 24px;
  margin-top: 22px;
  margin-left: 41px;
`;

const Ceo1 = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 15px;
  margin-top: 9px;
  margin-left: 41px;
`;

const Group6 = styled.div`
  width: 279px;
  height: 299px;
  flex-direction: column;
  display: flex;
  margin-top: 31px;
  margin-left: 48px;
`;

const Rect3 = styled.div`
  width: 279px;
  height: 299px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  box-shadow: 3px 4px 12px  0.25px rgba(0,0,0,1) ;
`;

const Image12 = styled.img`
  width: 175px;
  height: 100%;
  margin-top: 19px;
  margin-left: 52px;
  object-fit: contain;
`;

const RichardGuerra1 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 24px;
  margin-top: 22px;
  margin-left: 41px;
`;

const Cto1 = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 15px;
  margin-top: 9px;
  margin-left: 41px;
`;

const Group7 = styled.div`
  width: 279px;
  height: 299px;
  flex-direction: column;
  display: flex;
  margin-top: 34px;
  margin-left: 48px;
`;

const Rect4 = styled.div`
  width: 279px;
  height: 299px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  align-self: center;
  box-shadow: 3px 4px 12px  0.25px rgba(0,0,0,1) ;
`;

const Image13 = styled.img`
  width: 175px;
  height: 100%;
  margin-top: 19px;
  margin-left: 52px;
  object-fit: contain;
`;

const AlexandraStolz1 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 24px;
  margin-top: 22px;
  margin-left: 41px;
`;

const Designer1 = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 15px;
  margin-top: 9px;
  margin-left: 41px;
`;

const Group8 = styled.div`
  width: 279px;
  height: 299px;
  flex-direction: column;
  display: flex;
  margin-top: 31px;
  margin-left: 48px;
`;

const Rect5 = styled.div`
  width: 279px;
  height: 299px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  box-shadow: 3px 4px 12px  0.25px rgba(0,0,0,1) ;
`;

const Image14 = styled.img`
  width: 175px;
  height: 100%;
  margin-top: 19px;
  margin-left: 52px;
  object-fit: contain;
`;

const JanetBray1 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 24px;
  margin-top: 22px;
  margin-left: 41px;
`;

const Developer1 = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 15px;
  margin-top: 9px;
  margin-left: 41px;
`;

const Rect6 = styled.div`
  width: 375px;
  height: 125px;
  background-color: rgba(116,198,157,1);
  flex-direction: column;
  display: flex;
  margin-top: 79px;
`;

const Image15 = styled.img`
  width: 243px;
  height: 100%;
  margin-top: 28px;
  margin-left: 66px;
  object-fit: contain;
`;

const LoremIpsum5 = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 300;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-top: 17px;
  margin-left: 25px;
`;

const Group9 = styled.div`
  width: 334px;
  height: 243px;
  flex-direction: column;
  display: flex;
  margin-top: -2784px;
  margin-left: 30px;
`;

const LoremIpsum6 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 24px;
  text-align: left;
  margin-top: 29px;
`;

const Text4 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 15px;
  text-align: left;
  margin-top: 13px;
  margin-left: -1px;
`;

export default Mobile;
