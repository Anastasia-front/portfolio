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
  variant: TextAnimationType = "animation-top-to-bottom"
): void => {
  if (!element) return; 

  const colors = [
    "#24656a",
    "#2a8a92",
    "#4491ba",
    "#00b8d0",
    "#68b8c1",
    "#aad0d4",
    "#c3e1e5",
    "#efbd9d",
    "#fca26e",
    "#f5751d",
    "#f77532",
    "#ff671b",
    "#f95c0d",
    "#ff5500",
  ];

  const createLetterElements = (char: string, diff: number) => {
    const elementsLength = 8;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < elementsLength; i++) {
      const delay = ((elementsLength - i + 1) / 10) + diff;
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
