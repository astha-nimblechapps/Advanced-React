import * as React from 'react';
import './Button.scss';
export interface Props {
    /**
     * func, Event --> called on buton click
     **/
    onClick?: () => void;
    /**
     * Disables onclick
     * @default false
     **/
    disabled?: boolean;
    /**
     * string, button type one of "button" | "submit" | "reset"
     * @default button
     **/
    type?: string;
    /**
     * boolean, button hover state
     * @default false
     **/
    hovered?: boolean;
    /**
     * string, custom class prefix for css
     * @default btn-small
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const ButtonSmall: React.SFC<Props>;
export default ButtonSmall;
