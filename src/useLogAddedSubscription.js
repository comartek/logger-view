import { gql, useSubscription } from "@apollo/client";

const COMMENTS_SUBSCRIPTION = gql`
  subscription LogAddedSubscription($key: String!) {
    logAdded(key: $key)
  }
`;

export function useLogAddedSubscription({ key, enabled }) {
  return useSubscription(COMMENTS_SUBSCRIPTION, {
    variables: { key },
    skip: !enabled,
  });
}
