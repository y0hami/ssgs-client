export interface ICoreProps {
    address: string;
    encrypted_address: string;
}
export default class Endpoint {
    private baseUrl?;
    private host?;
    private port?;
    constructor(url?: string);
    private setBaseUrl;
    getBaseUrl(): string | undefined;
    private setHost;
    getHost(): string | undefined;
    private setPort;
    getPort(): number | undefined;
    discoverUrl(): Promise<void>;
}
