export class BaseException extends Error {
    public readonly name: string;
    public readonly statusCode?: number; // Optional HTTP status code
    public readonly details?: unknown;   // Optional extra error data

    constructor(message: string, statusCode?: number, details?: unknown) {
        super(message);

        // Set the prototype explicitly (important for extending built-ins in TS)
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.details = details;
    }
}