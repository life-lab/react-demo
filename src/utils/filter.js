export const getV = o => (...s) => s.reduce((a, b) => (a ? a[b] : "".u), o);
