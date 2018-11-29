import * as React from 'react';
import './NavBottom.scss';
export interface Props {
    /**
     * string, custom class prefix for css
     * @default nav-bottom
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const NavBottom: React.SFC<Props>;
export default NavBottom;
