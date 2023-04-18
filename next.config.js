const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "yashaKuruvilla",
        mongodb_password: "9xQ6qFn9HPp7FqL1",
        mongodb_dbname: "watchdle",
        mongodb_clustername: "heroes",
      },
    };
  }
};
