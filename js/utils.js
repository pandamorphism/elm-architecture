export const pipe = (...fns) => val => {
    fns.reduce((acc, fn) => fn(acc), val);
};
export const targetValue = event => event.target.value;
