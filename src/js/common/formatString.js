function stringFormat(str, ...args) {
  return str.replace(/\{(\d+)\}/g, (m, n) => args[n]);
}

export default stringFormat;
