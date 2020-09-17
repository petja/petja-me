module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    plugins: [
        require('@tailwindcss/ui'),
    ],
    purge: [
        './src/**/*.html',
        './src/**/*.css',
    ],
}