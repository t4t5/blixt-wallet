jest.mock("react-native-camera", () => require("./mocks/react-native-camera"));
jest.mock("@react-native-community/async-storage", () => require("./mocks/@react-native-community/async-storage"));
jest.mock("react-native-sqlite-storage", () => require("./mocks/react-native-sqlite-storage"));
jest.mock("react-native-build-config", () => require("./mocks/react-native-build-config"));
jest.mock("react-native-push-notification", () => require("./mocks/react-native-push-notification"));
jest.mock("react-native-keychain", () => require("./mocks/react-native-keychain"));
jest.mock("react-native-securerandom", () => require("./mocks/react-native-securerandom"));
jest.mock("react-native-fingerprint-scanner", () => require("./mocks/react-native-fingerprint-scanner"));
jest.mock("@react-native-community/react-native-clipboard", () => require("./mocks/@react-native-community/react-native-clipboard"));
jest.mock("@react-native-community/masked-view", () => require("./mocks/@react-native-community/masked-view"));
jest.mock("@react-native-community/google-signin", () => require("./mocks/@react-native-community/google-signin"));
jest.mock("react-native-fs", () => require("./mocks/react-native-fs"));
jest.mock("react-native-document-picker", () => require("./mocks/react-native-document-picker"));
jest.mock("@react-native-community/geolocation", () => require("./mocks/@react-native-community/geolocation"));

jest.mock("./src/lndmobile/index", () => require("./mocks/lndmobile/index"));
jest.mock("./src/lndmobile/wallet", () => require("./mocks/lndmobile/wallet"));
jest.mock("./src/lndmobile/channel", () => require("./mocks/lndmobile/channel"));
jest.mock("./src/lndmobile/onchain", () => require("./mocks/lndmobile/onchain"));
jest.mock("./src/lndmobile/autopilot", () => require("./mocks/lndmobile/autopilot"));
jest.mock("./src/lndmobile/scheduled-sync", () => require("./mocks/lndmobile/scheduled-sync"));


// Workaround 0.62 TouchableOpacity displayName causing press event to not trigger
jest.mock('react-native/Libraries/Components/Touchable/TouchableOpacity', () => 'TouchableOpacity');

const ReactNative = require("react-native");
ReactNative.NativeModules.LndMobile = {};
ReactNative.NativeModules.LndMobile.log = jest.fn();