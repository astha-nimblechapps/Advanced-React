import * as React from 'react';
export interface ModalBodyProps {
    /**
      * string, custom class prefix for css
      * @default modal-body
      **/
    customClass?: string;
}
declare class ModalBody extends React.Component<ModalBodyProps> {
    static defaultProps: {
        customClass: string;
    };
    render(): JSX.Element;
}
export default ModalBody;
