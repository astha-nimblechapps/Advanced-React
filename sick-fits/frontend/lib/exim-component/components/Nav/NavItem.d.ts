import * as React from 'react';
export interface Props {
    /**
     * func, Event --> called nav item clicked
     **/
    onClick?: () => void;
    /**
      * boolean, indicated its currrent active nav item
      **/
    selected?: boolean;
    /**
      * boolean, disable nav item
      **/
    disabled?: boolean;
    /**
      * string, key to identify nav item
      * @default index for each item in nav
      **/
    key?: any;
    /**
      * string, custom class prefix for css
      * @default nav-item
      **/
    customClass?: string;
}
declare const NavItem: React.SFC<Props>;
export default NavItem;
