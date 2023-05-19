import Image from "next/image";
import styled from "styled-components";
import CircumIcon from "@klarr-agency/circum-icons-react"; // React


export default function ProdactPage({prodact, setIsActive}) {
  const data = prodact.data
    return (
      <Div maxWidth={1200}>
        <Section>
        <button 
           style={{width:"100px",height:"50px", background:"none",border:"none"}}
           onClick={()=>setIsActive(null)}
           >
           <CircumIcon name="turn_l_1"/>
           </button>
          <Div2>
            <p>{data.name}</p>
          </Div2>
          <Div3>
          
            <Div4 className="builder-columns">
              <Column className="builder-column">
                <Div5>
                  <Div6>
                    <p>
                      10% <br /> OFF
                    </p>
                  </Div6>
                  <Div7>
                 <Image src={data.mainImg} fill alt=""/>
                    <Imagesizer className="builder-image-sizer" />
                  </Div7>
                  <Div8>
                    <Div9>
                      <p>12 BOTTLES PER PACK</p>
                      <p>vegan * soy-free * gluten-free * low-sugar</p>
                    </Div9>
                    <Div10>
                      <p>SEE NUTRITION FACTS</p>
                    </Div10>
                  </Div8>
                </Div5>
              </Column>
               <Column2 className="builder-column">
                <Div11>
                  <Div12>
                    <p>BARCODE 12-PACK</p>
                  </Div12>
                  <Div13>
                    <Div14>
                      <p>
                        BEST <br /> SELLER
                      </p>
                    </Div14>
                  </Div13>
                </Div11>
                <Div15>
                  <p>FUNCTIONAL performance BEVERAGE</p>
                </Div15>
                <Div16>
                  <p>*****</p>
                </Div16>
                <Div17>
                  <p>
                    barcode is an adaptogen-packed, coconut-water based
                    perfromance beverage. Drink it WHILE YOU’RE workING OUT or
                    hanging out- barcode is for everyone.{" "}
                  </p>
                </Div17>
                <Div18>
                  <p>You get:</p>
                </Div18>
                <Div19>
                  <p>1 WATERMELON 12-pack</p>
                </Div19>
                <Div20>
                  <Div21>
                    <p>12 BOTTLES PER PACK</p>
                    <p>vegan * soy-free * gluten-free * low-sugar</p>
                  </Div21>
                  <Div22>
                    <p>SEE NUTRITION FACTS</p>
                  </Div22>
                </Div20>
                <Div23>
                  <Div24>
                    <p>$48</p>
                  </Div24>
                  <Div25>
                    <p>$43</p>
                  </Div25>
                </Div23>
                <Button>SAVE 10% AND CHECKOUT NOW</Button>
              </Column2>
            </Div4>
          </Div3>
        </Section>
      </Div>
    );
  }
  
  const Div = styled.div`
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
  
  const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 0px;
    line-height: 35px;
    height: auto;
    text-align: left;
    font-size: 24px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
    @media (max-width: 640px) {
      line-height: 30px;
      font-size: 21px;
    }
  `;
  
  const Div3 = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 0px;
  `;
  
  const Div4 = styled.div`
    display: flex;
    @media (max-width: 999px) {
      flex-direction: column;
      align-items: stretch;
    }
  `;
  
  const Column = styled.div`
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: calc(50% - 10px);
    margin-left: 0px;
    @media (max-width: 999px) {
      width: 100%;
    }
  `;
  
  const Div5 = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
  `;
  
  const Div6 = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 0px;
    height: auto;
    width: 115px;
    border-radius: 100px;
    background-color: rgba(0, 0, 0, 1);
    margin-left: auto;
    justify-content: center;
    right: 0px;
    top: 0px;
    line-height: 138.4%;
    text-align: center;
    font-size: 25px;
    color: rgba(255, 255, 255, 1);
    @media (max-width: 640px) {
      width: 80px;
      height: 80px;
      line-height: 140%;
      font-size: 17px;
    }
  `;
  
  const Div7 = styled.div`
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
  
  const ProdactImage = styled.img`
    object-fit: contain;
    object-position: center;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  `;
  
  const Imagesizer = styled.div`
    width: 100%;
    padding-top: 100%;
    pointer-events: none;
    font-size: 0;
  `;
  
  const Div8 = styled.div`
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
  
  const Div9 = styled.div`
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
  
  const Div10 = styled.div`
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
  
  const Column2 = styled.div`
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: calc(50% - 10px);
    margin-left: 20px;
    @media (max-width: 999px) {
      width: 100%;
    }
  `;
  
  const Div11 = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
  `;
  
  const Div12 = styled.div`
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
  
  const Div13 = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: rgba(0, 0, 0, 1);
    margin-left: 20px;
    border-radius: 100px;
    width: 72px;
    height: 70px;
    @media (max-width: 991px) {
      display: none;
    }
    @media (max-width: 640px) {
      display: flex;
    }
  `;
  
  const Div14 = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: auto;
    height: auto;
    width: 70px;
    border-radius: 100px;
    background-color: rgba(236, 70, 70, 1);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    text-align: center;
    line-height: normal;
    color: rgba(0, 0, 0, 1);
    font-family: Roboto, sans-serif;
    font-size: 13px;
    text-transform: uppercase;
    @media (max-width: 991px) {
      display: flex;
    }
    @media (max-width: 640px) {
      font-size: 13px;
      line-height: 22px;
      margin-bottom: auto;
      margin-top: auto;
    }
  `;
  
  const Div15 = styled.div`
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
  
  const Div16 = styled.div`
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
  
  const Div17 = styled.div`
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
  
  const Div18 = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 30px;
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
  
  const Div19 = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 16px;
    text-align: left;
    line-height: 138.4%;
    height: auto;
    color: rgba(0, 0, 0, 1);
    font-family: Roboto, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    @media (max-width: 991px) {
      padding-bottom: 30px;
    }
    @media (max-width: 640px) {
      font-size: 15px;
      line-height: 155%;
      margin-bottom: 0px;
      margin-top: 20px;
    }
  `;
  
  const Div20 = styled.div`
    display: none;
    flex-direction: column;
    position: relative;
    margin-top: 0px;
    height: auto;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    padding-bottom: 33px;
    padding-top: 33px;
    @media (max-width: 991px) {
      display: flex;
    }
  `;
  
  const Div21 = styled.div`
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
      line-height: 155%;
      margin-bottom: 0px;
      margin-top: 0px;
    }
  `;
  
  const Div22 = styled.div`
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
      line-height: 155%;
      margin-bottom: 0px;
      margin-top: 20px;
    }
  `;
  
  const Div23 = styled.div`
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
  
  const Div24 = styled.div`
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
  
  const Div25 = styled.div`
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
    appearance: none;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 25px;
    padding-right: 25px;
    background-color: rgba(0, 0, 0, 1);
    color: white;
    border-radius: px;
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
  