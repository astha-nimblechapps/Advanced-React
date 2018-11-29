import * as React from 'react';
import { TypographyOptions } from './../../utils/eximUtils';
import './Typography.scss';
export interface Props {
    /**
     * string, Use to show diffrent Typography
     * options include : 'subtitle' | 'subtitle-small' | 'content' | 'contentSmall' | 'caption' | 'button' | 'buttonSmall' | 'plexMonoReg' | 'plexMonoMed';
     **/
    useFor?: TypographyOptions;
    /*** boolean, h1 tag ***/
    h1?: boolean;
    /*** boolean, h2 tag ***/
    h2?: boolean;
    /*** boolean, h3 tag ***/
    h3?: boolean;
    /*** boolean, h4 tag ***/
    h4?: boolean;
    /*** boolean, h5 tag ***/
    h5?: boolean;
    /*** boolean, h6 tag ***/
    h6?: boolean;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const Typography: React.SFC<Props>;
export default Typography;
