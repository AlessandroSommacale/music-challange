import styled from 'styled-components';

export const CenterText = styled.div`
  text-align: center;

  p {
    margin: 16px 0 24px 0;
  }

  & > button {
    width: 250px;
    height: 45px;
    border-radius: 24px;
    font-size: 22px;
  }
`;

export const ButtonIcon = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 16px;
  right: 24px;
  cursor: pointer;
`;
