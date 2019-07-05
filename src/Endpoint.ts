// node
import { URL } from 'url';

// npm
import { readJson } from 'fs-extra';

// self
import CorePropPaths from './enums/CorePropPaths';
import { parseEnvs } from './Utils';

export interface ICoreProps {
  address: string;
  encrypted_address: string;
}

export default class Endpoint {
  private baseUrl?: string;
  private host?: string;
  private port?: number;

  constructor(url?: string) {
    if (url) {
      this.baseUrl = url;
    }
  }

  private setBaseUrl(value: string) {
    this.baseUrl = value;
  }

  public getBaseUrl(): string | undefined {
    return this.baseUrl;
  }

  private setHost(value: string) {
    this.host = value;
  }

  public getHost(): string | undefined {
    return this.host;
  }

  private setPort(value: number) {
    this.port = value;
  }

  public getPort(): number | undefined {
    return this.port;
  }

  public discoverUrl(): Promise<void> {
    return new Promise((resolve, reject) => {
      let path;

      if (process.platform === 'darwin') {
        path = parseEnvs(CorePropPaths.OSX);
      } else {
        path = parseEnvs(CorePropPaths.WINDOWS);
      }

      readJson(path)
        .then((coreProps: ICoreProps) => {
          const url = new URL(`http://${coreProps.address}`);

          this.setHost(url.host);
          this.setPort(Number(url.port));
          this.setBaseUrl(url.toString());

          resolve();
        })
        .catch(reject);
    });
  }
}
