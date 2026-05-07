import gulp from "gulp";
import shell from "gulp-shell";

// Builds the app and serves it with Parcel on the default port.
const build = shell.task("npx parcel index.html --dist-dir dist");

// Runs the Mocha unit tests for the shuffle helper.
const test = shell.task("npx mocha test/shuffle.js");

// Runs Cypress specs against an already-running Parcel server.
const e2e = shell.task("npx cypress run");

export default build;
export { test, e2e };
