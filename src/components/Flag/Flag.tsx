import styled from 'styled-components';

export interface FlagProps {
  country?: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function Flag({ country, className, width = 32, height = 32 }: FlagProps) {
  return (
    <FlagWrapper
      src={require(`./flags/${country?.toLowerCase().replace(' ', '-')}.svg`).default || ''}
      alt={country}
      className={className}
      width={width}
      height={height}
    />
  );
}

export const FlagWrapper = styled.img<FlagProps>`
  width: ${({ width }) => width ?? '32'}px;
  height: ${({ height }) => height ?? '32'}px;
`;
