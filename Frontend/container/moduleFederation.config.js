const { dependencies } = require("./package.json");

module.exports = {
    name: "container",
    filename: "remoteEntry.js",
    remotes: {
        "auth": "auth@http://localhost:3010/remoteEntry.js",
        "bookings": "bookings@http://localhost:3020/remoteEntry.js",
        "packages": "packages@http://localhost:3030/remoteEntry.js"
        // "product": "product@http://localhost:3009/remoteEntry.js"
    },
    exposes: {},
    shared: {
        ...dependencies,
        react: {
            singleton: true,
            import: 'react',
            shareScope: 'default',
            requiredVersion: dependencies.react,
        },
        'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
        },
        redux: {
            singleton: true,
            requiredVersion: dependencies.redux
        }
    }
}