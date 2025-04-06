const { dependencies } = require("./package.json");

module.exports = {
    name: "auth",
    filename: "remoteEntry.js",
    remotes: {},
    exposes: {
        // "./auth": "./src/App",
        "./signIn": "./src/MainComp.tsx",
        "./signUp": "./src/MainComponent.tsx"
    },
    shared: {
        ...dependencies,
        react: {
            singleton: true,
            import: "react",
            shareScope: "default",
            requiredVersion: dependencies.react
        },
        "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"]
        }
    }
}