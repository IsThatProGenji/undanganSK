import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
  
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 20,
});

const Image = styled("img", {
  width: "80%",
 maxWidth: 500,
  maxHeight: 500,
 
});

export default function Location() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 0 }}>
        <Title>Lokasi</Title>
      </Divider>
      <Title>AULA STIE PASUNDAN</Title>
      <Image src="./assets/LocationMap.png" />
    </Wrapper>
  );
}
