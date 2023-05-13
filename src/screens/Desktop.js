import React, { Component } from "react";
import styled, { css } from "styled-components";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import CupertinoButtonLight from "../components/CupertinoButtonLight";

function Desktop(props) {
  return (
    <>
      <Rect>
        <ImageRow>
          <Image src={require("../assets/images/Group_1_(1).png")}></Image>
          <Start>Start</Start>
          <Home>Home</Home>
          <Portfolio>Portfolio</Portfolio>
          <Services>Services</Services>
          <Contact>Contact</Contact>
        </ImageRow>
        <Group10Row>
          <Group10>
            <Welcome>WELCOME</Welcome>
            <LoremIpsum>
              Lorem ipsum dolor sit {"\n"}amet consectetur
            </LoremIpsum>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing {"\n"}elit.
              Suscipit nemo hic quos, ab, dolor aperiam nobis {"\n"}cum est eos
              error ipsum, voluptate culpa nesciunt {"\n"}delectus iste?
            </Text>
            <CupertinoButtonLight1
              style={{
                height: 48,
                width: 170,
                marginTop: 21,
                marginLeft: 4
              }}
            ></CupertinoButtonLight1>
          </Group10>
          <Image2 src={require("../assets/images/Group.png")}></Image2>
        </Group10Row>
      </Rect>
      <Group4>
        <Partners>PARTNERS</Partners>
        <LoremIpsumDolor4>Lorem Ipsum Dolor</LoremIpsumDolor4>
        <LoremIpsumDolor2>
          Lorem ipsum, dolor sit amet consectetur{"\n"}adipisicing elit.
        </LoremIpsumDolor2>
      </Group4>
      <Group>
        <Image3Row>
          <Image3 src={require("../assets/images/XMLID_24_1.png")}></Image3>
          <Image6 src={require("../assets/images/XMLID_1__(2)1.png")}></Image6>
          <Image4 src={require("../assets/images/XMLID_1__(1)1.png")}></Image4>
          <Image7 src={require("../assets/images/Group_(1)1.png")}></Image7>
          <Image5 src={require("../assets/images/XMLID_1_1.png")}></Image5>
        </Image3Row>
      </Group>
      <Image8Row>
        <Image8 src={require("../assets/images/Group_(2)1.png")}></Image8>
        <Group2>
          <LoremIpsum6>
            Lorem ipsum dolor sit {"\n"}amet consectetur
          </LoremIpsum6>
          <Text2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. {"\n"}
            Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos {"\n"}
            error ipsum, voluptate culpa nesciunt delectus iste?
          </Text2>
          <CupertinoButtonLight
            style={{
              width: 170,
              height: 48,
              marginTop: 39
            }}
          ></CupertinoButtonLight>
        </Group2>
      </Image8Row>
      <Group3Row>
        <Group3>
          <Text3>Lorem ipsum dolor sit {"\n"}amet consectetur</Text3>
          <Text4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. {"\n"}
            Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos {"\n"}
            error ipsum, voluptate culpa nesciunt delectus iste?
          </Text4>
          <CupertinoButtonLight
            style={{
              width: 170,
              height: 48,
              marginTop: 33
            }}
          ></CupertinoButtonLight>
        </Group3>
        <Image9 src={require("../assets/images/Group_(3)1.png")}></Image9>
      </Group3Row>
      <Group5>
        <Team>TEAM</Team>
        <OurTalents>Our Talents</OurTalents>
        <LoremIpsumDolor5>
          Lorem ipsum, dolor sit amet consectetur{"\n"}Suscipit nemo hic quos,
          ab,
        </LoremIpsumDolor5>
      </Group5>
      <Group6Row>
        <Group6>
          <Rect5>
            <Image10 src={require("../assets/images/face1.png")}></Image10>
            <PegLegge>Peg Legge</PegLegge>
            <Ceo>CEO</Ceo>
          </Rect5>
        </Group6>
        <Group7>
          <Rect6>
            <Image11 src={require("../assets/images/face21.png")}></Image11>
            <RichardGuerra>Richard Guerra</RichardGuerra>
            <Cto>CTO</Cto>
          </Rect6>
        </Group7>
        <Group8>
          <Rect7>
            <Image12 src={require("../assets/images/face22.png")}></Image12>
            <AlexandraStolz>Alexandra Stolz</AlexandraStolz>
            <Designer>DESIGNER</Designer>
          </Rect7>
        </Group8>
        <Group9>
          <Rect8>
            <Image13 src={require("../assets/images/face4.png")}></Image13>
            <JanetBray>Janet Bray</JanetBray>
            <Developer>DEVELOPER</Developer>
          </Rect8>
        </Group9>
      </Group6Row>
      <CupertinoButtonLight
        style={{
          width: 170,
          height: 48,
          marginTop: 46,
          marginLeft: 635
        }}
      ></CupertinoButtonLight>
      <Rect9Stack>
        <Rect9>
          <LoremIpsum8>© Start, 2022. All rights reserved.</LoremIpsum8>
        </Rect9>
        <Image14 src={require("../assets/images/Frame_30.png")}></Image14>
      </Rect9Stack>
      <CupertinoButtonLight
        style={{
          width: 170,
          height: 48,
          marginTop: -2169,
          marginLeft: 604
        }}
      ></CupertinoButtonLight>
    </>
  );
}

const Rect = styled.div`
  width: 1440px;
  height: 586px;
  background-color: rgba(116,198,157,1);
  flex-direction: column;
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 48px;
  object-fit: contain;
`;

const Start = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 40px;
  margin-left: 13px;
  margin-top: 1px;
`;

const Home = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  letter-spacing: 1px;
  margin-left: 550px;
  margin-top: 24px;
`;

const Portfolio = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  letter-spacing: 1px;
  margin-left: 41px;
  margin-top: 24px;
`;

const Services = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  letter-spacing: 1px;
  margin-left: 44px;
  margin-top: 24px;
`;

const Contact = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  letter-spacing: 1px;
  margin-left: 43px;
  margin-top: 24px;
`;

const ImageRow = styled.div`
  height: 48px;
  flex-direction: row;
  display: flex;
  margin-top: 35px;
  margin-left: 135px;
  margin-right: 120px;
`;

const Group10 = styled.div`
  width: 398px;
  height: 284px;
  flex-direction: column;
  display: flex;
  margin-top: 47px;
`;

const Welcome = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  color: rgba(255,255,255,1);
  font-size: 20px;
  letter-spacing: 3px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 40px;
  text-align: left;
  margin-top: 23px;
`;

const Text = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 200;
  color: rgba(255,255,255,1);
  font-size: 15px;
  text-align: justify;
`;

const Image2 = styled.img`
  width: 100%;
  height: 378px;
  margin-left: 101px;
  object-fit: contain;
`;

const Group10Row = styled.div`
  height: 378px;
  flex-direction: row;
  display: flex;
  margin-top: 39px;
  margin-left: 135px;
  margin-right: 162px;
`;

const Group4 = styled.div`
  width: 340px;
  height: 144px;
  flex-direction: column;
  display: flex;
  margin-top: 63px;
  margin-left: 513px;
`;

const Partners = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: rgba(116,198,157,1);
  font-size: 14px;
  letter-spacing: 3px;
  margin-left: 122px;
`;

const LoremIpsumDolor4 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,0,0,1);
  font-size: 40px;
  text-align: center;
  margin-top: 9px;
`;

const LoremIpsumDolor2 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,0,0,1);
  font-size: 20px;
  text-align: center;
  margin-top: 15px;
  margin-left: 12px;
`;

const Group = styled.div`
  width: 1143px;
  height: 53px;
  flex-direction: row;
  display: flex;
  margin-top: 26px;
  margin-left: 135px;
`;

const Image3 = styled.img`
  width: 100%;
  height: 50px;
  margin-top: 3px;
  object-fit: contain;
`;

const Image6 = styled.img`
  width: 100%;
  height: 45px;
  margin-left: 61px;
  margin-top: 3px;
  object-fit: contain;
`;

const Image4 = styled.img`
  width: 100%;
  height: 50px;
  margin-left: 52px;
  object-fit: contain;
`;

const Image7 = styled.img`
  width: 100%;
  height: 38px;
  margin-left: 78px;
  margin-top: 6px;
  object-fit: contain;
`;

const Image5 = styled.img`
  width: 100%;
  height: 50px;
  margin-left: 61px;
  object-fit: contain;
`;

const Image3Row = styled.div`
  height: 53px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
`;

const Image8 = styled.img`
  width: 100%;
  height: 431px;
  object-fit: contain;
`;

const Group2 = styled.div`
  width: 392px;
  height: 244px;
  flex-direction: column;
  display: flex;
  margin-left: 133px;
  margin-top: 93px;
`;

const LoremIpsum6 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 40px;
  text-align: left;
`;

const Text2 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 15px;
  text-align: left;
  margin-top: 14px;
`;

const Image8Row = styled.div`
  height: 431px;
  flex-direction: row;
  display: flex;
  margin-top: 177px;
  margin-left: 135px;
  margin-right: 180px;
`;

const Group3 = styled.div`
  width: 392px;
  height: 244px;
  flex-direction: column;
  display: flex;
  margin-top: 161px;
`;

const Text3 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 40px;
  text-align: left;
`;

const Text4 = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 15px;
  text-align: left;
  margin-top: 14px;
`;

const Image9 = styled.img`
  width: 100%;
  height: 566px;
  margin-left: 105px;
  object-fit: contain;
`;

const Group3Row = styled.div`
  height: 566px;
  flex-direction: row;
  display: flex;
  margin-top: 62px;
  margin-left: 170px;
  margin-right: 173px;
`;

const Group5 = styled.div`
  width: 340px;
  height: 144px;
  flex-direction: column;
  display: flex;
  margin-top: 77px;
  margin-left: 513px;
`;

const Team = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: rgba(116,198,157,1);
  font-size: 14px;
  letter-spacing: 3px;
  margin-left: 145px;
  margin-right: 145px;
`;

const OurTalents = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,0,0,1);
  font-size: 40px;
  text-align: center;
  margin-top: 9px;
  align-self: center;
`;

const LoremIpsumDolor5 = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,0,0,1);
  font-size: 20px;
  text-align: center;
  margin-top: 4px;
  align-self: center;
`;

const Group6 = styled.div`
  width: 260px;
  height: 299px;
  flex-direction: column;
  display: flex;
`;

const Rect5 = styled.div`
  width: 260px;
  height: 299px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  box-shadow: 3px 4px 12px  0.25px rgba(0,0,0,1) ;
`;

const Image10 = styled.img`
  width: 175px;
  height: 100%;
  margin-top: 19px;
  margin-left: 52px;
  object-fit: contain;
`;

const PegLegge = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 24px;
  margin-top: 22px;
  margin-left: 41px;
`;

const Ceo = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 15px;
  margin-top: 9px;
  margin-left: 41px;
`;

const Group7 = styled.div`
  width: 260px;
  height: 299px;
  flex-direction: column;
  display: flex;
  margin-left: 35px;
`;

const Rect6 = styled.div`
  width: 260px;
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

const RichardGuerra = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 24px;
  margin-top: 22px;
  margin-left: 41px;
`;

const Cto = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 15px;
  margin-top: 9px;
  margin-left: 41px;
`;

const Group8 = styled.div`
  width: 260px;
  height: 299px;
  flex-direction: column;
  display: flex;
  margin-left: 29px;
`;

const Rect7 = styled.div`
  width: 260px;
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

const AlexandraStolz = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 24px;
  margin-top: 22px;
  margin-left: 41px;
`;

const Designer = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 15px;
  margin-top: 9px;
  margin-left: 41px;
`;

const Group9 = styled.div`
  width: 260px;
  height: 299px;
  flex-direction: column;
  display: flex;
  margin-left: 23px;
`;

const Rect8 = styled.div`
  width: 260px;
  height: 299px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  box-shadow: 3px 4px 12px  0.25px rgba(0,0,0,1) ;
`;

const Image13 = styled.img`
  width: 175px;
  height: 100%;
  margin-top: 19px;
  margin-left: 52px;
  object-fit: contain;
`;

const JanetBray = styled.span`
  font-family: Crimson Text;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 24px;
  margin-top: 22px;
  margin-left: 41px;
`;

const Developer = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 15px;
  margin-top: 9px;
  margin-left: 41px;
`;

const Group6Row = styled.div`
  height: 299px;
  flex-direction: row;
  display: flex;
  margin-top: 126px;
  margin-left: 151px;
  margin-right: 162px;
`;

const Rect9 = styled.div`
  top: 37px;
  left: 0px;
  width: 1440px;
  height: 125px;
  position: absolute;
  background-color: rgba(116,198,157,1);
  flex-direction: column;
  display: flex;
`;

const LoremIpsum8 = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 300;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-top: 51px;
  margin-left: 984px;
`;

const Image14 = styled.img`
  top: 0px;
  left: 161px;
  width: 243px;
  height: 200px;
  position: absolute;
  object-fit: contain;
`;

const Rect9Stack = styled.div`
  width: 1440px;
  height: 200px;
  margin-top: 30px;
  margin-left: 1px;
  position: relative;
`;

export default Desktop;
