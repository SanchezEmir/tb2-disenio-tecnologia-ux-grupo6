import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../../styles/mediaQueries";
import Logo from "../../atoms/Logo/Logo";
import Icon from "../../atoms/Icon/Icon";
import Button from "../../atoms/Button/Button";

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.gray.light};
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.black};
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${(props) => props.theme.shadows.sm};
`;

const MenuIcon = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Spacer = styled.div`
  width: 2rem;
`;

const MobileMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isOpen ? "0" : "-100%")};
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background: white;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease;
  z-index: 1000;
  padding: 2rem 1.5rem;
`;

const MenuOverlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  color: #000;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 1.5rem;
`;

const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #000;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;

  &:hover {
    color: #333;
  }
`;

const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 350px;
  background-image: url("/img/ban.png");
  background-size: cover;
  background-position: center;
  background-color: #000;
  color: white;

  ${media.md} {
    min-height: 450px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const HeroTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.serif};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 1.8rem;
  text-shadow: 2px 2px 4px black;
  margin: 0;
  line-height: 1.3;

  ${media.md} {
    font-size: 2.5rem;
  }
`;

const Container = styled.div`
  padding: 1.5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;

  ${media.md} {
    padding: 2rem 1.5rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.gray.dark};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  ${media.md} {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
`;

const StatCard = styled.div`
  background: white;
  padding: 1rem 0.5rem;
  border-radius: ${(props) => props.theme.radius.md};
  box-shadow: ${(props) => props.theme.shadows.sm};
  text-align: center;
  height: 100%;

  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: ${(props) => props.theme.radius.sm};
    margin-bottom: 0.5rem;
  }

  h5 {
    font-weight: ${(props) => props.theme.fontWeights.bold};
    margin-bottom: 0;
    font-size: 1.25rem;
  }

  small {
    color: ${(props) => props.theme.colors.gray.dark};
    font-size: 0.8rem;
  }
`;

const Divider = styled.hr`
  margin: 1.5rem 0;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  ${media.md} {
    margin: 2rem 0;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeatureCard = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadows.sm};
  height: 100%;
  min-height: 150px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FeatureOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;

  h5 {
    font-family: ${(props) => props.theme.fonts.serif};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    opacity: 0.9;
    margin: 0;
  }
`;

const PromoCard = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  color: white;
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.shadows.sm};
  padding: 1rem;
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 150px;
`;

const PromoDiscount = styled.div`
  text-align: center;
  border-right: 1px solid ${(props) => props.theme.colors.gray.dark};
  padding-right: 1rem;
  margin-right: 1rem;

  h2 {
    font-size: 3rem;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.gold};
    margin: 0;
    line-height: 1;
  }

  small {
    text-transform: uppercase;
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;

const PromoContent = styled.div`
  flex: 1;

  h5 {
    font-family: ${(props) => props.theme.fonts.serif};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.gray.dark};
    margin: 0;
  }
`;

const SectionTitle = styled.h5`
  font-family: ${(props) => props.theme.fonts.serif};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  margin: 1.5rem 0 1rem;
  font-size: 1.25rem;

  ${media.md} {
    font-size: 1.5rem;
    margin: 2rem 0 1.5rem;
  }
`;

const HotelTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  color: white;
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeights.bold};

  ${media.md} {
    gap: 1rem;
  }
`;

const HotelTypeCard = styled.div`
  padding: 1rem 0.5rem;
  border-radius: ${(props) => props.theme.radius.md};
  box-shadow: ${(props) => props.theme.shadows.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 0.75rem;

  i {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  ${media.md} {
    height: 120px;
    font-size: 0.875rem;

    i {
      font-size: 1.5rem;
    }
  }
`;

const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.black};
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 2rem;
  border-top: 1px solid ${(props) => props.theme.colors.gray.dark};

  ${media.md} {
    padding: 1.5rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 1rem;
  color: ${(props) => props.theme.colors.gray.dark};
  gap: 1rem;

  span {
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
`;

// Component
function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <PageContainer>
      <MenuOverlay $isOpen={menuOpen} onClick={closeMenu} />
      <MobileMenu $isOpen={menuOpen}>
        <MenuHeader>
          <h3 style={{ margin: 0 }}>Menú</h3>
          <CloseButton onClick={closeMenu}>
            <Icon name="x" size="1.5rem" />
          </CloseButton>
        </MenuHeader>
        <MenuList>
          <MenuItem>
            <MenuLink to="/perfil" onClick={closeMenu}>
              <Icon name="person-circle" size="1.25rem" />
              Mi Perfil
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/destinos" onClick={closeMenu}>
              <Icon name="geo-alt-fill" size="1.25rem" />
              Destinos
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/perfil?view=reservas" onClick={closeMenu}>
              <Icon name="calendar-check-fill" size="1.25rem" />
              Mis Reservas
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/recojo" onClick={closeMenu}>
              <Icon name="car-front-fill" size="1.25rem" />
              Solicitar Recojo
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/login" onClick={closeMenu}>
              <Icon name="box-arrow-right" size="1.25rem" />
              Cerrar Sesión
            </MenuLink>
          </MenuItem>
        </MenuList>
      </MobileMenu>

      <Header>
        <button
          onClick={toggleMenu}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <Icon name="list" size="1.5rem" color="white" />
        </button>
        <Logo height="30px" />
        <Spacer />
      </Header>

      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>
            Bienvenido a tu
            <br />
            próximo destino
          </HeroTitle>
          <Link to="/destinos">
            <Button variant="primary">Reserva ahora</Button>
          </Link>
        </HeroContent>
      </HeroSection>

      <Container>
        <Subtitle>Conoce todo lo que Casa Andina tiene para ti</Subtitle>

        <StatsGrid>
          <StatCard>
            <img src="/img/ban2.png" alt="Hoteles" />
            <h5>47</h5>
            <small>Hoteles</small>
          </StatCard>
          <StatCard>
            <img src="/img/ban3.png" alt="Destinos" />
            <h5>34</h5>
            <small>Destinos</small>
          </StatCard>
          <StatCard>
            <img src="/img/ban4.jpg" alt="Restaurantes" />
            <h5>30</h5>
            <small>Restaurantes</small>
          </StatCard>
          <StatCard>
            <img src="/img/ban5.jpg" alt="Eventos" />
            <h5>69</h5>
            <small>Salas de Eventos</small>
          </StatCard>
        </StatsGrid>

        <Divider />

        <FeaturesGrid>
          <FeatureCard>
            <img src="/img/exx.jpg" alt="Eventos Exclusivos" />
            <FeatureOverlay>
              <h5>Eventos Exclusivos</h5>
              <p>
                Participe en eventos únicos diseñados para nuestra clientela.
              </p>
            </FeatureOverlay>
          </FeatureCard>

          <PromoCard>
            <PromoDiscount>
              <h2>45%</h2>
              <small>dto.</small>
            </PromoDiscount>
            <PromoContent>
              <h5>Descuentos Especiales</h5>
              <p>Aproveche nuestros descuentos para estancias largas.</p>
            </PromoContent>
          </PromoCard>
        </FeaturesGrid>

        <SectionTitle>Tipos de hoteles en Perú</SectionTitle>

        <HotelTypesGrid>
          <HotelTypeCard style={{ backgroundColor: "#001f3f" }}>
            <Icon name="building" />
            Premium
          </HotelTypeCard>
          <HotelTypeCard style={{ backgroundColor: "#008080" }}>
            <Icon name="star" />
            Select
          </HotelTypeCard>
          <HotelTypeCard style={{ backgroundColor: "#ff4500" }}>
            <Icon name="house" />
            Standard
          </HotelTypeCard>
          <HotelTypeCard style={{ backgroundColor: "#6f42c1" }}>
            <Icon name="geo-alt" />
            Centro
          </HotelTypeCard>
        </HotelTypesGrid>
      </Container>

      <Footer>
        <FooterLinks>
          <span>Términos y condiciones</span>
          <span>Política de Privacidad</span>
        </FooterLinks>
      </Footer>
    </PageContainer>
  );
}

export default Home;
