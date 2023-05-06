import type { Meta } from '@storybook/react';
import { useRef, useState } from 'react';
import { SecurityCodeInput } from '../../../components/Input/SecurityCodeInput';

const meta = {
  title: 'Example/Input/CardInput',
  component: SecurityCodeInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SecurityCodeInput>;

export default meta;

export const SecurityCode = () => {
  const securityCodeInputRef = useRef(null);
  const [securityCode, setSecurityCode] = useState('');

  return (
    <SecurityCodeInput
      securityCodeInputRef={securityCodeInputRef}
      securityCode={securityCode}
      setSecurityCode={setSecurityCode}
    />
  );
};
