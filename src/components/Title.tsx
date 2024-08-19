import { styled } from "@stitches/react";
import { Divider } from "antd";
import { useRouter } from 'next/router';

const Layout = styled("div", {
  width: "100%",
  height: "30vh",
  overflow: "hidden",
  margin: "0px auto",
  position: "relative",
});
const NamePage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Name>{name}</Name>
  );
};
const TitleWrapper = styled("div", {
  position: "absolute",
  width: "100%",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  textShadow: "-1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e",
  animation: "fadein 3s",
  "-moz-animation": "fadein 3s" /* Firefox */,
  "-webkit-animation": "fadein 3s" /* Safari and Chrome */,
  "-o-animation": "fadein 3s" /* Opera */,
});

const VideoBackground = styled("video", {
  backgroundColor: "#aeb8b3 !important",
  opacity: 0.9,
  objectFit: "cover",
  objectPosition: "center center",
  width: "100%",
  height: "100%",
  minHeight: 480,
});

const WeddingInvitation = styled("p", {
  fontSize: "1.5vh",
  opacity: 0.45,
  marginBottom: 0,
  marginTop: 30,
});
const Name = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.9,
 
});

const GroomBride = styled("p", {
  fontSize: "3.5vh",
  fontWeight: "bold",
  opacity: 0.9,
  marginBottom: 0,
  marginLeft: 30,
  marginRight: 30,
});

const Schedule = styled("p", {
  fontSize: "2vh",
  opacity: 0.65,
  marginBottom: 0,
});

type TitleProps = {
  data?: Data;
};

export default function Title({ data }: TitleProps) {
  return (
    <Layout>
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src="./assets/BackgroundVideo.mp4" type="video/mp4" />
      </VideoBackground>
      <TitleWrapper>
        <WeddingInvitation>ANDA DIUNDANG</WeddingInvitation>
       <NamePage/>
        <GroomBride>
          PENYERAHAN SK DOSEN PEMBIMBING
        </GroomBride>
        <Schedule>
          24 Agustus 2024 
         <br/>
          Jam 8.00 - selesai
        </Schedule>
      </TitleWrapper>
    </Layout>
  );
}
