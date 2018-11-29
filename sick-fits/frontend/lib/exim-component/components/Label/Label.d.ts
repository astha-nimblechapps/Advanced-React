import * as React from 'react';
import { LabelSizeOptions, LabelColorOptions, LabelStatusOptions } from './../../utils/eximUtils';
import './Label.scss';
export interface Props {
    /**
     * string, color of label
     * options include: "green" | "purple" | "yellow" | "blue" | "red" | "darkNeutral" | "lightNeutral"
     **/
    color?: LabelColorOptions;
    /**
     * string, label for status
     * options includes : "sent" | "pending" | "received"
     * @default false
     **/
    status?: LabelStatusOptions;
    /**
     * string, size of label
     * options include: "big" | "small"
     * @default small
     **/
    size?: LabelSizeOptions;
    /**
     * boolean, outline label
     * @default false
     **/
    outline?: boolean;
    /**
     * string, custom class prefix for css
     * @default label
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const Label: React.SFC<Props>;
export default Label;
