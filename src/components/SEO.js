import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const SEO = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Miguel' },
            { name: 'keywords', content: 'Miguel, Neri, Becker' },
          ]}
        >
          <html lang="pt-BR" />
        </Helmet>
      </>
    )}
  />
);

export default SEO;
