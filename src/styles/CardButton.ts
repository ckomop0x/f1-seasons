import styled from '@emotion/styled';

const CardButton = styled.button`
  display: block;
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryColor};
  box-shadow: none;
  color: white;
  box-sizing: border-box;
  border: 0;
  cursor: pointer;
  line-height: 1;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.2, 0, 0.05, 1);
  font-size: 1rem;
  letter-spacing: 0.5px;
  font-weight: normal;
  position: relative;
  padding: ${({ theme }) => theme.sizes.grid * 2.5}px;

  :hover {
    background: ${({ theme }) => theme.colors.primaryColorLighten};
  }
`;

export default CardButton;
