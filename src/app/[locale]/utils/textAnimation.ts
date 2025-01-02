export type TextAnimationType =
  | "animation-top-to-bottom-rotateY"
  | "animation-top-to-bottom"
  | "animation-top-to-bottom-rotateX"
  | "animation-top-to-bottom-rotate"
  | "animation-5"
  | "animation-6";

export const textAnimation = (
  element: HTMLElement | null,
  text: string,
  variant: TextAnimationType = "animation-top-to-bottom",
  theme?: string
): void => {
  if (!element) return;

  const colorsForLightTheme = [
    "#2a8a92",
    "#68b8c1",
    "#aad0d4",
    "#c3e1e5",
    "#fca26e",
    "#f77532",
    "#ff5500",
  ];

  const colorsForDarkTheme = [
    "#ff5500",
    "#f77532",
    "#fca26e",
    "#c3e1e5",
    "#aad0d4",
    "#68b8c1",
    "#2a8a92",
  ];

  const colors = theme === "dark" ? colorsForDarkTheme : colorsForLightTheme;

  const createLetterElements = (char: string, diff: number) => {
    const elementsLength = 8;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < elementsLength; i++) {
      const delay = (elementsLength - i + 1) / 10 + diff;
      const span = document.createElement("span");
      span.className = `letter ${variant}`;
      span.textContent = char;
      span.style.setProperty("--delay", `${delay}s`);
      span.style.setProperty("color", colors[i] || "#000");
      fragment.appendChild(span);
    }
    return fragment;
  };

  const applyAnimation = () => {
    let diff = 0.0;

    // Clear existing children
    element.innerHTML = "";

    for (const char of text) {
      const wrapper = document.createElement("div");
      wrapper.className = "letter-wrapper";

      const letterElements = createLetterElements(char, diff);
      wrapper.appendChild(letterElements);
      diff += 0.12;

      element.appendChild(wrapper);
    }
  };

  applyAnimation();
};

// usage
// const descriptionRef = useRef<HTMLDivElement | null>(null);

// useEffect(() => {
//   textAnimation(descriptionRef.current, i("description"), "animation-5");
// }, []);

// <p className="accent-text" ref={descriptionRef}>
