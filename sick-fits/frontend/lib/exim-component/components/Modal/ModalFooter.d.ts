import * as React from 'react';
export interface ModalFooterProps {
    /**
     * func, Event --> called when cancel button clicked
     **/
    onCancelClick?: () => void;
    /**
     * func, Event --> called when confirm button clicked
     **/
    onConfirmClick?: () => void;
    /**
     * boolean, show/hide cancel button
     **/
    cancelButton?: boolean;
    /**
     * boolean, show/hide confirm button
     **/
    confirmButton?: boolean;
    /**
      * string, custom class prefix for css
      * @default modal-footer
      **/
    customClass?: string;
}
declare class ModalFooter extends React.Component<ModalFooterProps> {
    static defaultProps: {
        customClass: string;
    };
    render(): JSX.Element;
}
export default ModalFooter;
