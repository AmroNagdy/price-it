export const keyParameters = parameters => {
  const parametersObject = {}
  parameters.forEach(p => parametersObject[p.name] = p);
  return parametersObject;
};

export const extractParameterValues = keyedParameters => {
  const parameterValues = {};
  Object.entries(keyedParameters).forEach(([parameterName, parameter]) => parameterValues[parameterName] = parameter.value);
  return parameterValues;
};

export const existsNull = parametersArray => parametersArray.some(parameter => parameter === null);