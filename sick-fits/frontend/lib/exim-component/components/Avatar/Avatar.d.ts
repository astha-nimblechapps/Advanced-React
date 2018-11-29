import * as React from 'react';
import './Avatar.scss';
export interface Props {
    /**
     * string, Use src prop to display custom avatar image
     **/
    src?: string;
    /**
     * boolean, show badge | string - show badge value
     **/
    badge?: boolean | string;
    /**
     * string, custom class prefix for css
     * @default avatar
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const Avatar: React.SFC<Props>;
export default Avatar;
