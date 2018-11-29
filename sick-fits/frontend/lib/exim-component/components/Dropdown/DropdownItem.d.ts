import * as React from 'react';
export interface DropdownItemProps {
    /**
      * string, link to navigate on item click
      * @default #
      **/
    link?: string;
    /**
      * string, custom class prefix for css
      * @default dropdown-item
      **/
    customClass?: string;
}
export declare const DropdownItem: React.SFC<DropdownItemProps>;
export default DropdownItem;
