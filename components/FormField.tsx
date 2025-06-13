const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  as = "input",
  options = [],
}: FormFieldProps) => {
  const renderInput = () => {
    if (as === "textarea") {
      return (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="input"
        />
      );
    } else if (as === "select") {
      return (
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className="input"
        >
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="input"
        />
      );
    }
  };

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {renderInput()}
    </div>
  );
};

export default FormField;
