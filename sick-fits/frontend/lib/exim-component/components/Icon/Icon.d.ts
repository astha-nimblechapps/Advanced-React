import * as React from 'react';
import { IconOptions } from './../../utils/eximUtils';
import './Icon.scss';
export interface Props {
    /**
     * String, icon to show
     * options include: 'add' | 'blockmaker' |'chevronLeft' |'close' | 'cycle' |'demotion' |'filte' |'governanceCycle' |'help' |'home' |'listView' |'media' |'members' |'more' |'node' |'notificationBell' |'promotion' |'remove' |'search' |'settings' |'upload' |'user' |'vote' |'arrowDown'
     **/
    for: IconOptions;
    /**
     * string, custom class prefix for css
     * @default icon
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const Icon: React.SFC<Props>;
export default Icon;
