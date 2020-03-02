export type Procedure = (...args: any[]) => void;

export type Options = {
  isImmediate: boolean;
};

let timeoutId: ReturnType<typeof setTimeout> | undefined;

export function debounce<F extends Procedure>(
  func: F,
  waitMilliseconds: number,
  options: Options = {
    isImmediate: false
  }
): F {
  return function(this: any, ...args: any[]) {
    const context = this;

    const doLater = function() {
      timeoutId = undefined;
      if (!options.isImmediate) {
        func.apply(context, args);
      }
    };

    const shouldCallNow = options.isImmediate && timeoutId === undefined;

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(doLater, waitMilliseconds);

    if (shouldCallNow) {
      func.apply(context, args);
    }
  } as any;
}
