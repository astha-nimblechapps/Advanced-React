import * as React from 'react';
export interface ModalTitleProps {
    /**
      * string, custom class prefix for css
      * @default modal-title
      **/
    customClass?: string;
}
declare class ModalTitle extends React.Component<ModalTitleProps> {
    static defaultProps: {
        customClass: string;
    };
    render(): JSX.Element;
}
export default ModalTitle;
