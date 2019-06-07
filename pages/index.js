import {
  List,
  Heading,
  CardNormal,
  PageContainer,
  PageContainerBreakOut
} from "guild-js-theme";

const fakeItems = new Array(10).fill();

export default () => (
  <PageContainer>
    <Heading color={["breakerBay", "burntSienna"]}>Latest news</Heading>
    <PageContainerBreakOut as={List} py="1">
      {fakeItems.map((item, i) => (
        <CardNormal
          key={`card-${i}`}
          image={`http://lorempixel.com/300/170?${i}`}
          title={`Card ${i}`}
          subtitle="Subtitle"
        />
      ))}
    </PageContainerBreakOut>
  </PageContainer>
);
