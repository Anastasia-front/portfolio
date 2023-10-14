export function handleClick(id: string) {
  const targetBlock = document.getElementById(id) as HTMLElement;
  const targetBlockTop = targetBlock.offsetTop;

  window.scrollTo({
    top: targetBlockTop,
    behavior: "smooth",
  });
}
