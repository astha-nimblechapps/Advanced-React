import * as React from 'react';
import { ButtonGroupSizeOptions } from './../../utils/eximUtils';
import './ButtonGroup.scss';
export interface Props {
    /**
     * boolean, Vertical stacked button group
     * @default false
     **/
    vertical?: boolean;
    /**
     * boolean, Justify button group
     * @default false
     **/
    justified?: boolean;
    /**
     * boolean, Block buttons, Only when used with vertical stacked group
     * @default false
     **/
    block?: boolean;
    /**
     * String, define size for button
     * options include: 'small' | 'medium' | 'large'
     * @default medium
     **/
    size?: ButtonGroupSizeOptions;
    /**
     * boolean, button group disabled state
     * @default false
     **/
    disabled?: boolean;
    /**
     * boolean, button group selected state
     * @default false
     **/
    selected?: boolean;
    /**
     * string, custom class prefix for css
     * @default btn-group
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const ButtonGroup: React.SFC<Props>;
export default ButtonGroup;
