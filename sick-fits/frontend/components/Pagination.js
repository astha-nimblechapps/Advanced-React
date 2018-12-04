import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Head from "next/head";
import Link from "next/link";
import PaginationStyles from "./styles/PaginationStyles";
import { perPage } from "../config";
import { Typography } from "./../lib/exim-component";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      const count = data.itemsConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);
      const page = props.page;
      return (
        <PaginationStyles data-test="pagination">
          <Head>
            <title>
              Sick Fits! — Page {page} of {pages}
            </title>
          </Head>
          <Link
            prefetch
            href={{
              pathname: "items",
              query: { page: page - 1 }
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              <Typography useFor="button">← Prev</Typography>
            </a>
          </Link>
          <Typography useFor="subtitleSmall">
            Page {props.page} of
            <span className="totalPages">{pages}</span>!
          </Typography>
          <Typography useFor="subtitleSmall">{count} Items Total</Typography>
          <Link
            href={{
              pathname: "items",
              query: { page: page + 1 }
            }}
          >
            <a className="next" aria-disabled={page >= pages}>
              <Typography useFor="button">Next →</Typography>
            </a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
);

export default Pagination;
export { PAGINATION_QUERY };
