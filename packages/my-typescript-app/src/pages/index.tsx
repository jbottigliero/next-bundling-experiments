import "bundle/pages/index.css";
import Home from "bundle/pages/index";

export default function Index() {
  return <>
    <h1>my-typescript-app</h1>
    <code>packages/my-typescript-app/src/pages/index.tsx</code>
    <pre>
      <code>
        {`
        import "bundle/pages/index.css";
        import Home from "bundle/pages/index";

        export default function Index() {
          return <>
            <h1>my-typescript-app</h1>
            <code>packages/my-typescript-app/src/pages/index.tsx</code>
            <pre>
              <code>
                import "bundle/pages/index.css";
                import Home from "bundle/pages/index";
              </code>
            </pre>
            <Home />
          </>
        };`}</code></pre>
    <Home />
  </>
};