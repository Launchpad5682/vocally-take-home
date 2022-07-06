import {
  ContentWrapper,
  Layout,
  UserDetailForm,
  SideBySide,
  Header,
  ImageContainer,
  ParaText,
  Heading,
} from "../../common";

export function UserDetail() {
  return (
    <Layout>
      <Header />
      <SideBySide>
        <ContentWrapper>
          <Heading>Vehcile Maintenance From The Comfort of Your Home</Heading>
          <ParaText>
            Open Auto Soothes the hassle of maintaining your vehicle and helps
            you deal with unexpected reqirs wory-free
          </ParaText>
          <UserDetailForm />
        </ContentWrapper>
        <ImageContainer src="./imgOne.png" alt="garage-repair-shop" />
      </SideBySide>
    </Layout>
  );
}
