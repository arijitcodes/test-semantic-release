const { readFileSync } = require("fs");
const { join } = require("path");

module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    // "@semantic-release/release-notes-generator",
    [
      "@semantic-release/release-notes-generator",
      {
        writerOpts: {
          commitPartial: readFileSync(
            join(__dirname, "./configs/commit.hbs"),
            "utf-8"
          ),
        },
      },
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/github",
      {
        assets: {
          path: "./build.tar.gz",
          name: "@arijitcodes-test-semantic-release_v${nextRelease.version}.tgz",
          label: "Build v${nextRelease.version}",
        },
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "docs/CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["docs/CHANGELOG.md", "package*.json"],
      },
    ],
  ],
};
