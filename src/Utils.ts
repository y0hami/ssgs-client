export function parseEnvs(str: string): string {
  return str
    .replace(
      /%([^%]+)%/g,
      (substr: string, match: number) => process.env[match] || '',
    );
}

const con = console;

export function error(...args: [any?, ...any[]]): void {
  con.error.apply(null, args);
}

export function log(...args: [any?, ...any[]]): void {
  con.log.apply(null, args);
}

export function debug(...args: [any?, ...any[]]): void {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    con.debug.apply(null, args);
  }
}
