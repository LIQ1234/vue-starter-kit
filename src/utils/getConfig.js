let CONFIG = window.CONFIG ? window.CONFIG : process.env;
export function getConfig(k) {
  return CONFIG[k] ?? "";
}
