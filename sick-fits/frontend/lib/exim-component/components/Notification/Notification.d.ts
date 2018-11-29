import * as React from 'react';
import './Notification.scss';
export interface Props {
    /**
     * func, Event -->  click event
     **/
    onClick?: () => void;
    /**
     * string, title string
     **/
    title: string;
    /**
     * string, avatar img src
     **/
    avatarImg?: string;
    /**
     * string, avatar img with badge
     **/
    avatarBadge?: string;
    /**
     * string, timestamp string
     **/
    timestamp?: string;
    /**
     * string, custom class prefix for css
     * @default notification
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare class Notification extends React.Component<Props, {}> {
    static defaultProps: {
        customClass: string;
    };
    render(): JSX.Element;
}
export default Notification;
