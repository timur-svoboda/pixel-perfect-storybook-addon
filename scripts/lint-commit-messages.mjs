#!/usr/bin/env zx

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

// Setup yargs
const argv = yargs(hideBin(process.argv))
  .usage(
    "This script lints the commits of a local branch that are not in the remote repository."
  )
  .options({
    remote: {
      describe: "Name of the remote repository",
      type: "string",
      default: "origin",
      requiresArg: true,
    },
    branch: {
      describe: "Name of a local branch to lint",
      type: "string",
      default: "HEAD",
      requiresArg: true,
    },
  })
  .version(false).argv;

echo("Start linting messages of commits...\n");

// Update the local list of remote branches
await $`git remote update ${argv.remote} --prune`.quiet();

// Turn multiline ProcessOutput.stdout into an array of strings
const stdoutToArray = (stdout) => {
  // Turn into array
  const array = stdout.split("\n");

  // Remove last empty string
  array.pop();

  // Trim array items
  return array.map((item) => item.trim());
};

// Get the SHAs of remote branches
const remoteBranchesProcessOutput =
  await $`git branch --remotes --list "${argv.remote}/*" --format "%(objectname)"`.quiet();
const remoteBranches = stdoutToArray(remoteBranchesProcessOutput.stdout);

// Make excluding revisions
const excludingRevisions = remoteBranches.map((branch) => `^${branch}`);

// Get commits to lint
const commitsToLintProcessOutput =
  await $`git log ${argv.branch} ${excludingRevisions} --format="%H"`.quiet();
const commitsToLint = stdoutToArray(commitsToLintProcessOutput.stdout);

// Lint error messages
const errors = [];

// Lint function
const lint = async (commit) => {
  // Get commit message
  const messageProcessOutput =
    await $`git log --max-count="1" --format="%B" ${commit}`.quiet();
  const message = messageProcessOutput.stdout;

  // Lint commit message
  const lintProcessOutput = await $`echo ${message} | commitlint`
    .quiet()
    .nothrow();
  const lintResult = lintProcessOutput.stdout;

  // If there are lint errors, push error to the array
  if (lintResult.toString() !== "") errors.push(lintResult.toString());
};

// Wait until all lint processes end
await Promise.all(commitsToLint.map((commit) => lint(commit)));

// Inform a user if there are no errors
if (errors.length === 0) {
  echo(chalk.green("All commit messages are ok!"));
} else {
  // Add notification header
  let errorNotification = `${chalk.red("Oops, there are some errors:")}\n`;

  // Add each error message to notification
  errors.forEach(error => errorNotification += error);

  // Throw notification to show it to a user
  throw errorNotification;
}
