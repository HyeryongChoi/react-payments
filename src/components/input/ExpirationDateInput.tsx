import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { Input } from './Input';
import { InputContainer } from './InputContainer';
import { ExpirationDate } from '../../types';
import { isValidDate } from '../../utils/validator';
import { ERROR, MONTH_SIZE, YEAR_SIZE } from '../../constants';
import { isEmptyInput, isFullInput } from '../../utils';

interface Props {
  monthInputRef: React.RefObject<HTMLInputElement>;
  expirationDate: ExpirationDate;
  setExpirationDate: React.Dispatch<React.SetStateAction<ExpirationDate>>;
  moveFocusToOwnerName: () => void;
}

export function ExpirationDateInput({
  monthInputRef,
  expirationDate,
  setExpirationDate,
  moveFocusToOwnerName,
}: Props) {
  const yearInputRef = useRef<HTMLInputElement>(null);

  const handleBackspacePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && isEmptyInput(expirationDate.year)) {
      e.preventDefault();
      monthInputRef.current?.focus();
    }
  };

  const handleMonthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate({
      ...expirationDate,
      month: e.target.value,
    });

    const month = e.target.value;
    if (isFullInput(month, MONTH_SIZE)) yearInputRef.current?.focus();
  };

  const handleYearInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate({
      ...expirationDate,
      year: e.target.value,
    });
  };

  const validateDate = () => {
    if (!isValidDate(expirationDate.month, expirationDate.year)) {
      alert(ERROR.INVALID_EXPIRATION_DATE);

      setExpirationDate({ month: '', year: '' });

      monthInputRef.current?.focus();
    }
  };

  useEffect(() => {
    if (isFullInput(expirationDate.year, YEAR_SIZE)) moveFocusToOwnerName();
  }, [expirationDate.year]);

  return (
    <>
      <Style.Label htmlFor='expirationDate'>
        <Style.Title>만료일</Style.Title>
      </Style.Label>
      <InputContainer width={'137px'}>
        <Input
          id='expirationDate'
          ref={monthInputRef}
          value={expirationDate.month}
          width={'30px'}
          minLength={MONTH_SIZE}
          maxLength={MONTH_SIZE}
          required
          inputMode='numeric'
          placeholder='MM'
          onChange={handleMonthInputChange}
        />
        <Style.Slash>/</Style.Slash>
        <Input
          ref={yearInputRef}
          value={expirationDate.year}
          width={'30px'}
          minLength={YEAR_SIZE}
          maxLength={YEAR_SIZE}
          required
          inputMode='numeric'
          placeholder='YY'
          onChange={handleYearInputChange}
          onKeyDown={handleBackspacePress}
          onBlur={validateDate}
        />
      </InputContainer>
    </>
  );
}

const Style = {
  Label: styled.label`
    display: flex;
    justify-content: space-between;

    width: 318px;

    font-size: 12px;
  `,

  Title: styled.span`
    color: #2f2f2f;
  `,

  Slash: styled.span`
    padding: 0 5px;
  `,
};
