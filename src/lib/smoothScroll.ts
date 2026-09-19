'use client';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin);
}

// Height of the fixed navbar (+ a little breathing room) so sections
// don't end up hidden underneath it after scrolling.
const NAVBAR_OFFSET = 90;

/**
 * Smoothly scrolls to a section given its href ("#" or "#about", etc.)
 * using GSAP's ScrollToPlugin, with easing and an offset for the fixed navbar.
 */
export function scrollToSection(href: string) {
  if (typeof window === 'undefined') return;

  // "Home" link just scrolls back to the very top.
  if (href === '#' || href === '') {
    gsap.to(window, {
      duration: 1.1,
      ease: 'power3.inOut',
      scrollTo: { y: 0, autoKill: true },
      overwrite: 'auto',
    });
    return;
  }

  const target = document.querySelector(href);
  if (!target) return;

  gsap.to(window, {
    duration: 1.1,
    ease: 'power3.inOut',
    scrollTo: { y: target, offsetY: NAVBAR_OFFSET, autoKill: true },
    overwrite: 'auto',
  });
}
