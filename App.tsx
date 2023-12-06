import { HotStateProvider } from 'app/context/hotstate/hotstate.context';
import HotStateNavigator from 'app/navigation/hotStateNavigator';
import { ThemeProvider } from 'app/styles/theme';

function App() {
  return (
    <ThemeProvider>
      <HotStateProvider>
        <HotStateNavigator />
      </HotStateProvider>
    </ThemeProvider>
  );
}

export default App;
