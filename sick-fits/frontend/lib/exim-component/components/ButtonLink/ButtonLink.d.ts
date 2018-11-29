import * as React from 'react';
import './ButtonLink.scss';
export interface Props {
    /**
     * func, Event --> called on buton link click
     **/
    onClick?: () => void;
    /**
     * boolean, Disble ButtonLink
     * @default false
     **/
    disabled?: boolean;
    /**
     * string, href link
     * @default #
     **/
    href?: string;
    /**
     * boolean, Show as link type
     * @default false
     **/
    link?: boolean;
    /**
     * boolean, Show as plain link
     * @default false
     **/
    plain?: boolean;
    /**
     * boolean, Show as address link
     * @default false
     **/
    address?: boolean;
    /**
     * boolean, link pressed
     * @default false
     **/
    pressed?: boolean;
    /**
     * boolean, link hovered
     * @default false
     **/
    hovered?: boolean;
    /**
     * boolean, link idle
     * @default false
     **/
    idle?: boolean;
    /**
     * string, custom class prefix for css
     * @default anchor
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const ButtonLink: React.SFC<Props>;
export default ButtonLink;
