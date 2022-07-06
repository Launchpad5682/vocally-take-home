import {
  ContentWrapper,
  Footer,
  Heading,
  ImageContainer,
  ParaText,
  Button,
  SideBySide,
  Layout,
} from "../../common/";

export function DowloadPage() {
  return (
    <Layout>
      <SideBySide reverse={true}>
        <ContentWrapper>
          <Heading>Focused on Time Sharing</Heading>
          <ParaText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            quas. Error facilis, perspiciatis voluptas iusto tempora quas
            dolore, aspernatur, beatae totam similique sint tempore rerum.
            Asperiores et doloremque commodi modi?
          </ParaText>
          <Button displayText="Download the mobile app" />
        </ContentWrapper>
        <ImageContainer src="./pickuservice.png" alt="dowload-svg" />
      </SideBySide>
      <Footer />
    </Layout>
  );
}
