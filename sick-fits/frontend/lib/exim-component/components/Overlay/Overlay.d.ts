import * as React from 'react';
import './Overlay.scss';
export interface Props {
    /**
     * string, custom class prefix for css
     * @default overlay
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const Overlay: React.SFC<Props>;
export default Overlay;
