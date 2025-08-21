const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = mergeConfig(getDefaultConfig(__dirname), {
  resolver: {
    sourceExts: ["js", "jsx", "ts", "tsx", "json"],
  },
});

module.exports = withNativeWind(config, { input: "./global.css" });



// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// const { withNativeWind } = require("nativewind/metro");

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('@react-native/metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);
// // module.exports = withNativeWind(config, { input: "./global.css" });
// module.exports = withNativeWind(config, { input: "./global.css" });
