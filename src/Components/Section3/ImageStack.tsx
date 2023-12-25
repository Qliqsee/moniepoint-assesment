import { CircularWrapper, Gallery, ImageContainer, ImageIconWrapper, ImagePill, StyledColumn } from "./style";
import { ArrowUpRight, Heart } from "phosphor-react";
import { colors } from "../../styles/colors";
import { GalleryVaraint1, GalleryVaraint2, flip } from "./variants";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image8.jpg",
  "/image9.jpg",
  "/image10.jpg",
];

const ImageStack = () => {
  return (
    <Gallery>
      <Column
        column={1}
        images={[
          { src: images[0], text: "Symptom Checker" },
          { src: images[1], text: "Dental Health Records" },
          { src: images[2], text: "Oral Health Assesment" },
          { src: images[3], text: "Oral Health Assesment" },
        ]}
      />
      <Column
        column={2}
        images={[
          { src: images[4], text: "Oral Care Guides" },
          { src: images[5], text: "Appointment Scheduling" },
          { src: images[6], text: "Medication Tracking" },
          { src: images[7], text: "Medication Tracking" },
        ]}
      />
    </Gallery>
  );
};

export default ImageStack;

interface ColumnProps {
  images: { src: string; text: string }[];
  column: 1 | 2;
}

const Column = ({ images, column }: ColumnProps) => {
  return (
    <StyledColumn
      variants={column === 1 ? GalleryVaraint1 : GalleryVaraint2}
      initial="initial"
      animate="animate"
      // style={{ y }}
    >
      {images.map(({ src, text }, i) => {
        return (
          <ImageContainer variants={flip} initial="initial" animate="animate" key={i}>
            <img loading="lazy" src={src} alt="" />
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
