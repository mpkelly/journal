declare type PropagatingType = {
    stopPropagation(): any;
};
export declare const stop: (event: PropagatingType) => any;
export declare const dispatchEvent: (type: string, source?: Window & typeof globalThis) => void;
export {};
