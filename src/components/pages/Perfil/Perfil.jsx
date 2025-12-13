import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Icon from "../../atoms/Icon/Icon";
import Button from "../../atoms/Button/Button";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PerfilContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const ViewSection = styled.div`
  display: ${(props) => (props.$active ? "block" : "none")};
  animation: ${fadeIn} 0.4s ease-in-out;
`;

const Header = styled.header`
  background-color: #000;
  padding: 1rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;

const BackLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.span`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  flex-grow: 1;
  text-align: center;
  margin-right: 2rem;
`;

const Container = styled.div`
  padding: 1.5rem 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

// === VIEW MAIN ===
const ProfileCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
`;

const ProfileBanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background: linear-gradient(135deg, #f4e5c2, #e6d5b8);
  opacity: 0.5;
`;

const ProfileContent = styled.div`
  position: relative;
  z-index: 2;
`;

const ProfileImageContainer = styled.div`
  display: inline-block;
  position: relative;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

const EditIconButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 35px;
  height: 35px;
  background-color: #000;
  color: white;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const ProfileName = styled.h3`
  font-weight: bold;
  margin-bottom: 0;
  font-size: 1.75rem;
`;

const ProfileEmail = styled.p`
  color: #6c757d;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h5`
  font-weight: bold;
  margin-bottom: 1.5rem;
  padding-left: 0.75rem;
  border-left: 4px solid #ffc107;
  font-size: 1.25rem;
`;

const MenuList = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 2rem;
`;

const MenuItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border: none;
  border-bottom: 1px solid #f0f0f0;
  background: white;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  text-align: left;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f8f9fa;
  }
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
  text-decoration: none;
  color: inherit;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f8f9fa;
  }
`;

const MenuIconWrapper = styled.div`
  background-color: #f8f9fa;
  border-radius: 50%;
  padding: 0.75rem;
  margin-right: 1rem;
  color: #ffc107;
`;

const MenuContent = styled.div`
  flex-grow: 1;
  text-align: left;
`;

const MenuTitle = styled.h6`
  font-weight: bold;
  margin-bottom: 0;
  font-size: 1.125rem;
`;

const MenuSubtitle = styled.small`
  color: #6c757d;
  font-size: 0.875rem;
  display: block;
`;

// === VIEW EDIT ===
const PurpleGradient = styled.div`
  background: linear-gradient(135deg, #d500f9, #651fff);
  color: white;
  padding: 2rem 1rem;
  text-align: center;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const StatsCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 1rem;
  text-align: center;
  margin: 0 0.5rem 2rem;
  display: flex;
`;

const StatItem = styled.div`
  flex: 1;
  border-right: ${(props) => (props.$divider ? "1px solid #e0e0e0" : "none")};

  h4 {
    font-weight: bold;
    margin: 0.5rem 0 0;
  }

  small {
    color: #6c757d;
  }
`;

const FormCard = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #6c757d;
  font-weight: bold;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  border: none;
  background-color: #f8f9fa;
  font-size: 1rem;
`;

// === VIEW RESERVAS ===
const Card = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 2rem;
  opacity: ${(props) => (props.$opacity ? props.$opacity : 1)};
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  filter: ${(props) => (props.$grayscale ? "grayscale(100%)" : "none")};
`;

const Badge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${(props) => props.$color || "#28a745"};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: bold;
`;

const CardBody = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h5`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const CardSubtitle = styled.small`
  color: #6c757d;
  display: block;
  margin-bottom: 1rem;
`;

const DateBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  text-align: center;
`;

const DateItem = styled.div`
  small {
    display: block;
    color: #6c757d;
    margin-bottom: 0.25rem;
  }

  span {
    font-weight: bold;
  }
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  small {
    color: #6c757d;
  }

  h5 {
    font-weight: bold;
    margin: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

// === VIEW PAGOS ===
const GreenCard = styled.div`
  background-color: #00c853;
  color: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  small {
    opacity: 0.75;
    display: block;
  }

  h1 {
    font-weight: bold;
    margin: 0.5rem 0;
  }
`;

const BadgeGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const WhiteBadge = styled.span`
  background-color: white;
  color: #00c853;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: bold;
`;

const BorderBadge = styled.span`
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
`;

const TransactionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Transaction = styled.div`
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const TransactionIcon = styled.div`
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 15px;
  margin-right: 1rem;
  color: ${(props) => props.$color || "#2962ff"};
`;

const TransactionContent = styled.div`
  flex-grow: 1;

  h6 {
    font-weight: bold;
    margin-bottom: 0;
  }

  small {
    color: #6c757d;
    font-size: 0.75rem;
  }
`;

const TransactionAmount = styled.div`
  text-align: right;

  span {
    display: block;
    font-weight: bold;
  }

  small {
    color: #28a745;
    font-weight: bold;
  }
`;

function Perfil() {
  const [searchParams] = useSearchParams();
  const viewParam = searchParams.get("view") || "main";
  const [view, setView] = useState(viewParam);

  const switchView = (viewName) => {
    setView(viewName);
    window.scrollTo(0, 0);
  };

  return (
    <PerfilContainer>
      {/* ===== VIEW MAIN ===== */}
      <ViewSection $active={view === "main"}>
        <Header>
          <BackLink to="/home">
            <Icon name="arrow-left" size="2rem" />
          </BackLink>
          <HeaderTitle>Mi Cuenta</HeaderTitle>
        </Header>

        <Container>
          <ProfileCard>
            <ProfileBanner />
            <ProfileContent>
              <ProfileImageContainer>
                <ProfileImage src="/img/foto.png" alt="Perfil" />
                <EditIconButton onClick={() => switchView("edit")}>
                  <Icon name="pencil-fill" size="0.875rem" />
                </EditIconButton>
              </ProfileImageContainer>
              <ProfileName>Issac Valdez</ProfileName>
              <ProfileEmail>issacvaldez@gmail.com</ProfileEmail>
              <Button
                variant="outline"
                size="small"
                onClick={() => switchView("edit")}
              >
                Editar perfil
              </Button>
            </ProfileContent>
          </ProfileCard>

          <SectionTitle>General</SectionTitle>
          <MenuList>
            <MenuItem onClick={() => switchView("reservas")}>
              <MenuIconWrapper>
                <Icon name="calendar-check-fill" size="1.25rem" />
              </MenuIconWrapper>
              <MenuContent>
                <MenuTitle>Mis Reservas</MenuTitle>
                <MenuSubtitle>Consulta tus próximas estancias</MenuSubtitle>
              </MenuContent>
              <Icon name="chevron-right" color="#6c757d" />
            </MenuItem>

            <MenuItem onClick={() => switchView("pagos")}>
              <MenuIconWrapper>
                <Icon name="receipt" size="1.25rem" />
              </MenuIconWrapper>
              <MenuContent>
                <MenuTitle>Historial de Pagos</MenuTitle>
                <MenuSubtitle>Revisa tus facturas pasadas</MenuSubtitle>
              </MenuContent>
              <Icon name="chevron-right" color="#6c757d" />
            </MenuItem>
          </MenuList>

          <SectionTitle>Soporte</SectionTitle>
          <MenuList>
            <MenuLink to="#">
              <MenuIconWrapper style={{ color: "#000" }}>
                <Icon name="question-circle-fill" size="1.25rem" />
              </MenuIconWrapper>
              <MenuContent>
                <MenuTitle>Centro de Ayuda</MenuTitle>
              </MenuContent>
              <Icon name="chevron-right" color="#6c757d" />
            </MenuLink>

            <MenuLink to="/recojo">
              <MenuIconWrapper style={{ color: "#000" }}>
                <Icon name="car-front-fill" size="1.25rem" />
              </MenuIconWrapper>
              <MenuContent>
                <MenuTitle>Solicitar Recojo</MenuTitle>
              </MenuContent>
              <Icon name="chevron-right" color="#6c757d" />
            </MenuLink>
          </MenuList>

          <div style={{ paddingBottom: "2rem" }}>
            <Button
              as={Link}
              to="/login"
              variant="outline"
              fullWidth
              style={{ borderColor: "#dc3545", color: "#dc3545" }}
            >
              Cerrar Sesión
            </Button>
          </div>
        </Container>
      </ViewSection>

      {/* ===== VIEW EDIT ===== */}
      <ViewSection $active={view === "edit"}>
        <Header>
          <BackButton onClick={() => switchView("main")}>
            <Icon name="arrow-left" size="2rem" />
          </BackButton>
          <HeaderTitle>Editar Perfil</HeaderTitle>
        </Header>

        <PurpleGradient>
          <ProfileImage
            src="/img/foto.png"
            alt="Perfil"
            style={{ marginBottom: "0.5rem" }}
          />
          <h4 style={{ fontWeight: "bold", margin: 0 }}>Issac Valdez</h4>
          <small style={{ opacity: 0.75 }}>Miembro desde Abril 2024</small>
        </PurpleGradient>

        <Container>
          <StatsCard>
            <StatItem $divider>
              <Icon name="building" size="3rem" color="#17a2b8" />
              <h4>12</h4>
              <small>Reservas</small>
            </StatItem>
            <StatItem>
              <Icon name="star-fill" size="3rem" color="#ffc107" />
              <h4>2500</h4>
              <small>Puntos</small>
            </StatItem>
          </StatsCard>

          <h6 style={{ fontWeight: "bold", marginBottom: "1.5rem" }}>
            Información Personal
          </h6>
          <FormCard>
            <FormGroup>
              <Label>Nombre</Label>
              <Input type="text" defaultValue="Issac Valdez" />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" defaultValue="issacvaldez@gmail.com" />
            </FormGroup>
            <FormGroup>
              <Label>Teléfono</Label>
              <Input type="tel" defaultValue="+51 914 879 454" />
            </FormGroup>
            <Button
              variant="primary"
              fullWidth
              style={{ backgroundColor: "#2962ff", borderColor: "#2962ff" }}
            >
              Guardar Cambios
            </Button>
          </FormCard>
        </Container>
      </ViewSection>

      {/* ===== VIEW RESERVAS ===== */}
      <ViewSection $active={view === "reservas"}>
        <Header>
          <BackButton onClick={() => switchView("main")}>
            <Icon name="arrow-left" size="2rem" />
          </BackButton>
          <HeaderTitle>Mis Reservas</HeaderTitle>
        </Header>

        <Container>
          <Card>
            <div style={{ position: "relative" }}>
              <CardImage src="/img/facha.jpg" alt="Hotel" />
              <Badge $color="#28a745">
                <Icon name="check-circle-fill" size="0.875rem" /> Confirmada
              </Badge>
            </div>
            <CardBody>
              <CardTitle>Casa Andina Select Miraflores</CardTitle>
              <CardSubtitle>Código: RES001</CardSubtitle>

              <DateBox>
                <DateItem>
                  <small>Check-in</small>
                  <span>
                    <Icon name="calendar2" /> 20 Dic
                  </span>
                </DateItem>
                <Icon name="arrow-right" color="#6c757d" />
                <DateItem>
                  <small>Check-out</small>
                  <span>
                    <Icon name="calendar2" /> 25 Dic
                  </span>
                </DateItem>
              </DateBox>

              <PriceBox>
                <small>Total Pagado</small>
                <h5>S/ 1,095</h5>
              </PriceBox>

              <ButtonGroup>
                <Button
                  variant="primary"
                  fullWidth
                  style={{ backgroundColor: "#2962ff", borderColor: "#2962ff" }}
                >
                  Ver Detalles
                </Button>
                <Button as={Link} to="/voucher" variant="primary" fullWidth>
                  <Icon name="download" /> Voucher
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>

          <Card $opacity="0.75">
            <div style={{ position: "relative" }}>
              <CardImage src="/img/f11.jpg" alt="Hotel" $grayscale />
              <Badge $color="#6c757d">Completada</Badge>
            </div>
            <CardBody>
              <CardTitle>Casa Andina Standard</CardTitle>
              <CardSubtitle>Código: RES998 • Hace 2 meses</CardSubtitle>
            </CardBody>
          </Card>
        </Container>
      </ViewSection>

      {/* ===== VIEW PAGOS ===== */}
      <ViewSection $active={view === "pagos"}>
        <Header>
          <BackButton onClick={() => switchView("main")}>
            <Icon name="arrow-left" size="2rem" />
          </BackButton>
          <HeaderTitle>Historial de Pagos</HeaderTitle>
        </Header>

        <Container>
          <GreenCard>
            <small>Total Pagado</small>
            <h1>S/ 2,143</h1>
            <BadgeGroup>
              <WhiteBadge>3 transacciones</WhiteBadge>
              <BorderBadge>
                <Icon name="check-all" /> Todo al día
              </BorderBadge>
            </BadgeGroup>
          </GreenCard>

          <h6 style={{ fontWeight: "bold", marginBottom: "1.5rem" }}>
            Transacciones Recientes
          </h6>

          <TransactionList>
            <Transaction>
              <TransactionIcon $color="#2962ff">
                <Icon name="credit-card-fill" size="2rem" />
              </TransactionIcon>
              <TransactionContent>
                <h6>Casa Andina Select</h6>
                <small>16 Nov 2025 • Visa ****4532</small>
              </TransactionContent>
              <TransactionAmount>
                <span>S/ 1,095</span>
                <small>
                  <Icon name="check" /> Pagado
                </small>
              </TransactionAmount>
            </Transaction>

            <Transaction>
              <TransactionIcon $color="#ffc107">
                <Icon name="credit-card-fill" size="2rem" />
              </TransactionIcon>
              <TransactionContent>
                <h6>Casa Andina Premium</h6>
                <small>01 Nov 2025 • Visa ****4532</small>
              </TransactionContent>
              <TransactionAmount>
                <span>S/ 598</span>
                <small>
                  <Icon name="check" /> Pagado
                </small>
              </TransactionAmount>
            </Transaction>

            <Transaction>
              <TransactionIcon $color="#6c757d">
                <Icon name="credit-card-fill" size="2rem" />
              </TransactionIcon>
              <TransactionContent>
                <h6>Casa Andina Standard</h6>
                <small>25 Oct 2025 • Visa ****4532</small>
              </TransactionContent>
              <TransactionAmount>
                <span>S/ 450</span>
                <small>
                  <Icon name="check" /> Pagado
                </small>
              </TransactionAmount>
            </Transaction>
          </TransactionList>
        </Container>
      </ViewSection>
    </PerfilContainer>
  );
}

export default Perfil;
