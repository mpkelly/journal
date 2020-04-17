export declare type Procedure = (...args: any[]) => void;
export declare type Options = {
    isImmediate: boolean;
};
export declare function debounce<F extends Procedure>(func: F, waitMilliseconds: number, options?: Options): F;
