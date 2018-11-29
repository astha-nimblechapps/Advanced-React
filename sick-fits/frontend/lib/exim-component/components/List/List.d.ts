import * as React from 'react';
import './List.scss';
export interface Props {
    /**
     * any, array of list items
     **/
    items: any[];
    /**
     * string, custom class prefix for css
     * @default list
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare class List extends React.Component<Props, {}> {
    static Section: React.StatelessComponent<import("components/List/ListSection").ListSectionProps>;
    static Content: React.StatelessComponent<import("components/List/ListContent").ListContentProps>;
    static Item: React.StatelessComponent<import("components/List/ListItem").ListItemProps>;
    static defaultProps: {
        customClass: string;
    };
    getChildren(): React.SFCElement<{
        customClass: string;
    }>[];
    getClasses(): string;
    render(): JSX.Element;
}
export default List;
