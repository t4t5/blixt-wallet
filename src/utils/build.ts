import BuildConfig from "react-native-build-config";
import { PLATFORM } from "./constants";

export const Flavor: string = PLATFORM === "android" ? BuildConfig.FLAVOR_custom : BuildConfig.FLAVOR;
export const Debug: boolean = PLATFORM === "android" ? BuildConfig.DEBUG : BuildConfig.DEBUG === "true";
export const VersionCode: number = PLATFORM === "android" ? BuildConfig.VERSION_CODE : 1;
export const BuildType: string = PLATFORM === "android" ? BuildConfig.BUILD_TYPE : "BuildType";
export const ApplicationId: string = PLATFORM === "android" ? BuildConfig.APPLICATION_ID : BuildConfig.CFBundleIdentifier;
export const VersionName: string = PLATFORM === "android" ? BuildConfig.VERSION_NAME : "";
export const IsHermes: boolean = global.HermesInternal != null;

export const Chain: "mainnet" | "testnet" | "regtest" = BuildConfig.CHAIN;

export const LnBech32Prefix = (Chain === "mainnet" || Chain === "regtest")
  ? "lnbc"
  : "lntb";
