import * as React from 'react';
import { CalloutPlacementOptions } from './../../utils/eximUtils';
import './Callout.scss';
export interface Props {
    /**
     * string, placement of callout
     * options include:  "left" | "middle" | "right"
     * @default middle
     **/
    placement: CalloutPlacementOptions;
    /**
     * string, id to assign the tooltip
     **/
    id?: string;
    /**
     * string, callout content
     **/
    calloutContent?: any;
    /**
       * string, custom class prefix for css
       * @default callout
       **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export interface State {
    visible: boolean;
}
export declare class Callout extends React.Component<Props, State> {
    static defaultProps: {
        customClass: string;
        placement: string;
    };
    constructor(props: any);
    show: () => void;
    hide: () => void;
    setVisibility: (visible: any) => void;
    handleTouch: () => void;
    assignOutsideTouchHandler: () => void;
    render(): JSX.Element;
}
export default Callout;
