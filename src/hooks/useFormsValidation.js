import { useState } from "react";

const useFormsValidation = () => {
  const [inputs, setInputs] = useState({});
  const [isError, setError] = useState({});
  const [messageError, setMessageError] = useState({});
  const [isValidity, setValidity] = useState(false);

  const handleChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    validateInputs(e);
    setValidity(e.target.closest("form").checkValidity());
  };

  const validateInputs = (e) => {
    if (!e.target.validity.valid) {
      setError({
        ...isError,
        [e.target.name]: true,
      });
      setMessageError({
        ...messageError,
        [e.target.name]: e.target.validationMessage,
      });
    } else {
      setError({
        ...isError,
        [e.target.name]: false,
      });
      setMessageError({
        ...messageError,
        [e.target.name]: "",
      });
    }
  };

  return {
    handleChangeInput,
    inputs,
    isError,
    messageError,
    isValidity,
    setInputs,
    setValidity,
  };
};

export default useFormsValidation;
