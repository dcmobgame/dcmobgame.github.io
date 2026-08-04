import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), '..');

function readPage(fileName) {
  return readFileSync(join(repositoryRoot, fileName), 'utf8');
}

test('terms pages expose the required platform contracts', () => {
  const ios = readPage('terms-ios.html');
  const google = readPage('terms-google-play.html');

  assert.match(ios, /<title>Terms of Use<\/title>/);
  assert.match(ios, /Apple Standard EULA/i);
  assert.match(
    ios,
    /https:\/\/www\.apple\.com\/legal\/internet-services\/itunes\/dev\/stdeula\//,
  );
  assert.match(google, /<title>Terms of Use<\/title>/);
  assert.match(google, /Google Play/i);
  assert.doesNotMatch(google, /Apple Standard EULA/i);
});

test('homepage exposes both terms destinations and keeps section navigation', () => {
  const home = readPage('index.html');

  assert.match(home, /href="\.\/terms-ios\.html"/);
  assert.match(home, /href="\.\/terms-google-play\.html"/);
  assert.match(home, />Privacy Policy</);
  assert.match(home, />Contact Us</);
});
