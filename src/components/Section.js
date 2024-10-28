import styled from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ bgColor }) => bgColor || '#1f1f38'};
  color: #fff;
  font-size: 2rem;
  text-align: center;
`;
