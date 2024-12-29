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

//  Generates a random word
function jumble(textLen: number) {
  let generated = "";
  const randomChar = () => String.fromCharCode(scramble.random(33, 126));
  for (let i = 0; i < textLen; i++) generated += randomChar();
  return generated;
}

// Returns decoded letters corresponding to the length given
function decode(original: string, decodeLen: number) {
  const newText = original.substring(0, decodeLen);
  return newText + jumble(original.length - decodeLen);
}

// Returns decoded letters corresponding to the length given
function disorder(element: Node | Element | null) {
  const original = element && element.textContent;
  const totalChars = original ? original.length : 0;

  const execute = () => element && (element.textContent = jumble(totalChars));

  let jumbler = setInterval(execute, scramble.interval);
  let running = true;
  return {
    original,
    start: () => {
      if (!running) {
        running = true;
        jumbler = setInterval(execute, scramble.interval);
      } else throw new Error("Instance is already running!");
    },
    stop: () => {
      if (!running) return;
      running = false;
      clearInterval(jumbler);
    },
  };
}

// Scrambles and decode a list of elements in succession
function successive(elements: Node[] | Element[]) {
  const next = Array.from(elements).map((el) => scramble(el));
  const execute = (index: number) => {
    if (index >= next.length) return;
    function check() {
      if (index && next) {
        if (next[index]?.finished?.()) execute(index + 1);
      } else setTimeout(check, 1000);
    }
    next[index]?.run?.();
    setTimeout(check, 1000);
  };
  return {
    run: () => execute(0),
  };
}

// Scrambles an element content and rewrite it one by one
function scramble(element: Node | Element | null, args?: any) {
  if (element == null) return;
  if (element instanceof NodeList) {
    const disarray = Array.from(element).map(
      (x) => scramble(x) || { run: () => {} }
    );
    const executed = Array(element.length).fill(false);

    const events = ["load", "scroll"];
    for (let i = 0; i < element.length; i++) {
      for (const ev of events) {
        window.addEventListener(ev, function check() {
          if (executed[i]) window.removeEventListener(ev, check);
          if (!executed[i] && inViewport(element[i])) {
            executed[i] = true;
            if (disarray[i]?.run) {
              disarray[i].run?.();
            }
          }
        });
      }
    }
    return {
      status: () => executed.every((x) => x),
    };
  } else if (element instanceof HTMLElement) {
    let executed = false;
    let letterIdx = 0;
    let original;

    if (args === undefined) original = element.textContent;
    else original = args.original;

    const totalChars = original.length;
    const runner = disorder(element);

    let timer: ReturnType<typeof setInterval> | undefined;
    const iterateLetters = () => {
      clearInterval(timer);
      timer = setInterval(() => {
        if (letterIdx >= totalChars) clearInterval(timer);
        element.textContent = decode(original, letterIdx);
      }, scramble.interval);
      if (letterIdx++ >= totalChars)
        clearTimeout(iterateLetters as unknown as number);
      else setTimeout(iterateLetters, 432);
    };
    return {
      finished: () => letterIdx >= totalChars,
      run: () => {
        if (executed) return;
        executed = true;
        runner.stop();
        iterateLetters();
      },
      worker: runner,
    };
  }
}

scramble.interval = 42;
scramble.disorder = disorder;
scramble.successive = successive;

scramble.random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default scramble;
