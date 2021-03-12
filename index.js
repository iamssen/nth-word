#!/usr/bin/env node

const argv = process.argv.slice(2);

console.log(
  argv
    .map((word, i) => `${(i + 1).toString().padStart(2, '0')}: ${word.padEnd(10, ' ')}`)
    .reduce((group, text, i) => {
      group[Math.floor(i / 5)] += text;
      return group;
    }, Array(Math.ceil(argv.length / 5)).fill(''))
    .join('\n')
);