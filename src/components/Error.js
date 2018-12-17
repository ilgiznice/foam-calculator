export const Error = () => {
  const span = $('<span />', {
    class: 'help-block',
  });

  span.text(
    'Number must be in decimal form, i.e. 12.25 (is equal to 12 and 1/4 inches)',
  );

  return span;
};
