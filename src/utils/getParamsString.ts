export default function getParamsString(params: { [key: string]: string | number }) {
  let result = '';
  if (!Object.keys(params).length) return result;
  for (const paramsKey in params) {
    const paramKeyValue = `${paramsKey}=${params[paramsKey]}`;
    if (result === '') result += `?${paramKeyValue}`;
    else result += `&${paramKeyValue}`;
  }

  return result;
}
