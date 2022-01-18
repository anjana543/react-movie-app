export const debounce = (fn, d) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

export const lowercaseText = (text) => text.toLowerCase();
export const setKeyWithIndex = (name, index) =>
  `${name.replaceAll(" ", "-").toLowerCase()}-${index}`;

export const filterDataByName = (term, array) =>
  array.filter(({ name }) => lowercaseText(name).includes(lowercaseText(term)));
