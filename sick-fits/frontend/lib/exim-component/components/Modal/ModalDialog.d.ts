import * as React from 'react';
export interface ModalDialogProps {
    /**
      * string, custom class prefix for css
      * @default modal-dialog
      **/
    customClass?: string;
}
declare class ModalDialog extends React.Component<ModalDialogProps> {
    static defaultProps: {
        customClass: string;
    };
    render(): JSX.Element;
}
export default ModalDialog;
