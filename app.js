const course = [
  {
    module: "JavaScript Foundations",
    lessons: [
      {
        id: "values-variables",
        title: "Values and Variables",
        summary:
          "Use `const` for values that should not change and `let` for values that might.",
        explanation:
          "Variables are named containers for values. Good naming plus correct `const`/`let` usage makes your code easier to read and safer to refactor.",
        objectives: [
          "Declare values with `const` and `let`.",
          "Log a readable sentence with a template literal.",
        ],
        task:
          "Create `const language = \"JavaScript\"` and `let released = 1995`, then log: `JavaScript was released in 1995`.",
        hints: [
          "Template literal format: `` `${value}` ``.",
          "Use `console.log(...)` once with the full sentence.",
        ],
        starterCode: `// Step 1: create the two variables
// Step 2: log the sentence exactly
`,
        resources: [
          { label: "MDN: Variables", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables" },
          { label: "The Odin Project: Fundamentals", url: "https://www.theodinproject.com/paths/foundations/courses/foundations" },
        ],
        validator: "valuesVariables",
      },
      {
        id: "math-operators",
        title: "Numbers and Operators",
        summary:
          "JavaScript arithmetic is straightforward, and formatting output keeps results human-friendly.",
        explanation:
          "Use operators for calculations and methods like `toFixed` when output needs a stable number of decimals.",
        objectives: [
          "Perform arithmetic with numbers.",
          "Format the result with exactly two decimals.",
        ],
        task:
          "Create `price = 19` and `taxRate = 0.07`, calculate total, then log `20.33`.",
        hints: [
          "Formula: `price + price * taxRate`.",
          "Use `.toFixed(2)` before logging.",
        ],
        starterCode: `// Create your variables
// Compute total
// Log the total with two decimals
`,
        resources: [
          { label: "MDN: Numbers", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings" },
        ],
        validator: "mathOperators",
      },
      {
        id: "conditionals",
        title: "Conditionals",
        summary:
          "Conditionals let your program choose behavior based on a true/false expression.",
        explanation:
          "Most logic in applications is branching logic: checks, guards, and path selection based on state.",
        objectives: [
          "Write an `if/else` statement.",
          "Return booleans from a function.",
        ],
        task:
          "Create `function canVote(age)` that returns true when age is 18 or above. Log `canVote(16)` and `canVote(21)`.",
        hints: [
          "Condition is `age >= 18`.",
          "Expected output lines are `false` then `true`.",
        ],
        starterCode: `function canVote(age) {
  // return true or false
}

console.log(canVote(16));
console.log(canVote(21));
`,
        resources: [
          { label: "MDN: if...else", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else" },
        ],
        validator: "conditionals",
      },
      {
        id: "functions",
        title: "Functions",
        summary:
          "Functions package behavior so it can be reused and tested with different inputs.",
        explanation:
          "Any time you see repetition, a function can usually reduce duplication and make intent explicit.",
        objectives: [
          "Declare a function with one parameter.",
          "Return a new string from that parameter.",
        ],
        task:
          "Write `function greet(name)` that returns `Hello, <name>!`. Log `greet(\"Ada\")`.",
        hints: [
          "Return the string, do not just print inside the function.",
          "Use template literals for clean string building.",
        ],
        starterCode: `function greet(name) {
  // return the greeting string
}

console.log(greet("Ada"));
`,
        resources: [
          { label: "MDN: Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" },
        ],
        validator: "functions",
      },
    ],
  },
  {
    module: "Data and Control Flow",
    lessons: [
      {
        id: "arrays",
        title: "Arrays",
        summary:
          "Arrays store ordered lists. You can append items and inspect length.",
        explanation:
          "Array fundamentals are everywhere in JavaScript: rendering lists, collecting values, and transforming data.",
        objectives: [
          "Add a value with `push`.",
          "Read from an array by index and length.",
        ],
        task:
          "Create `tools = [\"HTML\", \"CSS\", \"JavaScript\"]`, push `\"Node.js\"`, and log `4:Node.js`.",
        hints: [
          "Use `tools.push(\"Node.js\")`.",
          "The last item is at index `3` after the push.",
        ],
        starterCode: `// Build the array
// Push Node.js
// Log exactly: 4:Node.js
`,
        resources: [
          { label: "MDN: Arrays", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays" },
        ],
        validator: "arrays",
      },
      {
        id: "loops",
        title: "Loops",
        summary:
          "Loops let you apply one action over many values without repetitive code.",
        explanation:
          "In real projects, loops and array methods help process response data, user input, and UI collections.",
        objectives: [
          "Iterate over values.",
          "Accumulate a running total.",
        ],
        task:
          "Use a loop to sum `[2, 4, 6, 8]` and log `20`.",
        hints: [
          "Start with `let sum = 0`.",
          "Either `for...of` or a classic `for` loop is fine.",
        ],
        starterCode: `const numbers = [2, 4, 6, 8];
let sum = 0;

// Loop through numbers and update sum

console.log(sum);
`,
        resources: [
          { label: "MDN: Loops and iteration", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration" },
        ],
        validator: "loops",
      },
      {
        id: "objects",
        title: "Objects",
        summary:
          "Objects group related values under named keys.",
        explanation:
          "Objects model real entities such as users, products, or API responses. Property access is a core JavaScript skill.",
        objectives: [
          "Create an object literal.",
          "Read properties and format output.",
        ],
        task:
          "Create `user` with `name: \"Sam\"` and `role: \"student\"`, then log `Sam (student)`.",
        hints: [
          "Object format: `{ key: value }`.",
          "Read properties with dot notation: `user.name`.",
        ],
        starterCode: `// Create the user object

// Log: Sam (student)
`,
        resources: [
          { label: "MDN: Working with objects", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects" },
        ],
        validator: "objects",
      },
      {
        id: "array-map",
        title: "Array Methods",
        summary:
          "Array methods often replace manual loops with clearer intent.",
        explanation:
          "`map` creates a new array by transforming each item. It is a major building block in frontend work.",
        objectives: [
          "Use `map` to transform values.",
          "Inspect the transformed output.",
        ],
        task:
          "Create `[1, 2, 3]`, map each value to double, and log `2,4,6`.",
        hints: [
          "Example pattern: `const doubled = values.map((n) => n * 2)`.",
          "Log with `doubled.join(\",\")`.",
        ],
        starterCode: `// Create values and doubled arrays

// Log: 2,4,6
`,
        resources: [
          { label: "MDN: Array.prototype.map()", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" },
        ],
        validator: "arrayMap",
      },
    ],
  },
  {
    module: "Practice Lab",
    lessons: [
      {
        id: "mini-challenge",
        title: "Mini Challenge: countVowels",
        summary:
          "Pull fundamentals together in one small challenge.",
        explanation:
          "This task combines strings, conditionals, loops, and function design. It mirrors the kind of small utility functions you build in real projects.",
        objectives: [
          "Write and test a function independently.",
          "Work from expected behavior.",
        ],
        task:
          "Write `countVowels(word)` that returns how many vowels are in `word`. Log `countVowels(\"documentation\")` and output `6`.",
        hints: [
          "Loop through each character and check if it is in `\"aeiou\"`.",
          "Convert input to lower case first for safety.",
        ],
        starterCode: `function countVowels(word) {
  // implement
}

console.log(countVowels("documentation"));
`,
        resources: [
          { label: "MDN: String methods", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" },
        ],
        validator: "miniChallenge",
      },
    ],
  },
];

const lessons = course.flatMap((group) =>
  group.lessons.map((lesson) => ({ ...lesson, module: group.module }))
);

const elements = {
  lessonNav: document.querySelector("#lesson-nav"),
  progressLabel: document.querySelector("#progress-label"),
  resetProgress: document.querySelector("#reset-progress"),
  moduleTitle: document.querySelector("#module-title"),
  lessonTitle: document.querySelector("#lesson-title"),
  objectives: document.querySelector("#objectives"),
  lessonSummary: document.querySelector("#lesson-summary"),
  lessonExplanation: document.querySelector("#lesson-explanation"),
  lessonResources: document.querySelector("#lesson-resources"),
  taskText: document.querySelector("#task-text"),
  hints: document.querySelector("#hints"),
  editor: document.querySelector("#code-editor"),
  output: document.querySelector("#output"),
  feedback: document.querySelector("#feedback"),
  prevLesson: document.querySelector("#prev-lesson"),
  nextLesson: document.querySelector("#next-lesson"),
  runCode: document.querySelector("#run-code"),
  checkTask: document.querySelector("#check-task"),
  resetCode: document.querySelector("#reset-code"),
  toggleHints: document.querySelector("#toggle-hints"),
  toggleExplanation: document.querySelector("#toggle-explanation"),
};

const storageKey = "js-learning-lab-progress-v1";
const state = {
  currentIndex: 0,
  showHints: false,
  showExplanation: true,
  drafts: {},
  progress: loadProgress(),
  lastRun: null,
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      return new Set();
    }
    return new Set(JSON.parse(raw));
  } catch (error) {
    return new Set();
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(Array.from(state.progress)));
}

function getLesson() {
  return lessons[state.currentIndex];
}

function renderNav() {
  elements.lessonNav.innerHTML = "";

  course.forEach((group) => {
    const groupWrap = document.createElement("section");
    groupWrap.className = "module-group";

    const heading = document.createElement("h3");
    heading.textContent = group.module;
    groupWrap.appendChild(heading);

    const list = document.createElement("div");
    list.className = "lesson-list";

    group.lessons.forEach((lesson) => {
      const absoluteIndex = lessons.findIndex((entry) => entry.id === lesson.id);
      const item = document.createElement("button");
      item.type = "button";
      item.className = "lesson-item";
      item.textContent = `${absoluteIndex + 1}. ${lesson.title}`;
      if (absoluteIndex === state.currentIndex) {
        item.classList.add("active");
      }
      if (state.progress.has(lesson.id)) {
        item.classList.add("done");
      }

      item.addEventListener("click", () => {
        state.currentIndex = absoluteIndex;
        state.showHints = false;
        state.showExplanation = true;
        render();
      });

      list.appendChild(item);
    });

    groupWrap.appendChild(list);
    elements.lessonNav.appendChild(groupWrap);
  });
}

function renderLesson() {
  const lesson = getLesson();

  elements.moduleTitle.textContent = lesson.module;
  elements.lessonTitle.textContent = lesson.title;
  elements.lessonSummary.textContent = lesson.summary;
  elements.lessonExplanation.textContent = lesson.explanation;
  elements.taskText.textContent = lesson.task;

  elements.objectives.innerHTML = "";
  lesson.objectives.forEach((objective) => {
    const li = document.createElement("li");
    li.textContent = objective;
    elements.objectives.appendChild(li);
  });

  elements.lessonResources.innerHTML = "";
  lesson.resources.forEach((resource) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = resource.url;
    link.textContent = resource.label;
    link.target = "_blank";
    link.rel = "noreferrer";
    li.appendChild(link);
    elements.lessonResources.appendChild(li);
  });

  elements.hints.innerHTML = "";
  lesson.hints.forEach((hint) => {
    const li = document.createElement("li");
    li.textContent = hint;
    elements.hints.appendChild(li);
  });

  if (state.showHints) {
    elements.hints.classList.remove("hidden");
    elements.toggleHints.textContent = "Hide hints";
  } else {
    elements.hints.classList.add("hidden");
    elements.toggleHints.textContent = "Show hints";
  }

  if (state.showExplanation) {
    elements.lessonExplanation.classList.remove("hidden");
    elements.lessonResources.classList.remove("hidden");
    elements.toggleExplanation.textContent = "Hide explanation";
  } else {
    elements.lessonExplanation.classList.add("hidden");
    elements.lessonResources.classList.add("hidden");
    elements.toggleExplanation.textContent = "Show explanation";
  }

  const savedDraft = state.drafts[lesson.id];
  elements.editor.value =
    typeof savedDraft === "string" ? savedDraft : lesson.starterCode;

  elements.feedback.textContent = "";
  elements.feedback.className = "";
  elements.output.textContent = "Run your code to see output here.";
}

function renderProgress() {
  elements.progressLabel.textContent = `${state.progress.size} / ${lessons.length} completed`;
  elements.prevLesson.disabled = state.currentIndex === 0;
  elements.nextLesson.disabled = state.currentIndex === lessons.length - 1;
}

function render() {
  renderNav();
  renderLesson();
  renderProgress();
}

function formatValue(value) {
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "undefined") {
    return "undefined";
  }
  try {
    return JSON.stringify(value);
  } catch (error) {
    return String(value);
  }
}

function runCode(source) {
  const output = [];
  const fakeConsole = {
    log: (...args) => output.push(args.map(formatValue).join(" ")),
    error: (...args) => output.push(`ERROR: ${args.map(formatValue).join(" ")}`),
  };

  try {
    const runner = new Function("console", `"use strict";\n${source}`);
    runner(fakeConsole);
    return { output, error: null };
  } catch (error) {
    return { output, error };
  }
}

function printRunResult(result) {
  if (result.error) {
    const prior = result.output.length > 0 ? `${result.output.join("\n")}\n` : "";
    elements.output.textContent = `${prior}${result.error.name}: ${result.error.message}`;
    return;
  }

  elements.output.textContent =
    result.output.length > 0 ? result.output.join("\n") : "(no console output)";
}

function pass(message) {
  return { ok: true, message };
}

function fail(message) {
  return { ok: false, message };
}

const validators = {
  valuesVariables({ code, result }) {
    if (result.error) {
      return fail("Fix the runtime error first.");
    }
    if (!/const\s+language\b/.test(code) || !/let\s+released\b/.test(code)) {
      return fail("Use both `const language` and `let released`.");
    }
    if (result.output[0] !== "JavaScript was released in 1995") {
      return fail("Expected output: JavaScript was released in 1995");
    }
    return pass("Correct use of variables and string interpolation.");
  },

  mathOperators({ code, result }) {
    if (result.error) {
      return fail("Fix the runtime error first.");
    }
    if (!/toFixed\s*\(\s*2\s*\)/.test(code)) {
      return fail("Format the total with `.toFixed(2)`.");
    }
    if (result.output[0] !== "20.33") {
      return fail("Expected output: 20.33");
    }
    return pass("Nice work with arithmetic and formatting.");
  },

  conditionals({ code, result }) {
    if (result.error) {
      return fail("Fix the runtime error first.");
    }
    if (!/function\s+canVote\s*\(/.test(code)) {
      return fail("Define a `canVote` function.");
    }
    if (result.output[0] !== "false" || result.output[1] !== "true") {
      return fail("Expected output lines: false then true.");
    }
    return pass("Your conditional logic is working.");
  },

  functions({ code, result }) {
    if (result.error) {
      return fail("Fix the runtime error first.");
    }
    if (!/function\s+greet\s*\(/.test(code)) {
      return fail("Define `function greet(name)`.");
    }
    if (result.output[0] !== "Hello, Ada!") {
      return fail("Expected output: Hello, Ada!");
    }
    return pass("Function behavior is correct.");
  },

  arrays({ code, result }) {
    if (result.error) {
      return fail("Fix the runtime error first.");
    }
    if (!/\.push\s*\(/.test(code)) {
      return fail("Use `.push(...)` to add Node.js.");
    }
    if (result.output[0] !== "4:Node.js") {
      return fail("Expected output: 4:Node.js");
    }
    return pass("Great. You mutated the array and read key values.");
  },

  loops({ code, result }) {
    if (result.error) {
      return fail("Fix the runtime error first.");
    }
    if (!/for\s*\(|for\s+/.test(code)) {
      return fail("Use a loop to compute the sum.");
    }
    if (result.output[0] !== "20") {
      return fail("Expected output: 20");
    }
    return pass("Loop and accumulation look good.");
  },

  objects({ code, result }) {
    if (result.error) {
      return fail("Fix the runtime error first.");
    }
    if (!/const\s+user\s*=/.test(code)) {
      return fail("Create a `user` object.");
    }
    if (result.output[0] !== "Sam (student)") {
      return fail("Expected output: Sam (student)");
    }
    return pass("Object creation and property access are correct.");
  },

  arrayMap({ code, result }) {
    if (result.error) {
      return fail("Fix the runtime error first.");
    }
    if (!/\.map\s*\(/.test(code)) {
      return fail("Use `.map(...)` for the transform.");
    }
    if (result.output[0] !== "2,4,6") {
      return fail("Expected output: 2,4,6");
    }
    return pass("Good transform with `map`.");
  },

  miniChallenge({ code, result }) {
    if (result.error) {
      return fail("Fix the runtime error first.");
    }
    if (!/function\s+countVowels\s*\(/.test(code)) {
      return fail("Define `countVowels(word)` first.");
    }
    if (result.output[0] !== "6") {
      return fail("Expected output: 6");
    }
    return pass("Challenge complete. You combined multiple core concepts.");
  },
};

function runCurrentCode() {
  const lesson = getLesson();
  const code = elements.editor.value;
  state.drafts[lesson.id] = code;

  const result = runCode(code);
  state.lastRun = { lessonId: lesson.id, code, result };
  printRunResult(result);
  return result;
}

function checkCurrentTask() {
  const lesson = getLesson();
  const code = elements.editor.value;

  let result;
  if (
    state.lastRun &&
    state.lastRun.lessonId === lesson.id &&
    state.lastRun.code === code
  ) {
    result = state.lastRun.result;
  } else {
    result = runCurrentCode();
  }

  const validator = validators[lesson.validator];
  const evaluation = validator({ code, result });

  if (evaluation.ok) {
    state.progress.add(lesson.id);
    saveProgress();
    elements.feedback.className = "pass";
    renderNav();
    renderProgress();
  } else {
    elements.feedback.className = "fail";
  }

  elements.feedback.textContent = evaluation.message;
}

elements.prevLesson.addEventListener("click", () => {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    state.showHints = false;
    state.showExplanation = true;
    render();
  }
});

elements.nextLesson.addEventListener("click", () => {
  if (state.currentIndex < lessons.length - 1) {
    state.currentIndex += 1;
    state.showHints = false;
    state.showExplanation = true;
    render();
  }
});

elements.runCode.addEventListener("click", runCurrentCode);
elements.checkTask.addEventListener("click", checkCurrentTask);

elements.resetCode.addEventListener("click", () => {
  const lesson = getLesson();
  elements.editor.value = lesson.starterCode;
  state.drafts[lesson.id] = lesson.starterCode;
});

elements.toggleHints.addEventListener("click", () => {
  state.showHints = !state.showHints;
  if (state.showHints) {
    elements.hints.classList.remove("hidden");
    elements.toggleHints.textContent = "Hide hints";
  } else {
    elements.hints.classList.add("hidden");
    elements.toggleHints.textContent = "Show hints";
  }
});

elements.toggleExplanation.addEventListener("click", () => {
  state.showExplanation = !state.showExplanation;
  if (state.showExplanation) {
    elements.lessonExplanation.classList.remove("hidden");
    elements.lessonResources.classList.remove("hidden");
    elements.toggleExplanation.textContent = "Hide explanation";
  } else {
    elements.lessonExplanation.classList.add("hidden");
    elements.lessonResources.classList.add("hidden");
    elements.toggleExplanation.textContent = "Show explanation";
  }
});

elements.editor.addEventListener("input", () => {
  const lesson = getLesson();
  state.drafts[lesson.id] = elements.editor.value;
});

elements.resetProgress.addEventListener("click", () => {
  state.progress.clear();
  saveProgress();
  renderNav();
  renderProgress();
  elements.feedback.textContent = "Progress reset.";
  elements.feedback.className = "";
});

render();
