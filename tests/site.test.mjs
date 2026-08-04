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

test('homepage exposes the responsive semantic shell', () => {
  const home = readPage('index.html');
  const homeStyles = readPage('css/home.css');

  assert.match(home, /href="\.\/css\/home\.css(?:\?[^\"]+)?"/);
  assert.match(home, /<nav class="primary-nav" aria-label="Primary navigation">/);
  assert.match(home, /class="brand-link" href="\.\/index\.html"/);
  assert.match(home, /class="hero-kicker">Choose your platform</);
  assert.match(home, /class="store-panel"/);
  assert.match(home, /<img class="main-img" src="\.\/image\/mainImg\.jpg"/);
  assert.match(homeStyles, /@media \(max-width: 699px\)/);
});

test('standalone privacy policy is linked while the homepage anchor remains', () => {
  const home = readPage('index.html');
  const privacy = readPage('privacy-policy.html');

  assert.match(privacy, /<title>Privacy Policy<\/title>/);
  assert.match(privacy, /<h1>Privacy Policy<\/h1>/);
  assert.match(privacy, /Back to DoviGames/);
  assert.match(privacy, /Information we collect/i);
  assert.match(privacy, /Your privacy rights/i);
  assert.match(privacy, /Data security/i);
  assert.match(home, /class="header-text header-link" href="\.\/privacy-policy\.html">Privacy Policy<\/a>/);
  assert.match(home, /id="privacy"/);
  assert.match(home, /id="section-f_f89f08d6-f158-488c-aec0-05796b42dd1f"/);
});
