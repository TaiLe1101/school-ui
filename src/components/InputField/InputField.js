import FormGroup from '../FormGroup';
import Input from '../Input';
function InputField({ field, form, label, placeholder, type = 'text' }) {
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup
      name={name}
      title={label}
      errorMesage={showError && errors[name]}
    >
      <Input
        invalid={showError && 'invalid'}
        type={type}
        placeholder={placeholder}
        {...field}
      ></Input>
    </FormGroup>
  );
}

export default InputField;
