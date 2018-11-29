import * as React from 'react';
import { InputTypeOptions } from './../../utils/eximUtils';
import './Input.scss';
export interface Props {
    /**
      * func, Event --> called on onChange
      **/
    onChange?: (event: any) => void;
    /**
     * string, input value
     **/
    value?: string;
    /**
     * string, name attribute
     **/
    name?: string;
    /**
     * string, define input type
     * options includes - "text" | "password" | "number" | "email" | "select"
     * @default text
     **/
    type: InputTypeOptions;
    /**
     * Attaches a ref to the `<input>` element. Only functions can be used here.
     *
     * ```js
     *  <Search inputRef={ref => { this.input = ref; }} />
     * ```
     */
    inputRef?: () => void;
    /**
     * string, placehoder for input
     **/
    placeholder?: string;
    /**
     * boolean, Disables input
     * @default false
     **/
    disabled?: boolean;
    /**
      * string, custom class prefix for css
      * @default form-control
      **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare class Input extends React.Component<Props> {
    static defaultProps: {
        customClass: string;
        disabled: boolean;
        type: string;
    };
    render(): JSX.Element;
}
export * from './InputGroup';
export * from './InputGroupAddon';
export * from './InputGroupButton';
export * from './InputValidationMessage';
export default Input;
