import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 18px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 48px;
    height: 48px;
  }
`;

export const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border: 4px solid #e5e7eb;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-color-scheme: dark) {
    border-color: #333;
    border-top-color: #60a5fa;
  }
`;

export const ErrorMessage = styled.div`
  background: #fee;
  color: #c33;
  padding: 16px 24px;
  border-radius: 12px;
  text-align: center;
  margin: 48px auto;
  max-width: 600px;

  @media (prefers-color-scheme: dark) {
    background: #2a1a1a;
    color: #ff6b6b;
  }
`;
