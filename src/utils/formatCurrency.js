export const formatCurrency = value => {
  return (
    'RM' +
    (value ? value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') : 0)
  );
};
