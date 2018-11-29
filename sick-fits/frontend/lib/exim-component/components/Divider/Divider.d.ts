import * as React from 'react';
import './Divider.scss';
export interface Props {
    /**
     * boolean, primary divider
     * @default false
     **/
    primary?: boolean;
    /**
     * boolean, secondary divider
     * @default false
     **/
    secondary?: boolean;
    /**
     * string, custom class prefix for css
     * @default divider
     **/
    customClass?: string;
}
export declare const Divider: React.SFC<Props>;
export default Divider;
