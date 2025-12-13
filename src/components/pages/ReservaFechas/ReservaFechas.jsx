import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { H4, H5 } from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import Logo from "../../atoms/Logo/Logo";
import Button from "../../atoms/Button/Button";

const ReservaFechasContainer = styled.div`
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
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled(H4)`
  font-weight: bold;
  margin-bottom: 2rem;
`;

const CalendarContainer = styled.div`
  background: linear-gradient(135deg, #f4e5c2, #e6d5b8);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
`;

const MonthTitle = styled(H5)`
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: bold;
`;

const DayCell = styled.div`
  padding: 0.5rem;
  text-align: center;
  border-radius: 8px;
  cursor: ${(props) => (props.isDay ? "pointer" : "default")};
  background-color: ${(props) => {
    if (props.isStart) return "#000";
    if (props.isEnd) return "#000";
    if (props.isRange) return "#333";
    return "transparent";
  }};
  color: ${(props) =>
    props.isStart || props.isEnd || props.isRange ? "white" : "inherit"};

  &:hover {
    background-color: ${(props) =>
      props.isDay && !props.isStart && !props.isEnd && !props.isRange
        ? "#e0e0e0"
        : ""};
  }
`;

const ButtonsContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

function ReservaFechas() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/reserva-habitacion");
  };

  const handleBack = () => {
    navigate("/lima");
  };

  return (
    <ReservaFechasContainer>
      <Header>
        <BackLink to="/lima">
          <Icon name="arrow-left" size="2rem" />
        </BackLink>
        <LogoWrapper>
          <Logo size="30px" />
        </LogoWrapper>
      </Header>

      <ContentContainer>
        <Title>Selecciona las fechas de tu estadía</Title>

        {/* Noviembre 2025 */}
        <CalendarContainer>
          <MonthTitle>Noviembre 2025</MonthTitle>
          <CalendarGrid>
            <DayCell>do</DayCell>
            <DayCell>lu</DayCell>
            <DayCell>ma</DayCell>
            <DayCell>mi</DayCell>
            <DayCell>ju</DayCell>
            <DayCell>vi</DayCell>
            <DayCell>sa</DayCell>
            <DayCell></DayCell>
            <DayCell></DayCell>
            <DayCell></DayCell>
            <DayCell></DayCell>
            <DayCell></DayCell>
            <DayCell></DayCell>
            <DayCell isDay>1</DayCell>
            <DayCell isDay>2</DayCell>
            <DayCell isDay>3</DayCell>
            <DayCell isDay isStart>
              4
            </DayCell>
            <DayCell isDay isRange>
              5
            </DayCell>
            <DayCell isDay isRange>
              6
            </DayCell>
            <DayCell isDay isRange>
              7
            </DayCell>
            <DayCell isDay isEnd>
              8
            </DayCell>
            <DayCell isDay>9</DayCell>
            <DayCell isDay>10</DayCell>
            <DayCell isDay>11</DayCell>
            <DayCell isDay>12</DayCell>
            <DayCell isDay>13</DayCell>
            <DayCell isDay>14</DayCell>
            <DayCell isDay>15</DayCell>
            <DayCell isDay>16</DayCell>
            <DayCell isDay>17</DayCell>
            <DayCell isDay>18</DayCell>
            <DayCell isDay>19</DayCell>
            <DayCell isDay>20</DayCell>
            <DayCell isDay>21</DayCell>
            <DayCell isDay>22</DayCell>
            <DayCell isDay>23</DayCell>
            <DayCell isDay>24</DayCell>
            <DayCell isDay>25</DayCell>
            <DayCell isDay>26</DayCell>
            <DayCell isDay>27</DayCell>
            <DayCell isDay>28</DayCell>
            <DayCell isDay>29</DayCell>
            <DayCell isDay>30</DayCell>
          </CalendarGrid>
        </CalendarContainer>

        {/* Diciembre 2025 */}
        <CalendarContainer>
          <MonthTitle>Diciembre 2025</MonthTitle>
          <CalendarGrid>
            <DayCell>do</DayCell>
            <DayCell>lu</DayCell>
            <DayCell>ma</DayCell>
            <DayCell>mi</DayCell>
            <DayCell>ju</DayCell>
            <DayCell>vi</DayCell>
            <DayCell>sa</DayCell>
            <DayCell></DayCell>
            <DayCell isDay>1</DayCell>
            <DayCell isDay>2</DayCell>
            <DayCell isDay>3</DayCell>
            <DayCell isDay>4</DayCell>
            <DayCell isDay>5</DayCell>
            <DayCell isDay>6</DayCell>
            <DayCell isDay>7</DayCell>
            <DayCell isDay>8</DayCell>
            <DayCell isDay>9</DayCell>
            <DayCell isDay>10</DayCell>
            <DayCell isDay>11</DayCell>
            <DayCell isDay>12</DayCell>
            <DayCell isDay>13</DayCell>
            <DayCell isDay>14</DayCell>
            <DayCell isDay>15</DayCell>
            <DayCell isDay>16</DayCell>
            <DayCell isDay>17</DayCell>
            <DayCell isDay>18</DayCell>
            <DayCell isDay>19</DayCell>
            <DayCell isDay>20</DayCell>
            <DayCell isDay>21</DayCell>
            <DayCell isDay>22</DayCell>
            <DayCell isDay>23</DayCell>
            <DayCell isDay>24</DayCell>
            <DayCell isDay>25</DayCell>
            <DayCell isDay>26</DayCell>
            <DayCell isDay>27</DayCell>
            <DayCell isDay>28</DayCell>
            <DayCell isDay>29</DayCell>
            <DayCell isDay>30</DayCell>
            <DayCell isDay>31</DayCell>
          </CalendarGrid>
        </CalendarContainer>

        <ButtonsContainer>
          <Button variant="primary" fullWidth onClick={handleNext}>
            Siguiente
          </Button>
          <Button variant="outline" fullWidth onClick={handleBack}>
            Atrás
          </Button>
        </ButtonsContainer>
      </ContentContainer>
    </ReservaFechasContainer>
  );
}

export default ReservaFechas;
