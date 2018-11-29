import * as React from 'react';
import ModalDialog from './ModalDialog';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import { ModalSizeOptions } from './../../utils/eximUtils';
import './Modal.scss';
export interface Props {
    /**
     * func, Event --> called when modal hide
     **/
    onHide?: () => void;
    /**
     * ReactNode, custom element
     **/
    backdrop?: React.ReactNode;
    /**
     * boolean, whether to close modal on outside click
     * @default true
     **/
    closeOnOutsideClick?: boolean;
    /**
     * boolean, When true The modal will show itself.
     * @default false
     **/
    show: boolean;
    /**
     * string, modal size on of "small" | "medium" | "large"
     * @default medium
     **/
    size?: ModalSizeOptions;
    /**
      * string, custom class prefix for css
      * @default modal
      **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export interface State {
    show?: boolean;
}
export declare class Modal extends React.Component<Props, State> {
    static Dialog: typeof ModalDialog;
    static Header: typeof ModalHeader;
    static Title: typeof ModalTitle;
    static Body: typeof ModalBody;
    static Footer: typeof ModalFooter;
    static defaultProps: {
        customClass: string;
        size: string;
        closeOnOutsideClick: boolean;
    };
    constructor(props: any);
    hideModal(): void;
    onBackdropClick(event: any): void;
    onCloseClick(event: any): void;
    getClasses(): string;
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    escFunction(event: any): void;
    getChildren(): any[];
    render(): JSX.Element;
}
export default Modal;
