import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { Navigation } from "./navigation";
import Amplify from "aws-amplify";

// @ts-ignore
import config from "./aws-exports";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
import { StoreProvider } from "easy-peasy";
import { store } from "./store";
import { useStoreActions } from "./store/hooks";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const fetchUserID = useStoreActions((actions) => actions.fetchUserID);
  const fetchBlocks = useStoreActions((actions) => actions.fetchBlocks);
  const [isLoadingDone, setIsLoadingDone] = React.useState(false);

  useEffect(() => {
    fetchUserID().then(() => {
      // @ts-ignore
      fetchBlocks();
      setIsLoadingDone(true);
    });
  }, []);

  if (!isLoadingComplete && !isLoadingDone) {
    return null;
  } else {
    return <Navigation colorScheme={colorScheme} />;
  }
}

const ProviderWrapper = () => {
  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default withAuthenticator(ProviderWrapper);
