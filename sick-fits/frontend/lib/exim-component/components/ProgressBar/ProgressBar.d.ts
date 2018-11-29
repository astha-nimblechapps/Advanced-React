import * as React from 'react';
import './ProgressBar.scss';
export interface Props {
    /**
     * number, From 0 to 100, Incdicate how much process has completed.
     **/
    progress: number;
    /**
     * boolean, show process in percentage
     * @default false
     **/
    showPercentage: boolean;
    /**
     * string, caption to show under ProgressBar
     **/
    caption?: string;
    /**
     * string, custom class prefix for css
     * @default progress
     **/
    customClass?: string;
    /**
       * string, class to apply on component
       **/
    className?: string;
}
export declare const ProgressBar: React.SFC<Props>;
export default ProgressBar;
