module.exports = {
  apps: [
    {
      name: "nentang_json_server",
      script: "npm",
      automation: false,
      args: "run start",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    },
  ]
};
