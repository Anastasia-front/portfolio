export function scramble(element: HTMLElement | null, text: string): void {
  if (!element) return;

  const randomChar = (): string =>
    String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33);

  const totalChars = text.length;
  let currentText = Array.from({ length: totalChars }, () => randomChar()).join(
    ""
  );
  let indicesRevealed = 0;

  function animate(): void {
    if (indicesRevealed > totalChars) return;

    currentText = currentText
      .split("")
      .map((_, i) => (i < indicesRevealed ? text[i] : randomChar()))
      .join("");

    if (element) element.textContent = currentText;

    if (indicesRevealed < totalChars) {
      indicesRevealed++;
      setTimeout(animate, Math.random() * 200 + 50);
    }
  }

  animate();
}
