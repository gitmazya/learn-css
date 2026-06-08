import { InlineText, LinkButton, Title } from "@/components/atoms";
import { Page } from "@/components/molecules";
import styled from "styled-components";

const pokeballImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1024px-Pok%C3%A9_Ball_icon.svg.png?20161023215848";

const pokemons = [
  {
    name: "kakuna",
    number: "#0014",
    description:
      "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    category: "cocoon",
  },
  {
    name: "jigglypuff",
    number: "#0039",
    description:
      "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    category: "balloon",
  },
  {
    name: "growlithe",
    number: "#0058",
    description:
      "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
    category: "puppy",
  },
  {
    name: "cubone",
    number: "#0104",
    description:
      "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png",
    category: "lonely",
  },
  {
    name: "eevee",
    number: "#0133",
    description:
      "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    category: "evolution",
  },
  {
    name: "snorlax",
    number: "#0143",
    description:
      "Its stomach can digest any kind of food, even if it happens to be moldy or rotten.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    category: "sleeping",
  },
  {
    name: "pichu",
    number: "#0172",
    description:
      "It is unskilled at storing electric power. Any kind of shock causes it to discharge energy spontaneously.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png",
    category: "tiny mouse",
  },
];

export const Component = () => {
  return (
    <Page title="Cards">
      <Title>Cards</Title>
      <p>
        <InlineText>Let's create some cards.</InlineText>
      </p>
      <p>
        <LinkButton
          href="https://www.figma.com/file/LO1cv0bfHI5t4Sq8XWNWCG/%F0%9F%AA%84-Learn-CSS?type=design&node-id=1-2"
          blank
          view="text"
        >
          👁️ Figma
        </LinkButton>
      </p>

      <Section>
        <SectionTitle>Karteczki</SectionTitle>

        <CardsList>
          {pokemons.map((pokemon, index) => (
            <Card>
              <CardHeader>
                <CardLogo src={pokeballImage} />
                <CardHeaderColumn>
                  <CardName>{pokemon.name}</CardName>
                  <CardNumber>{pokemon.number}</CardNumber>
                </CardHeaderColumn>
              </CardHeader>
              <CardBody>
                <CardImage src={pokemon.image} />
                <CardCategory>{pokemon.category}</CardCategory>
              </CardBody>
              <CardFooter>
                <CardParagraph>{pokemon.description}</CardParagraph>
                <CardSubsription>
                  <CardLink
                    href={`https://www.pokemon.com/us/pokedex/${pokemon.name}`}
                    target="_blank"
                  >
                    View
                  </CardLink>
                </CardSubsription>
              </CardFooter>
            </Card>
          ))}
        </CardsList>
      </Section>
    </Page>
  );
};

const Section = styled.section`
  width: 100%;
  border: 1px solid black;
`;

const SectionTitle = styled.h1`
  margin: 0;
  color: #000;
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
`;

const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 12px;
  list-style: none;
  margin: 0;
  margin-top: 24px;
  padding: 0;
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  max-width: 342px;
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 25%);
  overflow: hidden;
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
`;

const CardLogo = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 32px;
`;

const CardHeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const CardName = styled.h2`
  margin: 0;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
`;

const CardNumber = styled.span`
  color: #666;
  font-size: 14px;
`;

const CardBody = styled.div`
  position: relative;
  width: 100%;
`;

const CardImage = styled.img`
  display: block;
  min-width: 100%;
  height: 198px;
  object-fit: contain;
  background-color: #ccc;
`;

const CardFooter = styled.footer`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 24px 32px;
`;

const CardParagraph = styled.p`
  color: #666;
  font-size: 14px;
`;

const CardSubsription = styled.div`
  margin-top: auto;
`

const CardLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 4px 8px;
  border-radius: 9999px;
  color: white;
  margin-top: 24px;
  width: fit-content;
  margin-left: auto;
`;

const CardCategory = styled.span`
  display: flex;
  position: absolute;
  top: 8px;
  right: 8px;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 4px 8px;
  border-radius: 9999px;
  color: white;
  width: fit-content;
  text-transform: capitalize;
  font-size: 12px;
`
