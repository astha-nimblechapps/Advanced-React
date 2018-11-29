import * as React from 'react';
import NavItem from './NavItem';
export interface Props {
    /**
     * func, Event --> called nav item selected
     **/
    onSelect?: (e: any, k: any) => void;
    /**
     * boolean, disable nav links.
     * @default false
     **/
    disabled?: boolean;
    /**
     * string, show link with particular key selected
     **/
    selectedKey?: number;
    children?: any;
    /**
     * string, custom class prefix for css
     * @default nav
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
interface State {
    selectedKey: any;
}
export declare class Nav extends React.Component<Props, State> {
    static defaultProps: {
        customClass: string;
        disabled: boolean;
    };
    constructor(props: any);
    onSelect(event: any, key: any): void;
    getClasses(): string;
    getChildren(): any[];
    render(): JSX.Element;
}
export { NavItem };
export default Nav;
