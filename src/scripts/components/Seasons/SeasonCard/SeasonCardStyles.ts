import styled from 'styled-components';

export const Card = styled.div`
    width: 100%;
    margin-bottom: 16px;
    border: solid 2px #a70123;
    border-radius: 8px;
    background: white;
    color: black;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
    :hover {
      transition: all 0.5s cubic-bezier(0.2, 0, 0.05, 1);
      box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3);
    }
    @media screen and (min-width: 640px) {
        .seasonCard {
            width: 48%;
        }
    }

    @media screen and (min-width: 1023px) {
        .seasonCard {
            width: 32%;
        }
    }
    .content {
        padding: 8px;
    }
    .title {
        text-align: center;
        color: white;
        background: linear-gradient(322deg, #6f2631 0%, #ed6f4b 44%, #6f2631 100%);
        padding: 16px;
        font-weight: 700;
        font-size: 20px;
    }
`;