import { Meteor } from "meteor/meteor";

const timeoutMs = 100;
export const debounced = fn => {
  let timeoutId = undefined;

  return () => {
    if (timeoutId) {
      Meteor.clearTimeout(timeoutId);
    }

    timeoutId = Meteor.setTimeout(() => {
      fn();
    }, timeoutMs);
  };
};


export const popAttr = (obj, attribute, defaultValue) => {
  let value = defaultValue;
  if (obj && typeof obj[attribute] != 'undefined') {
    value = obj[attribute];
    delete obj[attribute];
  }
  return value;
}