const { dependencies } = require("./package.json");

module.exports = {
  name: "bookings",
  filename: "remoteEntry.js",
  remotes: {},
  exposes: {
    "./booking": "./src/MyBookings.tsx",
    "./Confirmation":"./src/Confirmation.tsx",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: "react",
      shareScope: "default",
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    redux: {
      singleton: true,
      requiredVersion: dependencies.redux,
    },
  },
};
