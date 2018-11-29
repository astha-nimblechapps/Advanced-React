import * as React from 'react';
import './CheckBox.scss';
export interface Props {
    /**
     * func, Event --> called on checkbox click
     **/
    onClick?: () => void;
    /**
     * boolean, Diable checkbox
     * @default false
     **/
    disabled?: boolean;
    /**
     * boolean, CheckBox focused
     * @default false
     **/
    hovered?: boolean;
    /**
     * boolean, Render Inline CheckBox
     * @default false
     **/
    inline?: boolean;
    /**
     * string, title for checkbox
     * @default ''
     **/
    title?: string;
    /**
     * string, validation state of checkbox
     * options include: 'success' | 'warning' | 'error'
     */
    validationState?: string;
    /**
     * Attaches a ref to the `<input>` element. Only functions can be used here.
     *
     * ```js
     * <Checkbox inputRef={ref => { this.input = ref; }} />
     * ```
     */
    inputRef?: () => void;
    /**
     * boolean, Checked box checked state
     * @default false
     **/
    checked?: boolean;
    /**
     * string, name of checkbox
     */
    name?: string;
    /**
     * string, custom class prefix for css
     * @default checkbox
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const CheckBox: React.SFC<Props>;
export default CheckBox;
