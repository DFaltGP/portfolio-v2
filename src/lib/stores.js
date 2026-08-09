import { writable } from "svelte/store";

// Tracks which section of the single-page layout is currently in view.
// Written to by the IntersectionObserver set up in +page.svelte,
// read by Nav.svelte and StatusBar.svelte to highlight the active section.
export const activeSection = writable("home");
