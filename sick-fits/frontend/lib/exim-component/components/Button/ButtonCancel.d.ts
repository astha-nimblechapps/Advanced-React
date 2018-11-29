import * as React from 'react';
import './Button.scss';
export interface Props {
    /**
     * func, Event --> called on buton click
     **/
    onClick?: () => void;
    /**
     * Disables onclick
     * @default false
     **/
    disabled?: boolean;
    /**
     * boolean, button hover state
     * @default false
     **/
    hovered?: boolean;
    /**
     * string, custom class prefix for css
     * @default btn-cancel
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export interface State {
    hovered: boolean;
    className: string;
}
export declare class ButtonCancel extends React.Component<Props, State> {
    static defaultProps: {
        disabled: boolean;
        customClass: string;
        hovered: boolean;
    };
    getClasses(): string;
    onMouseOver(): void;
    onMouseOut(): void;
    constructor(props: any);
    render(): JSX.Element;
}
export default ButtonCancel;
