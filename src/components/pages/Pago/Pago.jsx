import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { H2, H3, H4, Paragraph, Small } from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import Logo from "../../atoms/Logo/Logo";
import Button from "../../atoms/Button/Button";

const PagoContainer = styled.div`
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

const LogoWrapper = styled.div`
  flex-grow: 1;
  text-align: center;
  margin-right: 2rem;
`;

const ContentContainer = styled.div`
  padding: 2rem 1rem;
  flex-grow: 1;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`;

const Title = styled(H4)`
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const ReservationCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  font-size: 0.875rem;
`;

const ReservationRow = styled.div`
  display: flex;
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const RowLabel = styled.div`
  width: 35%;
  font-weight: bold;
  color: #6c757d;
`;

const RowValue = styled.div`
  width: 65%;
  font-weight: bold;
`;

const PaymentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const PaymentButton = styled.button`
  padding: 0.75rem;
  background: white;
  border: 2px solid ${(props) => (props.selected ? "#000" : "#dee2e6")};
  border-radius: 12px;
  display: flex;
  align-items: center;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const BottomBar = styled.div`
  margin-top: auto;
  background: white;
  padding: 1.5rem;
  border-top: 1px solid #dee2e6;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const ConfirmationContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const ConfirmationIcon = styled.div`
  margin-bottom: 2rem;
`;

const ConfirmationTitle = styled(H2)`
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const ConfirmationText = styled(Paragraph)`
  color: #6c757d;
  margin-bottom: 3rem;
  padding: 0 2rem;
`;

function Pago() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePay = () => {
    setShowConfirmation(true);
  };

  const handleViewReservation = () => {
    navigate("/voucher");
  };

  const handleBack = () => {
    navigate("/reserva-habitacion");
  };

  if (showConfirmation) {
    return (
      <PagoContainer>
        <ConfirmationContainer>
          <ConfirmationIcon>
            <Icon name="check-circle-fill" size="6rem" color="#000" />
          </ConfirmationIcon>
          <ConfirmationTitle>¡Pago Exitoso!</ConfirmationTitle>
          <ConfirmationText>
            Tu pago se ha procesado correctamente. Revisa tu comprobante o ve a
            tus reservas.
          </ConfirmationText>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
              maxWidth: "350px",
            }}
          >
            <Button
              variant="primary"
              size="large"
              fullWidth
              onClick={() => navigate("/voucher")}
            >
              Ver Comprobante
            </Button>
            <Button
              variant="outline"
              size="large"
              fullWidth
              onClick={() => navigate("/perfil?view=reservas")}
            >
              Ir a Mis Reservas
            </Button>
          </div>
        </ConfirmationContainer>
      </PagoContainer>
    );
  }

  return (
    <PagoContainer>
      <Header>
        <BackLink to="/reserva-habitacion">
          <Icon name="arrow-left" size="2rem" />
        </BackLink>
        <LogoWrapper>
          <Logo size="30px" />
        </LogoWrapper>
      </Header>

      <ContentContainer>
        <Title>Su reserva</Title>
        <ReservationCard>
          <ReservationRow>
            <RowLabel>Hotel:</RowLabel>
            <RowValue>Casa Andina - Miraflores</RowValue>
          </ReservationRow>
          <ReservationRow>
            <RowLabel>Ciudad:</RowLabel>
            <RowValue>Lima</RowValue>
          </ReservationRow>
          <ReservationRow>
            <RowLabel>Check In:</RowLabel>
            <RowValue>04 de Noviembre 2025</RowValue>
          </ReservationRow>
          <ReservationRow>
            <RowLabel>Check Out:</RowLabel>
            <RowValue>08 de Noviembre 2025</RowValue>
          </ReservationRow>
          <ReservationRow>
            <RowLabel>Noches:</RowLabel>
            <RowValue>5 noches</RowValue>
          </ReservationRow>
          <ReservationRow>
            <RowLabel>Habitación:</RowLabel>
            <RowValue>Suite Matrimonial - 101</RowValue>
          </ReservationRow>
        </ReservationCard>

        <Title>Metodos de Pago</Title>
        <PaymentGrid>
          <PaymentButton onClick={() => setPaymentMethod("apple")}>
            <Icon
              name="apple"
              size="1.5rem"
              style={{ marginRight: "0.5rem" }}
            />
            Apple Pay
          </PaymentButton>
          <PaymentButton onClick={() => setPaymentMethod("google")}>
            <Icon
              name="google"
              size="1.5rem"
              style={{ marginRight: "0.5rem" }}
            />
            Google Pay
          </PaymentButton>
          <PaymentButton
            selected={paymentMethod === "visa"}
            onClick={() => setPaymentMethod("visa")}
          >
            <Icon
              name="credit-card-2-front-fill"
              size="1.5rem"
              color="#1a73e8"
              style={{ marginRight: "0.5rem" }}
            />
            Visa
          </PaymentButton>
          <PaymentButton onClick={() => setPaymentMethod("mastercard")}>
            <Icon
              name="credit-card-fill"
              size="1.5rem"
              color="#dc3545"
              style={{ marginRight: "0.5rem" }}
            />
            Mastercard
          </PaymentButton>
          <PaymentButton onClick={() => setPaymentMethod("amex")}>
            <Icon
              name="credit-card"
              size="1.5rem"
              color="#0dcaf0"
              style={{ marginRight: "0.5rem" }}
            />
            Amex
          </PaymentButton>
          <PaymentButton onClick={() => setPaymentMethod("paypal")}>
            <Icon
              name="paypal"
              size="1.5rem"
              color="#0d6efd"
              style={{ marginRight: "0.5rem" }}
            />
            PayPal
          </PaymentButton>
        </PaymentGrid>
      </ContentContainer>

      <BottomBar>
        <TotalRow>
          <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
            Total a pagar
          </span>
          <span style={{ fontWeight: "bold", fontSize: "1.75rem" }}>
            S/ 1,095
          </span>
        </TotalRow>
        <ButtonsRow>
          <Button variant="outline" onClick={handleBack} style={{ flex: 1 }}>
            Atrás
          </Button>
          <Button
            variant="primary"
            size="large"
            onClick={handlePay}
            style={{ flex: 1 }}
          >
            Pagar
          </Button>
        </ButtonsRow>
      </BottomBar>
    </PagoContainer>
  );
}

export default Pago;
