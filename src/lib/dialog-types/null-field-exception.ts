import { BaseException } from "@/src/lib/dialog-types/base-exception";

export class NullFieldException extends BaseException {
    constructor(message: string){
        super(message);

        Object.setPrototypeOf(this, new.target.prototype);
    }
}