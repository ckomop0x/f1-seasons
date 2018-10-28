import styled from 'styled-components';

export const MainContainer = styled.div`
    background: white;
    color: #38383f;
    overflow-x: auto;
    overflow-y: auto;
    flex: 1 auto;
    padding: 16px;
`;

export const YearsSelect = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    h1 {
        margin: 2rem auto;
        text-align: center;
        color: white;
        background: #a70123;
        padding: 0.5rem;
        transform: skew(-7deg);
        text-transform: uppercase;
        margin-left: 1rem;
        
        @media (min-width: 1000px) {
            margin: 2rem 0;
            text-align: left;
        }
    }
    
    /* Reset Select */
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      outline: 0;
      box-shadow: none;
      border: 0 !important;
      background: #a9001e;
      background-image: none;
    }
    /* Custom Select */
    .select {
      position: relative;
      display: block;
      width: 160px;
      height: 3em;
      line-height: 3;
      background: #a9001e;
      overflow: hidden;
      border-radius: .25em;
    }
    
    select {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0 0 0 .5em;
      color: #fff;
      cursor: pointer;
    }
    select::-ms-expand {
      display: none;
    }
    /* Arrow */
    .select::after {
      color: white;
      content: '\\25BC';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      padding: 0 1em;
      background: #a9001e;
      pointer-events: none;
    }
    /* Transition */
    .select:hover::after {
      color: #f39c12;
    }
    .select::after {
      -webkit-transition: .25s all ease;
      -o-transition: .25s all ease;
      transition: .25s all ease;
    }
`;

export const Season = styled.div`
    padding-top: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
`;