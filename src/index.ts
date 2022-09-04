import {ConfigOptions} from "./types";

export default class {
    private readonly isDev: boolean;
    constructor(options: ConfigOptions) {
        this.isDev = options.dev === true;
    }

    public async clear() {
        if(this.isDev)
            console.clear();
    }

    public async debug(...data: any[]) {
        if(this.isDev) {
            console.debug(data);
        }
    }

    public async error(...data: any[]) {
        if(this.isDev) {
            console.error(data);
        }
    }

    public async info(...data: any[]) {
        if(this.isDev) {
            console.info(data);
        }
    }

    public async log(...data: any[]) {
        if(this.isDev) {
            console.log(data);
        }
    }

    public async trace(...data: any[]) {
        if(this.isDev) {
            console.trace(data);
        }
    }

    public async warn(...data: any[]) {
        if(this.isDev) {
            console.warn(data);
        }
    }
}