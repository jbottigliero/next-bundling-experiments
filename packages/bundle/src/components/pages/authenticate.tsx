import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useGlobusAuth } from "@globus/react-auth-context";

export default function Authenticate(props: { redirect?: string }) {
  const router = useRouter();
  const auth = useGlobusAuth();
  const instance = auth.authorization;
  /**
   * Attempt to handle the incoming OAuth2 redirect.
   */
  useEffect(() => {
    async function attempt() {
      if (!instance) {
        return;
      }
      /**
       * Attempt to handle incoming OAuth2 redirect.
       */
      await instance.handleCodeRedirect({
        /**
         * We'll handle the redirect ourselves...
         */
        shouldReplace: false,
      });
    }
    attempt();
  }, [instance]);

  /**
   * Once the user is authenticated, refresh the tokens and redirect to the transfer page.
   */
  useEffect(() => {
    async function redirect() {
      if (!instance || !auth.isAuthenticated) {
        return;
      }
      await instance.refreshTokens();
      return router.replace(props.redirect || "/");
    }
    redirect();
  }, [router, instance, auth.isAuthenticated]);

  return (
    <>
      <div>Attempting to validate credentials...</div>
    </>
  );
}
