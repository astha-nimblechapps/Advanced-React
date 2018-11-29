import * as React from 'react';
import { ValidationStateOptions } from './../../utils/eximUtils';
export interface Props {
    /**
     * string, validationState
     * option include : 'success' | 'error' | 'warning'
     **/
    validationState?: ValidationStateOptions;
    /**
     * string, validation Message
     **/
    validationMessage?: string;
    /**
     * string, addon
     **/
    addon?: string;
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
     * @default input-group
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const InputGroup: React.SFC<Props>;
export default InputGroup;
