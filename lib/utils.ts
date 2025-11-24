// ...existing code...

export function getParentDocumentSafe(): Document | null {
  try {
    if (typeof window === 'undefined') return null;
    if (window.parent && window.parent !== window) {
      // Safely detect same-origin by probing parent.location.href.
      // If cross-origin, the following access will throw a DOMException.
      try {
        // eslint-disable-next-line no-unused-expressions
        (window.parent as Window).location.href;
        return (window.parent as Window).document;
      } catch (_err) {
        // Cross-origin: cannot access parent document
        return null;
      }
    }
  } catch (err) {
    // cross-origin access blocked
  }
  return null;
}

export function postToParent(message: any, targetOrigin = '*') {
  try {
    if (
      typeof window !== 'undefined' &&
      window.parent &&
      window.parent !== window
    ) {
      window.parent.postMessage(message, targetOrigin);
    }
  } catch (err) {
    // ignore
  }
}
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
