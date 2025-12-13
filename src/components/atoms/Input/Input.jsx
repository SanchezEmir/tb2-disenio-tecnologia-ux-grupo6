import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 0.625rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.gray.border};
  border-radius: ${(props) => props.theme.radius.md};
  font-family: ${(props) => props.theme.fonts.sans};
  font-size: 1rem;
  transition: all ${(props) => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.black};
    box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.1);
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.gray.dark};
    opacity: 0.6;
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.gray.light};
    cursor: not-allowed;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.625rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.gray.border};
  border-radius: ${(props) => props.theme.radius.md};
  font-family: ${(props) => props.theme.fonts.sans};
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  transition: all ${(props) => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.black};
    box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.gray.light};
    cursor: not-allowed;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray.dark};
  font-style: italic;
`;

export function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  disabled = false,
  ...props
}) {
  return (
    <div>
      {label && <Label htmlFor={name}>{label}</Label>}
      <StyledInput
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
    </div>
  );
}

export function Select({
  label,
  options = [],
  value,
  onChange,
  name,
  disabled = false,
  placeholder = "Seleccionar...",
  ...props
}) {
  return (
    <div>
      {label && <Label htmlFor={name}>{label}</Label>}
      <StyledSelect
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
}

export default Input;
