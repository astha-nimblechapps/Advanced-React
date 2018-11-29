import * as React from 'react';
import './AddressSwitcher.scss';
import { AddressIconOptions } from './../../utils/eximUtils';
export interface IAddress {
    title: string;
    label: string;
    icon?: AddressIconOptions;
}
export interface Props {
    /**
     * func, Event --> Address select event
     **/
    onSelect?: (index: any, data: any) => void;
    /**
     * array, array of IAddress
     *
     * IAddress type:
     *  {
     *      title: string,
     *      label: string,
     *      icon?: AddressIconOptions
     *  }
     *
     * AddressIconOptions includes:
     *
     * Icon options include:
     * 'add' | 'blockmaker' |'chevronLeft' |'close' | 'cycle' |'demotion' |'filte' |'governanceCycle' |'help' |'home' |'listView' |'media' |'members' |'more' |'node' |'notificationBell' |'promotion' |'remove' |'search' |'settings' |'upload' |'user' |'vote' |'arrowDown'
     *
     * example :
          [
            {
              title: '0x123456789...',
              label: '12,843.12 EXC',
              icon: 'blockmaker'
            },
              ... ,
            {
              title: '0x123456789...',
              label: '12,843.12 EXC',
              icon: 'blockmaker'
            }
          ]
     **/
    addresses: IAddress[];
    /**
     * string, title for address switcher
     **/
    title?: string;
    /**
     * string, custom class prefix for css
     * @default address-switcher
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export interface State {
    cursor: number;
    address: IAddress;
}
export declare class AddressSwitcher extends React.Component<Props, State> {
    static defaultProps: {
        customClass: string;
    };
    constructor(props: any);
    onUpArrowClick(): void;
    onDownArrowClick(): void;
    onSelect(event: any, data: any): void;
    getContent(): JSX.Element;
    render(): JSX.Element;
}
export default AddressSwitcher;
