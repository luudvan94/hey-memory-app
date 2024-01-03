import React, { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { ActivityIndicator, View } from 'react-native';

import { Text } from 'app/components';

// Add a fallback prop to the WithSuspenseAndErrorBoundaryProps type
type WithSuspenseAndErrorBoundaryProps = {
  fallbackRender: (props: FallbackProps) => React.ReactNode;
  fallback: React.ReactNode;
};

const ErrorBoundaryFallback: React.FC<FallbackProps> = (props) => {
  return (
    <View>
      <Text>Error</Text>
    </View>
  );
};

function withSuspenseAndErrorBoundary(
  Component: React.FC,
  options: WithSuspenseAndErrorBoundaryProps = {
    fallbackRender: ErrorBoundaryFallback,
    fallback: <ActivityIndicator size={'small'} />
  }
) {
  return (props: any) => (
    <ErrorBoundary fallbackRender={options.fallbackRender}>
      <Suspense
        fallback={
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {options.fallback}
          </View>
        }
      >
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default withSuspenseAndErrorBoundary;
