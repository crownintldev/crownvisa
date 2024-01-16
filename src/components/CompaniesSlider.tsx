//@ts-nocheck
import Image from "next/image";
import styled, { css, keyframes } from "styled-components";
const AppContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  margin: 15px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  display: flex;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  opacity: 0.5;
`;

export default function CompaniesSlider() {
  return (
    <div className="mb-10 antialiased">
      <div className="flex justify-center items center">
        <h2 className="text-[25px] font-bold mb-3">Our Clients & Partners</h2>
      </div>
      <AppContainer>
        <Wrapper>
          <Marquee>
            <MarqueeGroup>
              <ImageGroup>
                <Image src="icons/amazon.svg" className="w-auto h-auto" alt="image" height={100} width={100} />
              </ImageGroup>
              <ImageGroup>
                <Image src="icons/amd.svg" className="w-auto h-auto" alt="image" height={100} width={100} />
              </ImageGroup>
              <ImageGroup>
                <Image src="icons/cisco.svg" className="w-auto h-auto" alt="image" height={100} width={100} />
              </ImageGroup>
              <ImageGroup>
                <Image src="icons/dropcam.svg" className="w-auto h-auto" alt="image" height={100} width={100} />
              </ImageGroup>
              <ImageGroup>
                <Image src="icons/logitech.svg" className="w-auto h-auto" alt="image" height={100} width={100} />
              </ImageGroup>
              <ImageGroup>
                <Image src="icons/spotify.svg" className="w-auto h-auto" alt="image" height={100} width={100} />
              </ImageGroup>
            </MarqueeGroup>
            <MarqueeGroup>
              <ImageGroup>
                <Image src="icons/amazon.svg" className="w-auto h-auto" alt="image" height={100} width={100} />
              </ImageGroup>
              <ImageGroup>
                <Image src="icons/amd.svg" className="w-auto h-auto" alt="image" height={100} width={100} />
              </ImageGroup>
              <ImageGroup>
                <Image src="icons/cisco.svg" className="w-auto h-auto" alt="image" height={100} width={100} />
              </ImageGroup>
              <ImageGroup>
                <Image src="icons/dropcam.svg" className="w-auto h-auto" alt="image" height={100} width={100} />
              </ImageGroup>
              <ImageGroup>
                <Image src="icons/logitech.svg" className="w-auto h-auto" alt="image" height={100} width={100} />
              </ImageGroup>
              <ImageGroup>
                <Image src="icons/spotify.svg" className="w-auto h-auto" alt="image" height={100} width={100} />
              </ImageGroup>
            </MarqueeGroup>
          </Marquee>
        </Wrapper>
      </AppContainer>
    </div>
  );
}
