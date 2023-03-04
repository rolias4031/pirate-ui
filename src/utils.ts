const labelRegex = /[A-Z]/;

export function createLabel(
  nameVal: string,
  labelVal: string | null = null,
): string {
  if (labelVal) return labelVal;
  let newLabel = nameVal[0].toUpperCase();
  if (labelRegex.test(nameVal[1])) {
    for (let i = 1; i < nameVal.length; i += 1) {
      newLabel += nameVal[i].toLowerCase();
    }
  } else {
    for (let i = 1; i < nameVal.length; i += 1) {
      const match = labelRegex.test(nameVal[i]);
      if (match) {
        newLabel += ` ${nameVal[i]}`;
      } else {
        newLabel += nameVal[i];
      }
    }
  }
  return newLabel;
}
