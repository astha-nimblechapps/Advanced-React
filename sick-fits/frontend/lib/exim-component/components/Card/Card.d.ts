import * as React from 'react';
import './Card.scss';
export interface Props {
    /**
     * string, custom class prefix for css
     * @default card
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const Card: React.SFC<Props>;
export default Card;
