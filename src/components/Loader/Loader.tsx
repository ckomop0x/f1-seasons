import React from 'react';
import styled from 'styled-components';

export default function Loader(): JSX.Element {
  return <LoaderWrapper>Here should be Loader ...</LoaderWrapper>;
}

export const LoaderWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
`;
