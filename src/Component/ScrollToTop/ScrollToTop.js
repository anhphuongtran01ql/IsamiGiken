export function handleClickToTop(navigate, path) {
  return function (event) {
    event.preventDefault();
    navigate(path);
    window.scrollTo(0, 0);
  };
}
