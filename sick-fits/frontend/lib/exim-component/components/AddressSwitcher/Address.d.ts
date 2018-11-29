import * as React from 'react';
import './Address.scss';
import { AddressIconOptions } from './../../utils/eximUtils';
export interface Props {
    /**
     * func, Event --> called on address click
     **/
    onClick?: (e: any, data: any) => void;
    /**
     * string, title text
     **/
    title?: string;
    /**
     * string, lable text
     **/
    label?: string;
    /**
     * String, icon to show
     * options include: 'add' | 'blockmaker' |'chevronLeft' |'close' | 'cycle' |'demotion' |'filte' |'governanceCycle' |'help' |'home' |'listView' |'media' |'members' |'more' |'node' |'notificationBell' |'promotion' |'remove' |'search' |'settings' |'upload' |'user' |'vote' |'arrowDown'
     **/
    icon?: AddressIconOptions;
    /**
     * string, custom class prefix for css
     * @default address
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const Address: React.SFC<Props>;
export default Address;
