# Contributing to the Runbook

This is a guide for contributing to the SPM DevOps Runbook.

| Branch | Status |
|:-:|:-:|
| _Master_ | [![Build Status](https://travis.ibm.com/wh-curamspm-devops/containerisation-assets.svg?token=NKvU4jxhcjZxNi7gZ83L&branch=master)](https://pages.github.ibm.com/wh-curamspm-devops/containerisation-assets/) |

## House Rules

### Do's

- **Do** your own lint check before committing.
- **Do** create your branch from the `master` branch to avoid conflicts.
- **Do** use good grammar.
- **Do** provide references to any external source materials.

### Don'ts

- **Do not** creates branches from `gh-pages` branch.
- **Do not** commit directly to `master` or `gh-pages` branches.

## Prerequisites

- NodeJS 8.x
- Markdown-compatible editor

## Setting up

- Install GitBook and MarkdownLint CLI tools:
  - `npm install -g gitbook-cli markdownlint-cli`
- [Install and Setup GitHub Desktop](https://services.github.com/on-demand/github-desktop/install-github-desktop) on your laptop
- [Sign into IBM GitHub Enterprise from GitHub Desktop](https://help.github.com/desktop/guides/getting-started-with-github-desktop/authenticating-to-github/)
- Learn [Markdown Syntax](https://guides.github.com/features/mastering-markdown/) and notice the formatting standards in the existing docs for examples of how we want you to construct a page
- [Clone this repository](https://github.ibm.com/spm-devops/runbook) to your local workstation from the GitHub UI or [use GitHub Desktop](https://services.github.com/on-demand/github-desktop/clone-repository-github-desktop)
- [Create a branch](https://services.github.com/on-demand/github-desktop/create-branches-github-desktop) from the [staging branch](https://github.ibm.com/spm-devops/runbook/tree/master)

## Authoring

- Make the changes locally, and build the static content for previewing:
  - run `gitbook build` OR,
  - run `gitbook serve` to view your changes in your [browser](http://localhost:4000) as soon as you save.
- Check you code for validate formatting
  - run `markdownlint docs`
- Add and push local commits with GitHub Desktop or the `git` command.
- Open a Pull Request when you are ready to merge your changes.