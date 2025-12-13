import { Link } from "react-router-dom";
import styled from "styled-components";
import { H1, H4, H6, Paragraph, Small } from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import Button from "../../atoms/Button/Button";

const VoucherContainer = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
`;

const ReceiptContainer = styled.div`
  background-color: white;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(135deg, white 5px, transparent 0) 0 5px,
      linear-gradient(-135deg, white 5px, transparent 0) 0 5px;
    background-color: #f2f2f2;
    background-position: left bottom;
    background-repeat: repeat-x;
    background-size: 10px 10px;
  }
`;

const IconContainer = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Title = styled(H4)`
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const DateTime = styled(Paragraph)`
  color: #6c757d;
  font-size: 0.875rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Amount = styled(H1)`
  font-weight: bold;
  text-align: center;
  margin: 1.5rem 0;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(108, 117, 125, 0.25);
  margin: 1.5rem 0;
`;

const InfoSection = styled.div`
  padding: 1rem 0;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled(Small)`
  color: #6c757d;
  font-weight: bold;
`;

const InfoValue = styled.span`
  font-weight: bold;
  text-align: right;
  flex: 1;
  margin-left: 1rem;
`;

const InfoValueSmall = styled(Small)`
  color: #6c757d;
  display: block;
  text-align: right;
`;

const TransactionId = styled.span`
  font-family: monospace;
  text-transform: uppercase;
`;

const DetailCard = styled.div`
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  margin-bottom: 1.5rem;
`;

const DetailTitle = styled(H6)`
  font-weight: bold;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #6c757d;
  margin-bottom: 0.75rem;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const DetailDescription = styled(Small)`
  display: block;
  color: #6c757d;
  margin-top: 0.25rem;
`;

const ButtonsContainer = styled.div`
  display: grid;
  gap: 0.75rem;
`;

const LogoFooter = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  opacity: 0.5;
`;

function Voucher() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <VoucherContainer>
      <ReceiptContainer>
        <IconContainer>
          <Icon name="check-circle-fill" size="3.5rem" color="#198754" />
        </IconContainer>

        <Title>Pago Exitoso</Title>
        <DateTime>16 de Noviembre, 2025 - 10:42 AM</DateTime>
        <Amount>S/ 1,095.00</Amount>

        <Divider />

        <InfoSection>
          <InfoRow>
            <InfoLabel>Para</InfoLabel>
            <InfoValue>
              Casa Andina Hoteles
              <br />
              <InfoValueSmall>pagos@casa-andina.com</InfoValueSmall>
            </InfoValue>
          </InfoRow>

          <InfoRow>
            <InfoLabel>De</InfoLabel>
            <InfoValue>Issac Valdez</InfoValue>
          </InfoRow>

          <InfoRow>
            <InfoLabel>Método de Pago</InfoLabel>
            <InfoValue>Visa **** 4532</InfoValue>
          </InfoRow>

          <InfoRow>
            <InfoLabel>ID Transacción</InfoLabel>
            <InfoValue>
              <TransactionId>8X294L11K9</TransactionId>
            </InfoValue>
          </InfoRow>
        </InfoSection>

        <DetailCard>
          <DetailTitle>Detalle de compra</DetailTitle>
          <DetailRow>
            <span>Reserva: Select Miraflores</span>
            <span style={{ fontWeight: "bold" }}>S/ 1,095.00</span>
          </DetailRow>
          <DetailDescription>5 Noches (20 Dic - 25 Dic)</DetailDescription>
        </DetailCard>

        <ButtonsContainer>
          <Button variant="outline" fullWidth onClick={handlePrint}>
            <Icon
              name="printer"
              size="1rem"
              style={{ marginRight: "0.5rem" }}
            />
            Imprimir Comprobante
          </Button>
          <Button
            as={Link}
            to="/perfil?view=reservas"
            variant="primary"
            fullWidth
            style={{ backgroundColor: "#003087", border: "none" }}
          >
            Ver Mis Reservas
          </Button>
        </ButtonsContainer>

        <LogoFooter>
          <img src="/img/corto.png" alt="Logo" height="20" />
        </LogoFooter>
      </ReceiptContainer>
    </VoucherContainer>
  );
}

export default Voucher;
