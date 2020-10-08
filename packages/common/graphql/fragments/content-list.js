const gql = require('graphql-tag');

module.exports = gql`

fragment NewsletterContentListFragment on Content {
  id
  name(input: { mutation: Email })
  primaryImage {
    id
    src
    alt
  }
`;
