import * as React from 'react';
import ButtonSmall from './ButtonSmall';
import ButtonCancel from './ButtonCancel';
import ButtonClose from './ButtonClose';
import { ButtonSizeOptions, ButtonTypeOptions } from './../../utils/eximUtils';
import './Button.scss';
export interface Props {
    /**
     * func, Event --> called on buton click
     **/
    onClick?: () => void;
    /**
     * boolean, disables button
     * @default false
     **/
    disabled?: boolean;
    /**
     * boolean, primary button
     * @default false
     **/
    primary?: boolean;
    /**
     * boolean, secondary button
     * @default false
     **/
    secondary?: boolean;
    /**
     * boolean, tertiary button
     * @default false
     **/
    tertiary?: boolean;
    /**
     * boolean, outline button
     * @default false
     **/
    outline?: boolean;
    /**
     * boolean, destructive button
     * @default false
     **/
    destructive?: boolean;
    /**
     * boolean, show loading inside button
     * @default false
     **/
    loader?: boolean;
    /**
      * String, button size options
      * options include: "medium" | "large"
      * @default medium
      **/
    size?: ButtonSizeOptions;
    /**
      * String, button type options
      * options include: "button" | "submit" | "reset"
      * @default button
      **/
    type?: ButtonTypeOptions;
    /**
     * boolean, button hover state
     * @default false
     **/
    hovered?: boolean;
    /**
     * boolean, button idle state
     * @default false
     **/
    idle?: boolean;
    /**
     * boolean, button pressed state
     * @default false
     **/
    pressed?: boolean;
    /**
      * string, custom class prefix for css
      * @default btn
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
    idle: boolean;
    className: string;
}
export declare class Button extends React.Component<Props, State> {
    static defaultProps: {
        disabled: boolean;
        primary: boolean;
        secondary: boolean;
        tertiary: boolean;
        outline: boolean;
        destructive: boolean;
        loader: boolean;
        size: string;
        customClass: string;
        hovered: boolean;
        idle: boolean;
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
export { ButtonSmall, ButtonCancel, ButtonClose };
export default Button;
