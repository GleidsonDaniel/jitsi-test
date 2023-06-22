import { Platform, SafeAreaView, StyleSheet } from "react-native";
import WebView from "react-native-webview";

const uri =
  "https://meet.jit.si/SecularVolumesFreeEverywhere#config.callDisplayName=%22asdas%20dasd%20asd%20asd%20asd%20%22&config.startWithAudioMuted=false&config.startWithVideoMuted=true&userInfo.displayName=%22Daniel%20Silva%22&config.prejoinPageEnabled=false&config.prejoinConfig.enabled=false&config.disableDeepLinking=true";

// to bypass the warning that the browser is not supported
const userAgent =
  Platform.OS === "ios"
    ? "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1"
    : "Mozilla/5.0 (Linux; Android 12; SM-A315G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        style={styles.container}
        source={{ uri: uri.replace(/"/g, "'") }}
        userAgent={userAgent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
