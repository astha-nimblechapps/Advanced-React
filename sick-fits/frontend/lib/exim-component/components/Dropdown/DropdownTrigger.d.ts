import * as React from 'react';
export interface DropdownTriggerProps {
    onClick?: () => void;
    /**
      * string, custom class prefix for css
      * @default dropdown-trigger
      **/
    customClass?: string;
}
export declare const DropdownTrigger: React.SFC<DropdownTriggerProps>;
export default DropdownTrigger;
