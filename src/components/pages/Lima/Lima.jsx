import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { H3, H4, H5, Paragraph, Small } from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import Logo from "../../atoms/Logo/Logo";
import Button from "../../atoms/Button/Button";

const LimaContainer = styled.div`
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
`;

const BackLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const LogoWrapper = styled.div`
  flex-grow: 1;
  text-align: center;
  margin-right: 2rem;
`;

const ContentContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled(H4)`
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled(Paragraph)`
  text-align: center;
  color: #6c757d;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TabButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  border: 1px solid #000;
  background: ${(props) => (props.active ? "#000" : "white")};
  color: ${(props) => (props.active ? "white" : "#000")};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.active ? "#000" : "#f8f9fa")};
  }
`;

const ResultInfo = styled(Paragraph)`
  text-align: center;
  font-weight: bold;
  font-size: 0.875rem;
  margin-bottom: 2rem;
`;

const HotelCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 2rem;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${(props) => (props.active ? "block" : "none")};
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "prev" ? "left: 10px" : "right: 10px")};
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const CardBody = styled.div`
  padding: 1.5rem;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CardTitle = styled(H5)`
  font-weight: bold;
  margin-bottom: 0;
`;

const Badge = styled.span`
  background-color: #0d6efd;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: bold;
`;

const InfoText = styled(Paragraph)`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const ServicesLabel = styled(Paragraph)`
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  margin-top: 1rem;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ServiceBadge = styled.span`
  background-color: #f8f9fa;
  color: #000;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  border: 1px solid #dee2e6;
  font-size: 0.75rem;
`;

const PriceCard = styled.div`
  background-color: #000;
  color: white;
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const PriceInfo = styled.div``;

const PriceLabel = styled(Small)`
  display: block;
  color: #6c757d;
  margin-bottom: 0.25rem;
`;

const Price = styled(H3)`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const PriceNote = styled(Small)`
  color: #6c757d;
  font-size: 0.7rem;
`;

const hotelData = {
  select: {
    name: "Casa Andina - Miraflores",
    category: "SELECT",
    location: "Calle Schell 452, Miraflores",
    floors: "8 pisos • 20 habitaciones por piso",
    images: ["/img/fa1.jpg", "/img/pi.jpg", "/img/gi.jpg"],
    services: [
      "Jacuzzi",
      "Restaurante / Bar",
      "Desayuno",
      "Gimnasio",
      "Spa (costo adicional)",
    ],
    price: "S/219",
    priceNote: "+ S/61 de IGV y servicios",
  },
  standard: {
    name: "Casa Andina Standard - San Isidro",
    category: "STANDARD",
    location: "Av. Petit Thouars 2510, San Isidro",
    floors: "6 pisos • 15 habitaciones por piso",
    images: ["/img/facha.jpg", "/img/paz.jpg", "/img/bar.jpg"],
    services: ["Desayuno", "Wifi Gratis", "Estacionamiento", "Room Service"],
    price: "S/159",
    priceNote: "+ S/42 de IGV y servicios",
  },
  premium: {
    name: "Casa Andina Premium - Miraflores",
    category: "PREMIUM",
    location: "Av. La Paz 463, Miraflores",
    floors: "10 pisos • 25 habitaciones por piso",
    images: ["/img/f11.jpg", "/img/fa1.jpg", "/img/gi.jpg"],
    services: [
      "Piscina",
      "Spa",
      "Gimnasio",
      "Restaurante Gourmet",
      "Bar Premium",
      "Jacuzzi",
    ],
    price: "S/329",
    priceNote: "+ S/89 de IGV y servicios",
  },
};

function Lima() {
  const [activeTab, setActiveTab] = useState("select");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hotel = hotelData[activeTab];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? hotel.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === hotel.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentImageIndex(0);
  };

  return (
    <LimaContainer>
      <Header>
        <BackLink to="/destinos">
          <Icon name="arrow-left" size="2rem" />
        </BackLink>
        <LogoWrapper>
          <Logo size="30px" />
        </LogoWrapper>
      </Header>

      <ContentContainer>
        <Title>Filtrar por Categoría</Title>
        <Subtitle>Encuentra tu experiencia perfecta</Subtitle>

        <TabsContainer>
          <TabButton
            active={activeTab === "select"}
            onClick={() => handleTabChange("select")}
          >
            Select
          </TabButton>
          <TabButton
            active={activeTab === "standard"}
            onClick={() => handleTabChange("standard")}
          >
            Standard
          </TabButton>
          <TabButton
            active={activeTab === "premium"}
            onClick={() => handleTabChange("premium")}
          >
            Premium
          </TabButton>
        </TabsContainer>

        <ResultInfo>
          Mostrando 1 hotel en Lima • Categoría {hotel.category}
        </ResultInfo>

        <HotelCard>
          <CarouselContainer>
            {hotel.images.map((image, index) => (
              <CarouselImage
                key={index}
                src={image}
                alt={`Hotel ${index + 1}`}
                active={index === currentImageIndex}
              />
            ))}
            <CarouselButton direction="prev" onClick={handlePrevImage}>
              <Icon name="chevron-left" size="1.5rem" />
            </CarouselButton>
            <CarouselButton direction="next" onClick={handleNextImage}>
              <Icon name="chevron-right" size="1.5rem" />
            </CarouselButton>
          </CarouselContainer>

          <CardBody>
            <CardHeader>
              <CardTitle>{hotel.name}</CardTitle>
              <Badge>{hotel.category}</Badge>
            </CardHeader>

            <InfoText>
              <Icon
                name="geo-alt-fill"
                size="1rem"
                style={{ marginRight: "0.25rem" }}
              />
              <strong>Ubicación:</strong> {hotel.location}
            </InfoText>
            <InfoText>
              <Icon
                name="building"
                size="1rem"
                style={{ marginRight: "0.25rem" }}
              />
              {hotel.floors}
            </InfoText>

            <ServicesLabel>Servicios incluido:</ServicesLabel>
            <ServicesContainer>
              {hotel.services.map((service, index) => (
                <ServiceBadge key={index}>{service}</ServiceBadge>
              ))}
            </ServicesContainer>

            <PriceCard>
              <PriceInfo>
                <PriceLabel>Precio desde</PriceLabel>
                <Price>{hotel.price}</Price>
                <PriceNote>{hotel.priceNote}</PriceNote>
              </PriceInfo>
              <Icon name="building" size="4rem" color="#6c757d" />
            </PriceCard>

            <Button as={Link} to="/reserva-fechas" variant="primary" fullWidth>
              Reservar Ahora
            </Button>
          </CardBody>
        </HotelCard>
      </ContentContainer>
    </LimaContainer>
  );
}

export default Lima;
