import Image from "next/image";
import styled from "styled-components";
import CircumIcon from "@klarr-agency/circum-icons-react"; // React
import Carusel from './Carusel'
import { useState } from "react";

/* Data Schema
name √
headline √
subhadline √
intro √
publicOn 
body √
mainimg √
photos 
pepole asmk
call to action
relayed
catgory
discount
stars
link
price
*/

export default function ProdactPage({ review }) {

 const [ data  ] = useState( review.data)

  const photos = data.photos
//  console.log(photos)
    return (
       <MainDiv maxWidth={1200}>
        <Section>
        <PageHade>
            <h1>{data.name.toUpperCase()}</h1>
        </PageHade>
        <Subhade>
          <h1>{data.subhadline}</h1>
        </Subhade>
        <MainWrapper>         
          <SectionWrapper >
              <ColumnA >
                <ColumnAWrapper>
                <Carusel photos={photos[0]} />
                  <DieatelsWrapper>
                    <ProdactDieatels>
                      <p>12 {data.discription}</p>
                    </ProdactDieatels>
                    <LinkDiv>
                      <p>{data.link}</p>
                    </LinkDiv>
                  </DieatelsWrapper>
                </ColumnAWrapper>
              </ColumnA>
               <ColumnB >
                <IntroWrapper>
                  <Intro>
                    <p>{data.intro}</p>
                  </Intro>
                </IntroWrapper>
                <ProdactheadLine>
                  <p>{data.headline}</p>
                </ProdactheadLine>
                <SubHading>
                  <p>{data.subhadline}</p>
                </SubHading>
                <ArticalBody>
                  <p>
                    {data.body}
                  </p>
                </ArticalBody>
                <PriceWrapper>
                  <OldPrice>
                    <p>$48</p>
                  </OldPrice>
                  <NewPrice>
                    <p>$43</p>
                  </NewPrice>
                </PriceWrapper>
                <Button>{data.callToAction}</Button>
              </ColumnB>
          </SectionWrapper>
        </MainWrapper>
        </Section>
      </MainDiv>
    );
  }
  
  const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 0px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: rgba(255, 255, 255, 1);
    @media (max-width: 640px) {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  `;
  
  const Section = styled.section`
    width: 100%;
    align-self: stretch;
    flex-grow: 1;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  `;
  
  const PageHade = styled.div`
    margin-top: -25px;
    line-height: 35px;
    text-align: center;
    font-size: 34px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    @media (max-width: 640px) {
      line-height: 30px;
      font-size: 21px;
    }
  `;

  const Subhade = styled.div`

  `
  
  const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 15px;
  `;
  
  const SectionWrapper = styled.div`
    display: flex;
    @media (max-width: 999px) {
      flex-direction: column;
      align-items: stretch;
    }
  `;
  
  const ColumnA = styled.div`
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: calc(50% - 10px);
    margin-left: 0px;
    @media (max-width: 999px) {
      width: 100%;
    }
  `;
  
  const ColumnAWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
  `;
  
  const ProdactImageDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 0px;
    text-align: center;
    line-height: normal;
    height: auto;
    min-height: 20px;
    min-width: 20px;
    overflow: hidden;
  `;
  
  const Imagesizer = styled.div`
    width: 100%;
    padding-top: 100%;
    pointer-events: none;
    font-size: 0;
  `;
  
  const DieatelsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 0px;
    height: auto;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    padding-bottom: 33px;
    padding-top: 33px;
    @media (max-width: 991px) {
      display: none;
    }
  `;
  
  const ProdactDieatels = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 0px;
    text-align: left;
    line-height: 23px;
    height: auto;
    color: rgba(0, 0, 0, 1);
    font-family: Roboto, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    @media (max-width: 640px) {
      font-size: 15px;
      line-height: 22px;
      margin-bottom: 0px;
      margin-top: 20px;
    }
  `;
  
  const LinkDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 15px;
    text-align: left;
    line-height: 23px;
    height: auto;
    color: rgba(0, 0, 0, 1);
    font-family: Roboto, sans-serif;
    font-size: 16px;
    @media (max-width: 640px) {
      font-size: 15px;
      line-height: 22px;
      margin-bottom: 0px;
      margin-top: 20px;
    }
  `;
  
  const ColumnB = styled.div`
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: calc(50% - 10px);
    margin-left: 20px;
    @media (max-width: 999px) {
      width: 100%;
    }
  `;
  
  const IntroWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
  `;
  
  const Intro = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: auto;
    text-align: left;
    line-height: 29px;
    height: auto;
    color: rgba(0, 0, 0, 1);
    font-family: Roboto, sans-serif;
    font-size: 21px;
    margin-bottom: auto;
    @media (max-width: 640px) {
      font-size: 21px;
      line-height: 138.4%;
      margin-bottom: 0px;
      margin-top: 20px;
    }
  `;
  
  const ProdactheadLine = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 7px;
    text-align: left;
    line-height: 138.4%;
    height: auto;
    color: rgba(0, 0, 0, 1);
    font-family: Roboto, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    @media (max-width: 640px) {
      font-size: 15px;
      line-height: 138.4%;
      margin-bottom: 0px;
      margin-top: 20px;
    }
  `;
  
  const SubHading = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 0px;
    height: auto;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    padding-bottom: 8px;
    padding-top: 8px;
    text-align: left;
    line-height: 42px;
    color: rgba(0, 0, 0, 1);
    font-family: Roboto, sans-serif;
    font-size: 29px;
    text-transform: uppercase;
    margin-bottom: -15px;
    @media (max-width: 640px) {
      font-size: 27px;
      line-height: 39px;
      margin-bottom: -10px;
      margin-top: 0px;
    }
  `;
  
  const ArticalBody = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 25px;
    text-align: left;
    line-height: 138.4%;
    height: auto;
    color: rgba(0, 0, 0, 1);
    font-family: Roboto, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    @media (max-width: 640px) {
      font-size: 15px;
      line-height: 155%;
      margin-bottom: 0px;
      margin-top: 20px;
    }
  `;
  
  
  const PriceWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    margin-top: 90px;
    padding-bottom: 0px;
    @media (max-width: 991px) {
      margin-top: 50px;
    }
    @media (max-width: 640px) {
      margin-top: 40px;
    }
  `;
  
  const OldPrice = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 0px;
    text-align: left;
    line-height: 35px;
    height: auto;
    color: rgba(0, 0, 0, 1);
    font-family: Roboto, sans-serif;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: line-through;
    @media (max-width: 640px) {
      font-size: 24px;
      line-height: 33px;
      margin-bottom: 0px;
      margin-top: 0px;
    }
  `;
  
  const NewPrice = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 0px;
    text-align: left;
    line-height: 35px;
    height: auto;
    color: rgba(0, 0, 0, 1);
    font-family: Roboto, sans-serif;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 20px;
    @media (max-width: 640px) {
      font-size: 24px;
      line-height: 33px;
      margin-bottom: 0px;
      margin-top: 0px;
    }
  `;
  
  const Button = styled.button`
    all: unset;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 51px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 25px;
    padding-right: 25px;
    background:#e8e9e4;
    color: black;
    border-radius: 15px;
    text-align: center;
    cursor: pointer;
    line-height: 35px;
    font-size: 24px;
    font-weight: bold;
    @media (max-width: 640px) {
      line-height: 126.4%;
      font-size: 15px;
      letter-spacing: -0.01em;
      padding-left: 10px;
      padding-right: 10px;
      margin-top: 44px;
    }
  `;
  