import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import { useTheme } from "./hooks/useTheme";
import { Navigation } from "./navigation";
import Amplify from "aws-amplify";

// @ts-ignore
import config from "./aws-exports";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/store";
import { useStoreActions } from "./store";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  const isLoadingComplete = useCachedResources();
  const { mode } = useTheme();
  const fetchOrCreateUserProfile = useStoreActions(
    (actions) => actions.fetchOrCreateUserProfile
  );
  const fetchBlocks = useStoreActions((actions) => actions.fetchBlocks);
  const [isLoadingDone, setIsLoadingDone] = React.useState(false);

  useEffect(() => {
    async function fetchUserInfo() {
      await fetchOrCreateUserProfile();
      await fetchBlocks();
      setIsLoadingDone(true);
    }
    fetchUserInfo();
  }, []);

  if (!isLoadingComplete && !isLoadingDone) {
    return null;
  } else {
    return <Navigation colorScheme={mode} />;
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
