import styled from 'styled-components';

const CardButton = styled.button`
    margin: 24px auto 0;
    display: inline-block;
    background: #a70123;
    box-shadow: none;
    color: #ffffff;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.5s cubic-bezier(0.2, 0, 0.05, 1);
    border: 1px solid #a70123;
    font-size: 13px;
    letter-spacing: 0.5px;
    font-weight: normal;
    position: relative;
    padding: 12px;
    :hover {
      background: white;
      color: #a70123;
    }
`;

export default CardButton;