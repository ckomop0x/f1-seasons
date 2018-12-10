import * as React from 'react';
import {FlagStyled} from './FlagStyles';

export interface FlagProps {
    country: string;
}

const Flag = ({country}: FlagProps) => {
    return (
        <FlagStyled>
            <img src={require(`./flags/${country.toLowerCase()}.svg`) || ''} alt={country} />
        </FlagStyled>
    );
};

export default Flag;
