import { useState } from 'react';

const useForm = (initialFieldValues) => {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = e => {
    console.log('called');
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    })
    console.log(values);
  }

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange
  }
}

export default useForm;