const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input {...otherProps} />
    </div>
  );
};

export default FormInput;
