import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button/Button';
import { Loading } from '../common/Spinner/Loading';
import { CardViewer } from '../CardViewer';
import { CardNotFound } from '../CardNotFound';
import { useCardDataService } from '../../hooks/useCardDataService';
import { isOverMaxLength } from '../../utils/validator';
import { CARD_ALIAS_SIZE, ERROR } from '../../constants';

export function CardAliasAddForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [cardAlias, setCardAlias] = useState('');
  const { getCard, addAliasToCard } = useCardDataService();

  if (!location.state) return <CardNotFound />;

  const cardId = location.state.cardId;
  const card = getCard(cardId);

  if (!card) return <CardNotFound />;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isOverMaxLength(e.target.value, CARD_ALIAS_SIZE)) alert(ERROR.INVALID_CARD_ALIAS);

    setCardAlias(e.target.value);
  };

  const handleAliasSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) return;

    setIsShowLoading(true);
    addAliasToCard(card.id, e.target.alias.value);
    closeLoading();
  };

  const closeLoading = () => {
    setTimeout(() => {
      setIsShowLoading(false);
      navigate('/');
    }, 5000);
  };

  return isShowLoading ? (
    <Loading />
  ) : (
    <Style.Container>
      <Style.Title>카드등록이 완료되었습니다.</Style.Title>
      <CardViewer card={card} />
      <Style.Form onSubmit={handleAliasSubmit}>
        <Input
          value={cardAlias}
          designType='underline'
          name='alias'
          placeholder='카드 별칭을 입력해주세요.(선택)'
          maxLength={CARD_ALIAS_SIZE}
          autoFocus
          width={'240px'}
          height={'45px'}
          onChange={handleInputChange}
        />
        <Style.AliasLength aria-label='카드 별칭 입력 길이 표시'>
          {cardAlias.length}/{CARD_ALIAS_SIZE}
        </Style.AliasLength>
        <Style.ButtonWrapper>
          <Button designType='text'>확인</Button>
        </Style.ButtonWrapper>
      </Style.Form>
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
  `,

  Title: styled.h1`
    width: 100%;

    margin-top: 70px;
    margin-bottom: 36px;

    font-size: 24px;
    font-weight: 500;
    text-align: center;
    color: var(--grey-700);
  `,

  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    position: relative;
    margin-top: 100px;
  `,

  ButtonWrapper: styled.div`
    display: flex;
    justify-content: flex-end;

    width: 100%;
    margin-top: 250px;
  `,

  AliasLength: styled.span`
    position: absolute;
    top: 15px;
    left: 290px;

    font-size: 12px;
    color: var(--grey-600);
  `,
};
