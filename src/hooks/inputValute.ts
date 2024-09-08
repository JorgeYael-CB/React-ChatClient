import { useEffect, useState } from "react";

type validations = 'EMAIL' | 'PASSWORD' | 'STRING' | 'PHONE_NUMBER';

interface Props {
  value: string;
  validationType?: validations;
  fieldName: string;
  required?: boolean;
}


const emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex:RegExp = /^\+?\d{1,4}?[-.\s]?(\d{1,3}?[-.\s]?){1,4}$/;

function validatePassword(value: string): Set<string>{
  const errors: Set<string> = new Set();
  const valueMapper = value.trim() || '';

  if( valueMapper.length < 4 ){
    errors.add("Password is too short");
  }

  if( valueMapper.length > 60 ){
    errors.add("Password is too long");
  }

  if( !isNaN(+valueMapper) || valueMapper.indexOf(' ') !== -1 ){
    errors.add("Password is not valid!");
  }

  return errors;
}


export const inputValue = ({ validationType = 'STRING', value, fieldName, required = true }: Props) => {
  const [errors, setErrors] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    let newErrors: Set<string> = new Set();

    if (required && value.trim().length <= 0) {
      newErrors.add(`${fieldName} is required`);
      setErrors(Array.from(newErrors));
      return;
    }

    if (validationType === 'EMAIL' && !emailPattern.test(value)) {
      newErrors.add(`${fieldName} - Email is not valid!`);
    }

    if (validationType === 'PASSWORD') {
      const passValidations:Set<string> = validatePassword(value);
      newErrors = new Set([...newErrors, ...passValidations]);
    }

    if (validationType === 'PHONE_NUMBER' && !phoneRegex.test(value)) {
      newErrors.add(`${fieldName} - Phone number is not valid`);
    }

    if( newErrors.size > 0 ){
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    setErrors(Array.from(newErrors));
  }, [value, validationType, fieldName, required]);

  return {
    errors,
    isValid,
  };
};
