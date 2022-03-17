# webpack-sandbox-js

Just roughly following the "Getting Started" section here: https://webpack.js.org/guides/getting-started/

# webpack-sandbox

Just roughly following the "Getting Started" section here: <a href="https://webpack.js.org/guides/getting-started/" target="_new">https://webpack.js.org/guides/getting-started/</a>

## Prep (optional)

1. Updated my `.git/gitconfig` and added my usual command aliases to work quicker with git.

```
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.br branch
```

This doesn't get pushed to the repo, but my aliases are:

```
[alias]
    st = status
    co = checkout
    ci = commit
    br = branch
```

## Pre-flight checks

1. Check if you have `npm` installed, by running the line below, you should get a version number printed to the terminal, eg: "8.1.2"

`npm -v`

2. If you don't have `npm` installed yet, then download it here and follow the steps there to install it: <a href="https://nodejs.org/en/download/" target="_new">https://nodejs.org/en/download/</a>

## Setup - From this repo

**_(see "From Scratch" below)_**

1. `git clone git@github.com:monello/webpack-sandbox.git`
2. `npm install`

## Setup - From Scratch

1. Create a new repo on Github
2. Checkout the repo
   eg. `git clone git@github.com:monello/new-repo-name-goes-here.git`

3. Initialize `npm` - to create the `package.json` file.
   The `-y` flag means "_Yes, set up the `package.json` with default values and don't ask all the set-up questions_"

`npm init -y`


## Commit History Navigation
At the bottom of most commits you will find notes about the code changes made during that commit. I only did this for commits with code changes that progress from the previous commit, so any commits to the README.md don't have notes or navigation.
I manually added page-navigation to the commits that show progress in the form of code-changes as applied by following the course.

Some commits deal with key learning points, these I will try to list below in the "Key Commits" section.

## Key Commits

Comment | Description | Commit Shortcut
| :--- | :--- | :---:
Initial Commit  | Listed here to be able to get to the first commit that starts the pagnation | [:octocat:](https://github.com/monello/webpack-sandbox-js/commit/2856d98af41ebbd2f4ad01a0410c58e60cfd3193)
