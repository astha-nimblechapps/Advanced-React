import * as React from 'react';
import './Search.scss';
export interface Props {
    /**
     * func, Event --> called when search bar's search icon is clicked
     **/
    onSearch?: () => void;
    /**
     * func, Event --> called when search bar's clear icon is clicked
     **/
    onClear?: () => void;
    /**
     * func, Event --> called when search bar's input changes
     **/
    onChange?: (event: any, value: any) => void;
    /**
     * string, search placeholder
     * @default Search text
     **/
    placeholder?: string;
    /**
     * boolean, Disables search bar
     * @default false
     **/
    disabled?: boolean;
    /**
     * Attaches a ref to the `<input>` element. Only functions can be used here.
     *
     * ```js
     *  <Search inputRef={ref => { this.input = ref; }} />
     * ```
     */
    inputRef?: () => void;
    /**
     * string, custom class prefix for css
     * @default search
     **/
    customClass?: string;
    /**
       * string, class to apply on component
       **/
    className?: string;
}
export interface State {
    searchText: '';
}
export declare class Search extends React.Component<Props, State> {
    static defaultProps: {
        placeholder: string;
        customClass: string;
    };
    constructor(props: any);
    onSearchChange(e: any): void;
    onClearClick(e: any): void;
    getClasses(props: Props): string;
    render(): JSX.Element;
}
export default Search;
