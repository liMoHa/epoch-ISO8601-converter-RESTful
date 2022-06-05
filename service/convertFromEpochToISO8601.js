const convertFromEpochToISO8601 = (epoch) => {
  const milliSeconds = epoch * 1000;
  const ISO8601String = new Date(milliSeconds).toISOString();
  return ISO8601String;
};

export { convertFromEpochToISO8601 };
