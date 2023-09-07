export function addToHtml(target, elements) {
  target.append(...elements);
}

export function doStuff(func) {
  console.log("inside doStuff function");
  func();
}
