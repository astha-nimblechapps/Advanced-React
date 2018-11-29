import * as React from 'react';
export interface ListItemProps {
    /**
     * string, custom class prefix for css
     * @default list-item
     **/
    customClass?: string;
}
export declare const ListItem: React.SFC<ListItemProps>;
export default ListItem;
