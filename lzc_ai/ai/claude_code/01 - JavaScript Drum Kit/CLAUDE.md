# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

JavaScript Drum Kit — a Wes Bos JavaScript30 project. A keyboard-driven drum machine: press keys A-L to trigger drum samples with a CSS transition effect.

## Running the project

No build tools or dependencies. Open `index-FINISHED.html` directly in a browser.

## Architecture

- **`index-START.html`** — starter template with HTML markup and `<audio>` elements but an empty `<script>` tag (the exercise starting point).
- **`index-FINISHED.html`** — completed version with working JavaScript inline.
- **`style.css`** — all styling, including the `.playing` class that scales the key and adds a yellow glow via CSS transitions.

### How it works

Keys (`.key` divs) and `<audio>` elements are linked by `data-key` attributes using keyboard event `keyCode` values (e.g., A = 65, S = 83).

- **`playSound(e)`** — on `keydown`, selects the matching `<audio>` and `.key` by `data-key="${e.keyCode}"`. Resets `audio.currentTime = 0` so rapid presses re-trigger the sound, then adds the `.playing` class for the visual effect.
- **`removeTransition(e)`** — listens for `transitionend` on each `.key` and removes the `.playing` class, filtering for the `transform` property so it only fires once per transition.

### Sound samples

9 WAV files in `sounds/`: boom, clap, hihat, kick, openhat, ride, snare, tink, tom.
