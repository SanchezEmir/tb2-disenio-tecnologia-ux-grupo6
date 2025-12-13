import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../../styles/mediaQueries";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";

// Styled Components
const RegisterContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("/img/fondode.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: hidden;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  margin-bottom: 1rem;

  ${media.md} {
    padding-top: 3rem;
  }
`;

const ProfileCircle = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  ${media.md} {
    width: 150px;
    height: 150px;
  }
`;

const EditBadge = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 32px;
  height: 32px;
  background: #e3c167;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const BottomCard = styled.div`
  background-color: white;
  width: 100%;
  max-width: 100%;
  border-top-left-radius: ${(props) => props.theme.radius.xl};
  border-top-right-radius: ${(props) => props.theme.radius.xl};
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.15);

  ${media.md} {
    padding: 2rem 1.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.serif};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-transform: uppercase;
  font-size: 1.3rem;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 0.5rem;

  ${media.md} {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.gray.dark};
  font-style: italic;
  font-size: 0.75rem;
  line-height: 1.4;
  margin-bottom: 1.5rem;

  ${media.md} {
    font-size: 0.875rem;
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
    margin-bottom: 1rem;
  }
`;

const Label = styled.label`
  display: block;
  font-style: italic;
  color: ${(props) => props.theme.colors.gray.dark};
  font-size: 0.75rem;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: 0.35rem;

  ${media.md} {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.gray.border};
  border-radius: ${(props) => props.theme.radius.pill};
  font-family: ${(props) => props.theme.fonts.sans};
  font-size: 0.95rem;
  box-shadow: ${(props) => props.theme.shadows.sm};
  transition: all ${(props) => props.theme.transitions.normal};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.1);
    border-color: #80bdff;
  }

  ${media.md} {
    font-size: 1rem;
  }
`;

const InputGroupContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.gray.border};
  border-radius: ${(props) => props.theme.radius.pill};
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadows.sm};
  transition: all ${(props) => props.theme.transitions.normal};

  &:focus-within {
    box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.1);
    border-color: #80bdff;
  }
`;

const InputInGroup = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  outline: none;
  font-family: ${(props) => props.theme.fonts.sans};
  font-size: 0.95rem;

  ${media.md} {
    font-size: 1rem;
  }
`;

const Select = styled.select`
  max-width: 110px;
  padding: 0.75rem;
  border: none;
  background-color: transparent;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 0.95rem;
  outline: none;
  cursor: pointer;

  ${media.md} {
    font-size: 1rem;
  }
`;

const IconWrapper = styled.span`
  padding: 0 0.75rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray.dark};

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }

  ${media.md} {
    padding: 0 1rem;
  }
`;

const Divider = styled.div`
  width: 1px;
  background-color: ${(props) => props.theme.colors.gray.border};
  margin: 5px 0;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 1rem;

  input[type="checkbox"] {
    margin-top: 0.25rem;
    margin-right: 0.5rem;
    border-color: #999;
  }

  label {
    color: ${(props) => props.theme.colors.gray.dark};
    font-style: italic;
    font-size: 0.65rem;
    line-height: 1.2;
  }

  ${media.md} {
    margin-bottom: 1.5rem;

    label {
      font-size: 0.7rem;
    }
  }
`;

const CancelLink = styled(Link)`
  text-align: center;
  display: block;
  color: ${(props) => props.theme.colors.gray.dark};
  text-decoration: underline;
  font-size: 0.8rem;
  font-style: italic;
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }

  ${media.md} {
    font-size: 0.875rem;
    margin-top: 1rem;
  }
`;

// Component
function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    password: "",
    email: "",
    countryCode: "+51",
    phone: "",
    acceptPromotions: false,
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
    // Navegar a home después del registro
    navigate("/home");
  };

  return (
    <RegisterContainer>
      <TopSection>
        <ProfileCircle>
          <Icon name="person-fill" size="4rem" color="white" />
          <EditBadge>
            <Icon name="pencil-fill" size="0.7rem" color="white" />
          </EditBadge>
        </ProfileCircle>
      </TopSection>

      <BottomCard>
        <Title>Crear Nuevo Usuario</Title>
        <Subtitle>
          Eleve su Experiencia.
          <br />
          Regístrese para personalizar cada detalle de su estadía
        </Subtitle>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nombre Completo</Label>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>País</Label>
            <Input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Contraseña</Label>
            <InputGroupContainer>
              <InputInGroup
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{ paddingLeft: "1rem" }}
                required
              />
              <IconWrapper onClick={() => setShowPassword(!showPassword)}>
                <Icon name={showPassword ? "eye-slash" : "eye"} />
              </IconWrapper>
            </InputGroupContainer>
          </FormGroup>

          <FormGroup>
            <Label>Correo electrónico</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Nº Celular</Label>
            <InputGroupContainer>
              <Select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value="+51">🇵🇪 +51</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+34">🇪🇸 +34</option>
              </Select>
              <Divider />
              <InputInGroup
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <IconWrapper>
                <Icon name="telephone" />
              </IconWrapper>
            </InputGroupContainer>
          </FormGroup>

          <CheckboxContainer>
            <input
              type="checkbox"
              id="acceptPromotions"
              name="acceptPromotions"
              checked={formData.acceptPromotions}
              onChange={handleChange}
            />
            <label htmlFor="acceptPromotions">
              Deseo recibir comunicaciones personalizadas, incluida ofertas,
              detalles sobre promociones relacionados de nuestro hotel.
            </label>
          </CheckboxContainer>

          <div style={{ marginBottom: "0.75rem" }}>
            <Button type="submit" variant="primary" fullWidth>
              REGÍSTRATE HOY MISMO
            </Button>
          </div>

          <CancelLink to="/login">Cancelar</CancelLink>
        </Form>
      </BottomCard>
    </RegisterContainer>
  );
}

export default Register;
