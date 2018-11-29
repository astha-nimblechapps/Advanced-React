import * as React from 'react';
export interface ModalHeaderProps {
    /**
     * func, Event --> called when close button is clicked
     **/
    onCloseClick?: () => void;
    /**
     * boolean, show(true)/hide(false) close button
     * @default false
     **/
    closeButton?: boolean;
    /**
      * string, custom class prefix for css
      * @default modal-header
      **/
    customClass?: string;
}
declare class ModalHeader extends React.Component<ModalHeaderProps> {
    static defaultProps: {
        customClass: string;
    };
    getChildren(): any[];
    render(): JSX.Element;
}
export default ModalHeader;
