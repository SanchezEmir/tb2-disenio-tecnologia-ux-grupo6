import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../../styles/mediaQueries";
import Icon from "../../atoms/Icon/Icon";
import Button from "../../atoms/Button/Button";
import InputGroup from "../../molecules/InputGroup/InputGroup";

// Styled Components
const LoginContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("/img/mac.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: hidden;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LanguageSelector = styled.div`
  width: 100%;
  text-align: right;
  padding: 0.5rem 1rem;

  ${media.md} {
    padding: 1rem;
  }
`;

const LanguageText = styled.small`
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  display: block;
  margin-bottom: 0.25rem;
  text-shadow: 0px 0px 2px white;
`;

const Flags = styled.div`
  display: inline-block;

  span {
    margin: 0 0.25rem;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity ${(props) => props.theme.transitions.fast};

    &:hover {
      opacity: 1;
    }
  }
`;

const LogoSquare = styled.div`
  width: 120px;
  height: 120px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.theme.shadows.lg};
  margin-top: 0;
  margin-bottom: 1rem;

  img {
    max-width: 80%;
    padding: 0.5rem;
  }

  ${media.md} {
    width: 200px;
    height: 200px;
    margin-top: 1rem;
    margin-bottom: 3rem;

    img {
      padding: 1rem;
    }
  }
`;

const BottomCard = styled.div`
  background-color: white;
  width: 100%;
  max-width: 100%;
  border-top-left-radius: ${(props) => props.theme.radius.xl};
  border-top-right-radius: ${(props) => props.theme.radius.xl};
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.15);
  position: relative;

  ${media.md} {
    padding: 2rem 1.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const LoginTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.serif};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 1.5rem;
  border-bottom: 2px solid #333;
  display: inline-block;
  padding-bottom: 5px;
  margin-bottom: 1rem;

  ${media.md} {
    font-size: ${(props) => props.theme.fontSizes.xl};
    margin-bottom: 2rem;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 100%;

  ${media.md} {
    max-width: 400px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 0.75rem;

  ${media.md} {
    margin-bottom: 1.5rem;
  }
`;

const Label = styled.label`
  display: block;
  font-style: italic;
  color: ${(props) => props.theme.colors.gray.dark};
  font-size: 0.8rem;
  margin-bottom: 0.35rem;

  ${media.md} {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;

  input[type="checkbox"] {
    margin-right: 0.5rem;
  }

  label {
    color: ${(props) => props.theme.colors.gray.dark};
    font-size: 0.875rem;
    margin: 0;
  }

  ${media.md} {
    margin-bottom: 1.5rem;
  }
`;

const LinkText = styled.small`
  text-align: center;
  color: ${(props) => props.theme.colors.gray.dark};
  display: block;
  margin-bottom: 0.75rem;
  font-size: 0.85rem;

  ${media.md} {
    margin-bottom: 2rem;
  }
`;

const StyledLink = styled(Link)`
  color: #17a2b8;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  color: white;
  padding: 0.75rem;
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;

  h4 {
    font-family: ${(props) => props.theme.fonts.serif};
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.9rem;
  }

  small {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.65rem;
  }

  ${media.md} {
    padding: 1.25rem;

    h4 {
      font-size: 1rem;
    }

    small {
      letter-spacing: 3px;
      font-size: 0.7rem;
    }
  }
`;

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    keepSession: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navegar a home (sin validación real ya que es prototipo)
    navigate("/home");
  };

  return (
    <LoginContainer>
      <TopSection>
        <LanguageSelector>
          <div style={{ display: "inline-block", textAlign: "center" }}>
            <LanguageText>
              <Icon name="translate" /> Select language
            </LanguageText>
            <Flags>
              <span role="button">🇪🇸</span>
              <span role="button">🇵🇹</span>
              <span role="button">🇬🇧</span>
            </Flags>
          </div>
        </LanguageSelector>

        <LogoSquare>
          <img src="/img/logo.png" alt="Casa Andina" />
        </LogoSquare>
      </TopSection>

      <BottomCard>
        <LoginTitle>Inicia sesión</LoginTitle>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Correo electrónico</Label>
            <InputGroup
              type="email"
              name="email"
              placeholder="issacvaldez@gmail.com"
              value={formData.email}
              onChange={handleChange}
              icon="person-fill"
            />
          </FormGroup>

          <FormGroup>
            <Label>Contraseña</Label>
            <InputGroup
              type="password"
              name="password"
              placeholder="••••••••••••"
              value={formData.password}
              onChange={handleChange}
              icon="lock-fill"
              showPasswordToggle
            />
          </FormGroup>

          <CheckboxContainer>
            <input
              type="checkbox"
              id="keepSession"
              name="keepSession"
              checked={formData.keepSession}
              onChange={handleChange}
            />
            <label htmlFor="keepSession" style={{ fontStyle: "italic" }}>
              Mantener la sesión iniciada
            </label>
          </CheckboxContainer>

          <div style={{ marginBottom: "0.75rem" }}>
            <Button type="submit" variant="outline" fullWidth>
              INICIAR SESIÓN
            </Button>
          </div>

          <LinkText>
            ¿Todavía no tienes una cuenta?{" "}
            <StyledLink to="/register">Haga clic aquí</StyledLink>
          </LinkText>
        </Form>

        <Footer>
          <h4>CASA ANDINA</h4>
          <small>HOTELES</small>
        </Footer>
      </BottomCard>
    </LoginContainer>
  );
}

export default Login;
