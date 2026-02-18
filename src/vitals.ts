import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

function logDelta({ name, delta, id }) {
  console.log(`${name} matching ID ${id} changed by ${delta}`);
}

onCLS(logDelta);
onINP(logDelta);
onFCP(logDelta);
onLCP(logDelta);
onTTFB(logDelta);
