const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');
 
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */


// 1. Start from React Native's default Metro config
const defaultConfig = getDefaultConfig();

// 2. Add "mjs" and "cjs" to the list of source extensions so Metro will process those
const sourceExts = [
  ...defaultConfig.resolver.sourceExts,
  'mjs',
  'cjs',
];

// 3. Merge our changes into the default config
// const config = mergeConfig(defaultConfig, {
//   resolver: { sourceExts },
// });


const config = mergeConfig(getDefaultConfig(__dirname), {
  resolver: { sourceExts }
});
module.exports = withNativeWind(config, {input: './global.css'});


// metro.config.js

// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// const { withNativeWind } = require('nativewind/metro');

// module.exports = (async () => {
//   // 1. Start from React Native's default Metro config
//   const defaultConfig = await getDefaultConfig();

//   // 2. Add "mjs" and "cjs" to the list of source extensions so Metro will process those
//   const sourceExts = [
//     ...defaultConfig.resolver.sourceExts,
//     'mjs',
//     'cjs',
//   ];

//   // 3. Merge our changes into the default config
//   const config = mergeConfig(defaultConfig, {
//     resolver: { sourceExts },
//   });

//   // 4. Wrap with NativeWind (keep your existing input/other settings)
//   return withNativeWind(config, { input: './global.css' });
// })();
