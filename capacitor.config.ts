import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {

  // plugins: {
  //   SplashScreen: {
  //     launchShowDuration: 0,
  //     launchAutoHide: true,
  //     launchFadeOutDuration: 0,
  //     backgroundColor: "#fff",
  //     androidSplashResourceName: "splash",
  //     // androidScaleType: "CENTER_CROP",
  //     showSpinner: true,
  //     // androidSpinnerStyle: "large",
  //     // iosSpinnerStyle: "small",
  //     // spinnerColor: "#999999",
  //     splashFullScreen: true,
  //     splashImmersive: true,
  //     // layoutName: "launch_screen",
  //     // useDialog: true,


  //     androidScaleType: 'CENTER_CROP',
  //   },
  // },


  appId: 'com.deliv.app',
  appName: 'deliv',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
