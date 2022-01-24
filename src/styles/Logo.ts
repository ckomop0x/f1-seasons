import styled from 'styled-components';

const Logo = styled.a`
  text-decoration: none;
  line-height: 32px;
  vertical-align: top;
  display: inline-block;

  img {
    width: ${({ theme }) => theme.grid * 4}px;
    line-height: ${({ theme }) => theme.grid * 4}px;
    vertical-align: top;
    display: inline-block;
  }

  span {
    font-family: ${({ theme }) => theme.secondaryFont};
    color: #ffffff;
    font-weight: bold;
    padding-left: ${({ theme }) => theme.grid * 2}px;
    font-size: 1.75rem;
    line-height: ${({ theme }) => theme.grid * 4}pxpx;
    vertical-align: top;
    display: inline-block;
  }
`;

export default Logo;
