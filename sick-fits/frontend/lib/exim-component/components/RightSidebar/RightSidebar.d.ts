import * as React from 'react';
export interface Props {
    /**
     * string, custom class prefix for css
     * @default right-sidebar
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const RightSidebar: React.SFC<Props>;
export default RightSidebar;
