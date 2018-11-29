import * as React from 'react';
export interface Props {
    /**
     * string, custom class prefix for css
     * @default top-navbar
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const NavTop: React.SFC<Props>;
export default NavTop;
