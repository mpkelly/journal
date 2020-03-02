type PropagatingType = { stopPropagation(): any };

export const stop = (event: PropagatingType) => event.stopPropagation();

export const dispatchEvent = (type: string, source = window) => {
  var event = new Event(type);
  source.dispatchEvent(event);
};
