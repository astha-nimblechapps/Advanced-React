import * as React from 'react';
export interface ListContentProps {
    items?: any[];
    /**
     * string, custom class prefix for css
     * @default list-content
     **/
    customClass?: string;
}
export declare const ListContent: React.SFC<ListContentProps>;
export default ListContent;
