export const wave = (element: HTMLElement | null, text: string): void => {
  if (!element) return;

  const createLetterElements = (
    text: string,
    char: string,
    index: number,
    diff: number
  ) => {
    const elementsLength = text.length;

    const fragment = document.createDocumentFragment();

    // for (let i = 0; i < elementsLength; i++) {
    const delay = (elementsLength - index + 1) / 10 + diff;

    const p = document.createElement("p");
    p.className = `letter scale accent-text visibility`;
    p.textContent = char;
    p.style.setProperty("--delay", `${delay}s`);
    fragment.appendChild(p);
    // }
    return fragment;
  };

  const applyAnimation = () => {
    let diff = 0.0;

    element.innerHTML = "";
    for (let index = 0; index < text.length; index++) {
      const char = text[index];
      const wrapper = document.createElement("div");
      wrapper.className = "letter-wrapper";

      const letterElements = createLetterElements(text, char, index, diff);

      wrapper.appendChild(letterElements);
      diff += 0.12;

      element.appendChild(wrapper);
    }
  };

  applyAnimation();
};
