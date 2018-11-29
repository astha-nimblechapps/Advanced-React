import * as React from 'react';
import { ValidationStateOptions } from './../../utils/eximUtils';
import './Radio.scss';
export interface Props {
    /**
     * func, Event --> click event
     **/
    onClick?: () => void;
    /**
     * boolean, Disables radio
     * @default false
     **/
    disabled?: boolean;
    /**
     * boolean, Radio hovered
     * @default false
     **/
    hovered?: boolean;
    /**
     * boolean, Render radio inline
     * @default false
     **/
    inline?: boolean;
    /**
     * string, title for Radio
     * @default ''
     **/
    title?: string;
    /**
     * string, validationState
     * options include: 'success' | 'warning' | 'error'
     */
    validationState?: ValidationStateOptions;
    /**
     * Attaches a ref to the `<input>` element. Only functions can be used here.
     *
     * ```js
     * <Radio inputRef={ref => { this.input = ref; }} />
     * ```
     */
    inputRef?: () => void;
    /**
     * string, name to group elements
     */
    name?: string;
    /**
     * boolean, Radio checked state
     * @default false
     **/
    checked?: boolean;
    /**
     * string, custom class prefix for css
     * @default radio
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const Radio: React.SFC<Props>;
export default Radio;
