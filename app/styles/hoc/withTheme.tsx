import { ThemeProvider } from '../theme';

const withTheme = (Component) => {
  return (props) => (
    <ThemeProvider>
      <Component {...props} />
    </ThemeProvider>
  );
};

export { withTheme };
