import { Link } from "react-router-dom";
import styled from "styled-components";
import { H2, H4, H5, Paragraph, Small } from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import Logo from "../../atoms/Logo/Logo";
import { media } from "../../../styles/mediaQueries";

const DestinosContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const Header = styled.header`
  background-color: #000;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BackLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const LogoWrapper = styled.div`
  flex-grow: 1;
  text-align: center;
  margin-right: 2rem;
`;

const ContentContainer = styled.div`
  padding: 2rem 1rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled(H2)`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Quote = styled(Paragraph)`
  color: #6c757d;
  font-style: italic;
  padding: 0 1rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
`;

const SectionTitle = styled(H4)`
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const DestinationCard = styled(Link)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  display: block;
  aspect-ratio: 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
  }
`;

const DestinationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DestinationOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DestinationName = styled(H5)`
  font-weight: bold;
  color: white;
  margin-bottom: 0.25rem;
`;

const HotelCount = styled(Small)`
  color: #ffc107;
  font-weight: bold;
`;

const destinations = [
  { id: "lima", name: "Lima", hotels: 5, image: "/img/lima.jpg" },
  { id: "arequipa", name: "Arequipa", hotels: 3, image: "/img/arequipa.jpg" },
  { id: "cusco", name: "Cusco", hotels: 5, image: "/img/cusco.jpg" },
  { id: "huancayo", name: "Huancayo", hotels: 2, image: "/img/huancayo.jpg" },
  { id: "iquitos", name: "Iquitos", hotels: 2, image: "/img/iquito.jpg" },
  { id: "paracas", name: "Paracas", hotels: 1, image: "/img/paracas.jpg" },
];

function Destinos() {
  return (
    <DestinosContainer>
      <Header>
        <BackLink to="/home">
          <Icon name="arrow-left" size="2rem" />
        </BackLink>
        <LogoWrapper>
          <Logo size="30px" />
        </LogoWrapper>
      </Header>

      <ContentContainer>
        <Title>¿Listo para tu próxima aventura?</Title>
        <Quote>
          "Descubre el Perú con nosotros. 40 hoteles en 28 ciudades te esperan
          con auténtica hospitalidad peruana."
        </Quote>

        <SectionTitle>Seleccioné el destino</SectionTitle>

        <DestinationsGrid>
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              to={destination.id === "lima" ? "/lima" : "#"}
            >
              <DestinationImage
                src={destination.image}
                alt={destination.name}
              />
              <DestinationOverlay>
                <DestinationName>{destination.name}</DestinationName>
                <HotelCount>{destination.hotels} hoteles</HotelCount>
              </DestinationOverlay>
            </DestinationCard>
          ))}
        </DestinationsGrid>
      </ContentContainer>
    </DestinosContainer>
  );
}

export default Destinos;
