import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { H4, H5, Paragraph, Small } from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import Button from "../../atoms/Button/Button";

const RecojoContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
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

const HeaderCenter = styled.div`
  flex-grow: 1;
  text-align: center;
  margin-right: 2rem;
`;

const BrandName = styled.span`
  color: white;
  font-weight: bold;
  font-size: 0.875rem;
  display: block;
`;

const BrandSubtext = styled(Small)`
  color: #6c757d;
  font-size: 0.6rem;
  letter-spacing: 2px;
`;

const ContentContainer = styled.div`
  padding: 1.5rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
`;

const Title = styled(H5)`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled(Paragraph)`
  color: #6c757d;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`;

const IconsContainer = styled.div`
  padding: 1.5rem 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const SectionTitle = styled(H4)`
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Description = styled(Paragraph)`
  color: #6c757d;
  font-size: 0.875rem;
  padding: 0 1rem;
  margin-bottom: 1.5rem;
`;

const InfoBox = styled.div`
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border-radius: 20px;
  padding: 1.5rem;
  text-align: left;
  margin: 0 0 1.5rem;
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const InfoTitle = styled.span`
  font-weight: bold;
  margin-left: 0.5rem;
`;

const InfoList = styled.ul`
  font-size: 0.875rem;
  padding-left: 1.5rem;
  margin-bottom: 0;
  opacity: 0.75;
`;

const BottomBar = styled.div`
  margin-top: auto;
  padding: 0 1rem 2rem;
`;

const ActivateButton = styled(Button)`
  margin-bottom: 0.5rem;
`;

const ActivateNote = styled(Small)`
  color: #6c757d;
  font-size: 0.7rem;
  display: block;
  text-align: center;
`;

const Alert = styled.div`
  background-color: #d1f2eb;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border: none;
  text-align: left;
`;

const AlertContent = styled.div`
  margin-left: 1rem;
  line-height: 1.2;
`;

const AlertTitle = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 0.25rem;
  color: #000;
`;

const AlertText = styled(Small)`
  color: #6c757d;
`;

const DriverCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  text-align: left;
  position: relative;
`;

const DriverLabel = styled(Small)`
  font-weight: bold;
  color: #6c757d;
  display: block;
  margin-bottom: 1rem;
`;

const DriverInfo = styled.div`
  display: flex;
  align-items: center;
`;

const DriverDetails = styled.div`
  flex: 1;
`;

const DriverRow = styled(Paragraph)`
  margin-bottom: 0.5rem;
  font-size: 0.875rem;

  strong {
    font-weight: bold;
  }
`;

const DriverPhotoContainer = styled.div`
  text-align: center;
  margin-left: 1rem;
`;

const DriverPhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
`;

const Rating = styled.span`
  background-color: #000;
  color: white;
  border-radius: 50px;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  display: inline-block;
  width: 100%;
`;

const MapLabel = styled(Paragraph)`
  font-size: 0.875rem;
  color: #6c757d;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const MapContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #dee2e6;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  position: relative;
  background: white;
  min-height: 180px;
`;

const MapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 180px;
`;

const MapPin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: -20px;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const RoundButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const CancelNote = styled(Paragraph)`
  font-size: 0.875rem;
  color: #6c757d;
  padding: 0 1rem;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

function Recojo() {
  const [isActivated, setIsActivated] = useState(false);

  const handleActivate = () => {
    setIsActivated(true);
  };

  const handleCancel = () => {
    setIsActivated(false);
  };

  if (!isActivated) {
    return (
      <RecojoContainer>
        <Header>
          <BackLink to="/perfil">
            <Icon name="arrow-left" size="2rem" />
          </BackLink>
          <HeaderCenter>
            <BrandName>CASA ANDINA</BrandName>
            <BrandSubtext>HOTELES</BrandSubtext>
          </HeaderCenter>
        </Header>

        <ContentContainer>
          <Title>Recogida en Aeropuerto</Title>
          <Subtitle>Servicio de traslado incluido con tu reserva</Subtitle>

          <IconsContainer>
            <Icon
              name="taxi-front-fill"
              size="4rem"
              color="#6c757d"
              style={{ opacity: 0.5 }}
            />
            <Icon name="building" size="3rem" color="#000" />
          </IconsContainer>

          <SectionTitle>¿Ya llegaste al aeropuerto?</SectionTitle>
          <Description>
            Activa el servicio de recogida y un conductor te recogerá en la
            puerta de llegada. Necesitaremos tu acceso de ubicación GPS.
          </Description>

          <InfoBox>
            <InfoHeader>
              <Icon name="check-circle-fill" size="1.25rem" />
              <InfoTitle>Incluido en tu reserva:</InfoTitle>
            </InfoHeader>
            <InfoList>
              <li>Traslado aeropuerto - hotel</li>
              <li>Asistencia con equipaje</li>
              <li>Vehículo cómodo y climatizado</li>
              <li>Conductor profesional</li>
            </InfoList>
          </InfoBox>
        </ContentContainer>

        <BottomBar>
          <ActivateButton
            variant="lime"
            fullWidth
            size="large"
            onClick={handleActivate}
          >
            <Icon
              name="cursor-fill"
              size="1rem"
              style={{ marginRight: "0.5rem" }}
            />
            Activar Recogida
          </ActivateButton>
          <ActivateNote>
            Al activar, compartirás tu ubicación GPS con el conductor
          </ActivateNote>
        </BottomBar>
      </RecojoContainer>
    );
  }

  return (
    <RecojoContainer>
      <Header>
        <button
          onClick={handleCancel}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <Icon name="arrow-left" size="2rem" color="white" />
        </button>
        <HeaderCenter>
          <BrandName>CASA ANDINA</BrandName>
          <BrandSubtext>HOTELES</BrandSubtext>
        </HeaderCenter>
      </Header>

      <ContentContainer>
        <Title>Recogida en Aeropuerto</Title>
        <Subtitle>Servicio de traslado incluido con tu reserva</Subtitle>

        <Alert>
          <Icon name="check-circle-fill" size="2rem" color="#198754" />
          <AlertContent>
            <AlertTitle>Conductor asignado</AlertTitle>
            <AlertText>Te recogerá aproximadamente en 10 minutos</AlertText>
          </AlertContent>
        </Alert>

        <DriverCard>
          <DriverLabel>[Conductor Verificado]</DriverLabel>
          <DriverInfo>
            <DriverDetails>
              <DriverRow>
                <strong>Nombre:</strong> Dani Ceballos
              </DriverRow>
              <DriverRow>
                <strong>Tiempo estimado:</strong> 10 min
              </DriverRow>
              <DriverRow>
                <strong>Modelo:</strong> Mercedes Benz Sprinter
              </DriverRow>
              <DriverRow>
                <strong>Placa:</strong> SIL-666
              </DriverRow>
            </DriverDetails>
            <DriverPhotoContainer>
              <DriverPhoto src="/img/chofer.png" alt="Conductor" />
              <Rating>
                <Icon name="star-fill" size="0.875rem" color="#ffc107" /> 4.8
              </Rating>
            </DriverPhotoContainer>
          </DriverInfo>
        </DriverCard>

        <MapLabel>Usted se encuentra aquí</MapLabel>
        <MapContainer>
          <MapImage src="/img/mapa.png" alt="Mapa" />
          <MapPin>
            <Icon name="geo-alt-fill" size="4rem" color="#000" />
          </MapPin>
        </MapContainer>

        <ActionButtons>
          <RoundButton>
            <Icon name="telephone-fill" size="1.5rem" />
          </RoundButton>
          <RoundButton>
            <Icon name="chat-left-text-fill" size="1.5rem" />
          </RoundButton>
        </ActionButtons>

        <div style={{ marginTop: "auto", padding: "0 1rem 2rem" }}>
          <CancelNote>
            Una vez que se encuentre en el auto el chofer se le solicitará que
            cancele la movilidad
          </CancelNote>
          <Button
            variant="primary"
            fullWidth
            size="large"
            onClick={handleCancel}
          >
            Cancelar recogida
          </Button>
        </div>
      </ContentContainer>
    </RecojoContainer>
  );
}

export default Recojo;
