/* eslint-disable @typescript-eslint/no-var-requires */
// If a dry run, return as the dependencies will not have been installed
if (process.env.npm_config_dry_run === 'true') {
  return;
}

const isCi = process.env.CI !== undefined;

if (!isCi) {
  require('husky').install();
}
