import { Suspense } from "react";

import { useLocation } from "react-router-dom";
import { MfeName, MfePort } from "shared-lib/dist/common/constants";
import { CommonMfeProps } from "shared-lib/dist/common/types";
import { useFederatedComp } from "src/hooks/useFederatedComp";

export const Holdings = () => {
  const { pathname } = useLocation();
  const { Component } = useFederatedComp<CommonMfeProps>({
    remoteUrl: `http://localhost:${MfePort.HOLDINGS}/remoteEntry.js`,
    scope: MfeName.HOLDINGS,
    module: "./App",
  });

  return (
    <Suspense fallback={<p>Suspense Loading...</p>}>
      {Component && <Component basePath={pathname} />}
    </Suspense>
  );
};
