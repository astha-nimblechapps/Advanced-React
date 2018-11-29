import * as React from 'react';
import './Alert.scss';
export interface Props {
    /**
     * boolean, success alert
     **/
    success?: boolean;
    /**
     * boolean, caution alert
     **/
    caution?: boolean;
    /**
     * boolean, error alert
     **/
    error?: boolean;
    /**
     * string, custom class prefix for css
     * @default alert
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const Alert: React.SFC<Props>;
export default Alert;
