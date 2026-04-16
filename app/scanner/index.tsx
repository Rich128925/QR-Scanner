import { Linking, AppState, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import { CameraView } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import { Overlay } from "./Overlay";

const Index = () => {
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        /inactive|background/.test(appState.current) &&
        nextAppState === "active"
      ) {
        qrLock.current = false;
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={({ data }) => {
          if (data && !qrLock.current) {
            qrLock.current = true;

            setTimeout(async () => {
              try {
                await Linking.openURL(data);
              } catch (error) {
                console.log("Failed to open URL:", error);
                qrLock.current = false;
              }
            }, 500);
          }
        }}
      />
      <Overlay />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});