export const wave = (element: HTMLElement | null, text: string): void => {
  if (!element) return;

  const createLetterElements = (
    char: string,
    index: number,
    delay: number
  ): HTMLSpanElement => {
    const span = document.createElement("span");
    span.className = "wave";
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${delay}s`;
    return span;
  };

  const applyAnimation = () => {
    element.innerHTML = "";

    for (let index = 0; index < text.length; index++) {
      const char = text[index];
      const delay = index * 0.12;
      const letterElement = createLetterElements(char, index, delay);

      element.appendChild(letterElement);
    }
  };

  applyAnimation();
};
