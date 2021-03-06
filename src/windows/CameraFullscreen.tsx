import React, { useState } from "react";
import { Platform, StatusBar } from "react-native";

import Camera from "../components/Camera";
import BarcodeMask from "../components/BarCodeMask";
import { smallScreen } from "../utils/device";
import { blixtTheme } from "../../native-base-theme/variables/commonColor";
import GoBackIcon from "../components/GoBackIcon";
import { PLATFORM } from "../utils/constants";

type onReadCallback = (address: string) => void;

export default function CameraFullscreen({ navigation, route }: any) {
  const [onReadCalled, setOnReadCalled] = useState(false);
  const onRead: onReadCallback = route.params.onRead ?? (() => {});
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        hidden={false}
        translucent={true}
        networkActivityIndicatorVisible={true}
        barStyle="light-content"
      />
      <Camera
        onRead={(data) => {
          if (!onReadCalled) {
            onRead(data);
            navigation.pop();
            setOnReadCalled(true);
          }
        }}
        onNotAuthorized={() => setTimeout(() => navigation.pop(), 1)}
      >
        <>
          <BarcodeMask
            showAnimatedLine={false}
            edgeColor={blixtTheme.primary}
            width={smallScreen ? 270 : 275}
            height={smallScreen ? 270 : 275}
          />
          {PLATFORM === "ios" &&
            <GoBackIcon />
          }
        </>
      </Camera>
    </>
  );
}
