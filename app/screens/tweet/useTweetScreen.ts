import React from 'react';

const useTweetScreen = () => {
  const [text, setText] = React.useState<string | undefined>(undefined);

  return { text, setText };
};

export { useTweetScreen };
