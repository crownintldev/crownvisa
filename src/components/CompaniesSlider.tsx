//@ts-nocheck
import { AppContainer, ImageGroup, Marquee, MarqueeGroup, Wrapper } from "@/constants/constants";
import Image from "next/image";

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
                <Image
                  src="icons/amazon.svg"
                  className="w-auto h-auto"
                  alt="image"
                  height={100}
                  width={100}
                />
              </ImageGroup>
              <ImageGroup>
                <Image
                  src="icons/amd.svg"
                  className="w-auto h-auto"
                  alt="image"
                  height={100}
                  width={100}
                />
              </ImageGroup>
              <ImageGroup>
                <Image
                  src="icons/cisco.svg"
                  className="w-auto h-auto"
                  alt="image"
                  height={100}
                  width={100}
                />
              </ImageGroup>
              <ImageGroup>
                <Image
                  src="icons/dropcam.svg"
                  className="w-auto h-auto"
                  alt="image"
                  height={100}
                  width={100}
                />
              </ImageGroup>
              <ImageGroup>
                <Image
                  src="icons/logitech.svg"
                  className="w-auto h-auto"
                  alt="image"
                  height={100}
                  width={100}
                />
              </ImageGroup>
              <ImageGroup>
                <Image
                  src="icons/spotify.svg"
                  className="w-auto h-auto"
                  alt="image"
                  height={100}
                  width={100}
                />
              </ImageGroup>
            </MarqueeGroup>
            <MarqueeGroup>
              <ImageGroup>
                <Image
                  src="icons/amazon.svg"
                  className="w-auto h-auto"
                  alt="image"
                  height={100}
                  width={100}
                />
              </ImageGroup>
              <ImageGroup>
                <Image
                  src="icons/amd.svg"
                  className="w-auto h-auto"
                  alt="image"
                  height={100}
                  width={100}
                />
              </ImageGroup>
              <ImageGroup>
                <Image
                  src="icons/cisco.svg"
                  className="w-auto h-auto"
                  alt="image"
                  height={100}
                  width={100}
                />
              </ImageGroup>
              <ImageGroup>
                <Image
                  src="icons/dropcam.svg"
                  className="w-auto h-auto"
                  alt="image"
                  height={100}
                  width={100}
                />
              </ImageGroup>
              <ImageGroup>
                <Image
                  src="icons/logitech.svg"
                  className="w-auto h-auto"
                  alt="image"
                  height={100}
                  width={100}
                />
              </ImageGroup>
              <ImageGroup>
                <Image
                  src="icons/spotify.svg"
                  className="w-auto h-auto"
                  alt="image"
                  height={100}
                  width={100}
                />
              </ImageGroup>
            </MarqueeGroup>
          </Marquee>
        </Wrapper>
      </AppContainer>
    </div>
  );
}
