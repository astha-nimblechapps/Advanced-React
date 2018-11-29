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
     * boolean, button pressed state
     * @default false
     **/
    pressed?: boolean;
    /**
      * string, custom class prefix for css
      * @default btn-close
      **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export interface State {
    hovered: boolean;
    pressed: boolean;
    className: string;
}
export declare class ButtonClose extends React.Component<Props, State> {
    static defaultProps: {
        disabled: boolean;
        customClass: string;
        hovered: boolean;
        pressed: boolean;
    };
    getClasses(): string;
    onMouseOver(): void;
    onMouseOut(): void;
    onMouseDown(): void;
    onMouseUp(): void;
    constructor(props: any);
    render(): JSX.Element;
}
export default ButtonClose;
