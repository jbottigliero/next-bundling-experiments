import "@/styles/globals.css";

import {
  useGlobusAuth,
  Provider as GlobusAuthorizationManagerProvider,
} from "@globus/react-auth-context";

const redirect = '/';
const client = 'uuid';
const scopes = "urn:globus:auth:scope:transfer.api.globus.org:all";

export default function App({ Component, pageProps }) {
  return (
    <GlobusAuthorizationManagerProvider
    redirect={redirect}
    client={client}
    scopes={scopes}
    storage={null}
    >
      <Component {...pageProps} />
    </GlobusAuthorizationManagerProvider>
);
}
