# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- **Breaking:** Drop Node.js 19, 21, 23, and 25 from the declared Node.js engine range.

### Maintenance

- Refresh development and release tooling to shared-config 8.14, VSCE 4.1, and pnpm 12.16.1, and update Node.js typings and pinned workflow actions.
- Adjust pnpm’s ESLint 10 peer-compatibility allowance and remove expired package release-age exemptions.
- Replace the preparation hook and `skills` CLI with pnpm-managed skill installation, and allow deep cleanup to remove local agent configuration.
- Change automated dependency-update pull requests from weekly to monthly.
- Exclude loopback URLs from automated link checks and permit checks with no matching links.

## [1.0.9] - 2026-10-06

### Documentation

- Make the README version badge follow the repository’s default branch.

### Maintenance

- Upgrade contributor tooling to shared-config 8, TypeScript 6, VSCE 4, and pnpm 12; require Node.js `^24.16.0 || >=26.3.0` for development and simplify lint and build configuration.
- Add automated repository Markdown link checks and optional homepage checks on pushes, pull requests, and a weekly schedule.
- Add weekly and manually triggered dependency-update pull requests using the `ksc-update` workflow.
- Synchronize contributor skills automatically during package preparation.
- Rename the contributor cleanup command from `clean` to `clean-deep`.
- Refresh pinned CI, metadata, and release actions, and disable package-manager caching during release builds.

## [1.0.8] - 2026-05-18

### Documentation

- Update the README’s MIT license badge link.

### Maintenance

- Migrate contributor tooling to pnpm 11, consolidate pnpm settings and build approvals in workspace configuration, refresh development dependencies, and require Node.js 22.22.2+ for development.
- Use `pnpm ci` for CI and release installs, update workflow actions, and tighten release validation quoting and token handling.

## [1.0.7] - 2026-04-27

### Documentation

- Replace the README’s Marketplace version badge with one sourced from the repository’s `package.json`.
- Ask contributors to discuss changes in an issue before submitting pull requests, and document linting, formatting, and README-generation tools.

### Maintenance

- Refresh shared configuration, VSIX packaging tools, and pnpm.
- Use `shx` for portable cleanup, remove the lockfile without staging its deletion, and preserve local `.claude` configuration.

## [1.0.6] - 2026-04-07

### Documentation

- Correct the README license link’s filename casing and add a CI status badge.

### Maintenance

- Add build and lint CI on Linux, macOS, and Windows.
- Pin workflow action revisions, restrict token permissions, disable persisted checkout credentials, and tighten release-script handling of action outputs.
- Upgrade to `@kitschpatrol/shared-config` 7 and require Node.js 22.18+ for development.

## [1.0.5] - 2026-03-24

### Maintenance

- Upgrade to `@kitschpatrol/shared-config` 6, refresh development dependencies, switch lint and fix scripts to `ksc`, and require Node.js 20.19+ for development.
- Update GitHub workflow actions and run release builds on Node.js 24.

## [1.0.4] - 2025-12-28

### Changed

- Update the extension icon artwork.

### Maintenance

- Update shared configuration and pnpm, and simplify Knip’s unused-dependency configuration.

## [1.0.3] - 2025-12-08

### Maintenance

- Refresh shared configuration, VSIX packaging and release dependencies, and pnpm.
- Fix pnpm tool hoisting, move build permissions and hoisting settings into workspace configuration, and remove the `eslint-plugin-markdown` override.

## [1.0.2] - 2025-11-04

### Maintenance

- Refresh shared configuration, VSIX packaging and release dependencies, and pnpm.
- Upgrade repository metadata synchronization to the v3 action and simplify its workflow.

## [1.0.1] - 2025-05-31

### Maintenance

- Refresh development and packaging dependencies, including TypeScript 5.8 and pnpm 10.11.
- Correct the GitHub release workflow name to identify the VS Code extension.

## [1.0.0] - 2025-03-02

### Maintenance

- Migrate to `@kitschpatrol/shared-config` 5 and pnpm 10, adopt ESLint flat configuration, Knip, and Stylelint, separate TypeScript build settings, and refresh development dependencies.

## [0.0.2] - 2024-09-19

### Maintenance

- Fix contributor linting by excluding `LICENSE.txt` from ESLint.
- Add editable design files for the extension icon and usage screenshot.

## [0.0.1] - 2024-09-19

### Added

- Add a left-aligned status bar button that appears after startup and opens the current repository in Tower on VS Code 1.93+.
- Install the Open in GitTower companion extension through the extension pack to supply the repository-opening command.

### Documentation

- Document Marketplace and command-palette installation, prerequisites, and usage with a screenshot.

### Maintenance

- Set up TypeScript builds, linting and formatting, VSIX packaging, and GitHub release and metadata workflows.

[Unreleased]: https://github.com/kitschpatrol/vscode-open-in-git-tower-button/compare/v1.0.9...HEAD
[0.0.1]: https://github.com/kitschpatrol/vscode-open-in-git-tower-button/releases/tag/v0.0.1
[0.0.2]: https://github.com/kitschpatrol/vscode-open-in-git-tower-button/compare/v0.0.1...v0.0.2
[1.0.0]: https://github.com/kitschpatrol/vscode-open-in-git-tower-button/compare/v0.0.2...v1.0.0
[1.0.1]: https://github.com/kitschpatrol/vscode-open-in-git-tower-button/compare/v1.0.0...v1.0.1
[1.0.2]: https://github.com/kitschpatrol/vscode-open-in-git-tower-button/compare/v1.0.1...v1.0.2
[1.0.3]: https://github.com/kitschpatrol/vscode-open-in-git-tower-button/compare/v1.0.2...v1.0.3
[1.0.4]: https://github.com/kitschpatrol/vscode-open-in-git-tower-button/compare/v1.0.3...v1.0.4
[1.0.5]: https://github.com/kitschpatrol/vscode-open-in-git-tower-button/compare/v1.0.4...v1.0.5
[1.0.6]: https://github.com/kitschpatrol/vscode-open-in-git-tower-button/compare/v1.0.5...v1.0.6
[1.0.7]: https://github.com/kitschpatrol/vscode-open-in-git-tower-button/compare/v1.0.6...v1.0.7
[1.0.8]: https://github.com/kitschpatrol/vscode-open-in-git-tower-button/compare/v1.0.7...v1.0.8
[1.0.9]: https://github.com/kitschpatrol/vscode-open-in-git-tower-button/compare/v1.0.8...v1.0.9
