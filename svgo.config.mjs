export default {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false, // Required for scaling in Tailwind
          cleanupIds: false,    // Prevents breaking gradients/masks
        },
      },
    },
    'removeDimensions', // Forces use of viewBox (better for responsive design)
    'sortAttrs',
  ],
};
