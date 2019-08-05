import React, { Suspense } from 'react';


export const withSuspense = (WrappedComponent, LoaderComponent) => props => (
  <Suspense fallback={LoaderComponent}>
    <WrappedComponent {...props} />
  </Suspense>
);

export const another = () => {};
