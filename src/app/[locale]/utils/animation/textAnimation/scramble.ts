// Check if an element is visible in viewport
function inViewport(element: Node | Element | null) {
  if (element instanceof Element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
  }
}

// Generates a random word
function jumble(textLength: number) {
  let generated = "";
  const randomChar = () => String.fromCharCode(scramble.random(33, 126));
  for (let i = 0; i < textLength; i++) generated += randomChar();
  return generated;
}

// Returns decoded letters corresponding to the length given
function decode(original: string, decodeLen: number) {
  const newText = original.substring(0, decodeLen);
  return newText + jumble(original.length - decodeLen);
}

// Handles text scrambling for an element
function disorder(element: Node | Element | null) {
  const original = element && element.textContent;
  const totalChars = original ? original.length : 0;

  const execute = () => element && (element.textContent = jumble(totalChars));

  let jumbler = setInterval(execute, scramble.interval);
  let running = true;

  return {
    original,
    start: () => {
      if (running) return;
      running = true;
      jumbler = setInterval(execute, scramble.interval);
    },
    stop: () => {
      if (!running) return;
      running = false;
      clearInterval(jumbler);
    },
  };
}

// Runs scrambles successively on multiple elements
function successive(elements: Node[] | Element[]) {
  const next = Array.from(elements).map((el) => scramble(el));
  const execute = (index: number) => {
    if (index >= next.length) return;
    function check() {
      if (index < next.length && next[index]?.finished?.()) {
        execute(index + 1);
      } else {
        setTimeout(check, 100);
      }
    }
    if (next && next[index]) {
      next[index].run();
      setTimeout(check, 100);
    }
  };
  return {
    run: () => execute(0),
  };
}

// Scrambles an element content and rewrites it all at once
export function scramble(element: Node | Element | null, args?: any) {
  if (element == null) return;

  if (element instanceof HTMLElement) {
    let executed = false;
    const original = args?.original || element.textContent || "";
    const totalChars = original.length;

    const runner = disorder(element);

    const revealAfterDelay = () => {
      runner.stop();
      setTimeout(() => {
        element.textContent = decode(original, totalChars);
      }, 2000);
    };

    return {
      finished: () => executed,
      run: () => {
        if (executed) return;
        executed = true;
        revealAfterDelay();
      },
      worker: runner,
    };
  }
}

scramble.interval = 10;
scramble.disorder = disorder;
scramble.successive = successive;

scramble.random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
