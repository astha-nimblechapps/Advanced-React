import * as React from 'react';
export interface ListSectionProps {
    /**
     * boolean, list section type primary
     * @default true
     **/
    primary?: boolean;
    /**
     * boolean, list section type secondary
     * @default true
     **/
    secondary?: boolean;
    /**
     * string, custom class prefix for css
     * @default list-section
     **/
    customClass?: string;
}
export declare const ListSection: React.SFC<ListSectionProps>;
export default ListSection;
