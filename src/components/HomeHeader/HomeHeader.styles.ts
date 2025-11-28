import styled from 'styled-components';

export const Header = styled.header`
  background: transparent;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (prefers-color-scheme: dark) {
    background: transparent;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 24px;
  position: relative;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 32px 48px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: fit-content;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const Subtitle = styled.p`
  margin: 8px 0 0 0;
  color: #666;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
`;
