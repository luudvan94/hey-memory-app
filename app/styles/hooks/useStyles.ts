import { useTheme } from '../theme';

const useStyle = (styleCreator) => {
  const theme = useTheme();
  const styles = styleCreator(theme);

  return styles;
};

export { useStyle };
