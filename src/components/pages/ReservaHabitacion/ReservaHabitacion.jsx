import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { H3, H4, Paragraph } from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import Logo from "../../atoms/Logo/Logo";
import Button from "../../atoms/Button/Button";

const ReservaHabitacionContainer = styled.div`
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
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled(H4)`
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  overflow: hidden;
`;

const RoomTypeButton = styled.button`
  flex: 1;
  padding: 0.75rem 0.5rem;
  background: white;
  border: none;
  border-right: 1px solid #dee2e6;
  font-size: 0.8rem;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  background-color: ${(props) => (props.active ? "#f8f9fa" : "white")};
  cursor: pointer;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background-color: #f8f9fa;
  }
`;

const FloorButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const FloorButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 12px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  background-color: ${(props) => (props.active ? "#000" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#000" : "#f8f9fa")};
  }
`;

const RoomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const RoomButton = styled.button`
  padding: 0.75rem;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 12px;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const SummaryCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin-bottom: 1.5rem;
`;

const SummaryLabel = styled(Paragraph)`
  color: #6c757d;
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #dee2e6;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

function ReservaHabitacion() {
  const navigate = useNavigate();
  const [roomType, setRoomType] = useState("suite");
  const [floor, setFloor] = useState(1);

  const handleNext = () => {
    navigate("/pago");
  };

  const handleBack = () => {
    navigate("/reserva-fechas");
  };

  const rooms = Array.from({ length: 16 }, (_, i) => 101 + i);

  return (
    <ReservaHabitacionContainer>
      <Header>
        <BackLink to="/reserva-fechas">
          <Icon name="arrow-left" size="2rem" />
        </BackLink>
        <LogoWrapper>
          <Logo size="30px" />
        </LogoWrapper>
      </Header>

      <ContentContainer>
        <Title>Nuestras habitaciones y suites</Title>

        <ButtonGroup>
          <RoomTypeButton
            active={roomType === "suite"}
            onClick={() => setRoomType("suite")}
          >
            Suite
            <br />
            Matrimonial
          </RoomTypeButton>
          <RoomTypeButton
            active={roomType === "triple"}
            onClick={() => setRoomType("triple")}
          >
            Habitación
            <br />
            Superior Triple
          </RoomTypeButton>
          <RoomTypeButton
            active={roomType === "doble"}
            onClick={() => setRoomType("doble")}
          >
            Habitación
            <br />
            Superior Doble
          </RoomTypeButton>
        </ButtonGroup>

        <Title>Selecciona el piso</Title>
        <FloorButtonsContainer>
          {[1, 2, 3, 4, 5].map((f) => (
            <FloorButton
              key={f}
              active={floor === f}
              onClick={() => setFloor(f)}
            >
              Piso {f}
            </FloorButton>
          ))}
        </FloorButtonsContainer>

        <Title>Selecciona el numero de habitación:</Title>
        <RoomGrid>
          {rooms.map((room) => (
            <RoomButton key={room}>
              <Icon name="door-closed-fill" size="1rem" /> {room}
            </RoomButton>
          ))}
        </RoomGrid>

        <SummaryCard>
          <SummaryLabel>Resumen</SummaryLabel>
          <SummaryRow>
            <span>S/.219 x 5 noches</span>
            <span style={{ fontWeight: "bold" }}>S/ 1,095</span>
          </SummaryRow>
          <TotalRow>
            <H4 style={{ marginBottom: 0 }}>Total</H4>
            <H3 style={{ marginBottom: 0 }}>S/ 1,095</H3>
          </TotalRow>
        </SummaryCard>

        <ButtonsContainer>
          <Button variant="primary" fullWidth onClick={handleNext}>
            Continuar Pago
          </Button>
          <Button variant="outline" fullWidth onClick={handleBack}>
            Atrás
          </Button>
        </ButtonsContainer>
      </ContentContainer>
    </ReservaHabitacionContainer>
  );
}

export default ReservaHabitacion;
