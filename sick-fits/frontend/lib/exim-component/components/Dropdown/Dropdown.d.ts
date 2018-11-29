import * as React from 'react';
import './Dropdown.scss';
import DropdownTrigger from './DropdownTrigger';
import DropdownContent from './DropdownContent';
import DropdownItem from './DropdownItem';
export interface Props {
    /**
      * func, Event --> called on dropdown hide
      **/
    onHide?: () => void;
    /**
      * func, Event --> called on dropdown show
      **/
    onShow?: () => void;
    /**
     * boolean, disables dropdown
     * @default false
     **/
    disabled?: boolean;
    /**
     * boolean, active show dropdown as active (open)
     * @default false
     **/
    active?: boolean;
    /**
      * string, custom class prefix for css
      * @default dropdown
      **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
interface State {
    active: boolean;
}
export declare class DropdownComponent extends React.Component<Props, State> {
    static defaultProps: {
        customClass: string;
    };
    constructor(props: any);
    isActive(): boolean;
    hide(): void;
    show(): void;
    _onToggleClick(event: any): void;
    handleClickOutside: (evt: any) => void;
    getChildren(active: boolean): any[];
    getClasses(active: boolean): string;
    render(): JSX.Element;
}
export declare const Dropdown: React.ComponentClass<any, React.ComponentState>;
export { DropdownTrigger, DropdownContent, DropdownItem };
export default Dropdown;
