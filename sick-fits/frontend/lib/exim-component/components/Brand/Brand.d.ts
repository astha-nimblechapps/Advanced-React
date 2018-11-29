import * as React from 'react';
import { BrandStyleOptions } from './../../utils/eximUtils';
import './Brand.scss';
export interface Props {
    /**
     * func, Event --> called on brand click
     **/
    onClick?: () => void;
    /**
     * boolean, Show brand as token
     * @default false
     **/
    token?: boolean;
    /**
     * boolean, Show brand as tokenCircle
     * @default false
     **/
    tokenCircle?: boolean;
    /**
     * boolean, Show brand as logo
     * @default false
     **/
    logo?: boolean;
    /**
      * String, define style for brand
      * options include: 'exim' | 'dark' | 'white' | 'blue' | 'black' | 'whiteOnBlue' | 'whiteOnBlack' | 'blueOnWhite' | 'blackOnWhite'
    **/
    style?: BrandStyleOptions;
    /**
     * string, href link if you want nevigate on brand click
     * @default #
     **/
    href?: string;
    /**
     * string, custom class prefix for css
     * @default brand
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const Brand: React.SFC<Props>;
export default Brand;
