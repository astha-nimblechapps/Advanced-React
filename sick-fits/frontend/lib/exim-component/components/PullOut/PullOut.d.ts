import * as React from 'react';
export interface Props {
    /**
     * string, custom class prefix for css
     * @default pullout
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const PullOut: React.SFC<Props>;
export default PullOut;
