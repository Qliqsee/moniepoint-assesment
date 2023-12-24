import { motion } from "framer-motion";
import { CircularWrapper, Gallery, ImageContainer, ImageIconWrapper, ImagePill, StyledColumn } from "./style";
import { ArrowUpRight, Heart } from "@phosphor-icons/react";
import { colors } from "../../styles/colors";

const images = ["/image1.jpg", "/image1.jpg", "/image1.jpg", "/image1.jpg", "/image1.jpg", "/image1.jpg"];

const ImageStack = () => {
  return (
    <Gallery>
      <Column
        y={1}
        images={[
          { src: images[0], text: "Oral Health Assesment" },
          { src: images[1], text: "Dental Health Records" },
          { src: images[2], text: "Oral Health Assesment" },
        ]}
      />
      <Column
        y={1}
        images={[
          { src: images[3], text: "Oral Care Guides" },
          { src: images[4], text: "Appointment Scheduling" },
          { src: images[5], text: "Medication Tracking" },
        ]}
      />
    </Gallery>
  );
};

export default ImageStack;

interface ColumnProps {
  images: { src: string; text: string }[];
  y: number;
}

const Column = ({ images, y }: ColumnProps) => {
  return (
    <StyledColumn style={{ y }}>
      {images.map(({ src, text }, i) => {
        return (
          <ImageContainer key={i}>
            <img src={src} alt="" />
            <ImagePill>{text}</ImagePill>
            <ImageIconWrapper>
              <CircularWrapper bg="white" height="25px" width="25px">
                <Heart color={colors.black} />
              </CircularWrapper>
              <CircularWrapper bg="white" height="25px" width="25px">
                <ArrowUpRight color={colors.black} />
              </CircularWrapper>
            </ImageIconWrapper>
          </ImageContainer>
        );
      })}
    </StyledColumn>
  );
};
