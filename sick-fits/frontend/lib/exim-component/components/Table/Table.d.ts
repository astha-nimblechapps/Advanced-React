import * as React from 'react';
import './Table.scss';
export interface IColumns {
    title: React.ReactNode;
    field: string;
}
export interface Props {
    /**
     * array, columns of IColumns
     *
     * IColumns type:
     * [
        {
          title : React.ReactNode
          field : string
        }
       ]
     *
     *
     **/
    columns?: IColumns[];
    /**
     * array, data
     *
     * Data formate:
     * [
        {
          comlumnName1 : value
          comlumnName2 : value
        }
       ]
     *
     *
     **/
    records?: {}[];
    /**
     * string, custom class prefix for css
     * @default table
     **/
    customClass?: string;
    /**
     * string, class to apply on component
     **/
    className?: string;
}
export declare const Table: React.SFC<Props>;
export default Table;
