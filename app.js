const course = [
  {
    module: "Chapter 1: Start Here",
    lessons: [
      {
        id: "first-print",
        title: "First JavaScript Line",
        summary:
          "JavaScript can print messages. You will use that for instant feedback in every lesson.",
        explanation: [
          "Think of JavaScript like instructions for the browser.",
          "`console.log(...)` is the easiest instruction: it sends text to the Output box.",
          "You do not need to memorize anything yet. Copy the pattern and change only the text."
        ],
        objectives: [
          "Run one JavaScript command.",
          "Print exactly one line of text."
        ],
        syntaxMap: [
          {
            syntax: 'console.log("Hello")',
            meaning: "Prints text so you can see program results."
          },
          {
            syntax: '"text"',
            meaning: "Quotes mean this is plain text (a string)."
          }
        ],
        steps: [
          "In the editor, find `console.log(\"Change me\")`.",
          "Replace only `Change me` with `Hello, browser!`.",
          "Click Run code, then Check task."
        ],
        workedExample: {
          code: 'console.log("I am learning JavaScript")',
          note: "Same shape every time: `console.log`, parentheses, quoted text."
        },
        task:
          "Print this exact line: `Hello, browser!`",
        expectedOutput: "Expected Output: Hello, browser!",
        hints: [
          "Do not delete `console.log`.",
          "Keep the quotes around the text."
        ],
        starterCode: 'console.log("Change me")\n',
        solutionCode: 'console.log("Hello, browser!")\n',
        check: { mode: "exact", lines: ["Hello, browser!"] },
        bonusResources: [
          {
            label: "MDN: What is JavaScript?",
            url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript"
          }
        ]
      },
      {
        id: "variables-basic",
        title: "Store Text in a Variable",
        summary:
          "A variable is a named box where you store a value.",
        explanation: [
          "You can name a value and reuse it later.",
          "`const` means: this value should stay the same.",
          "For now, use the exact names from the lesson and focus on pattern recognition."
        ],
        objectives: [
          "Create a variable with `const`.",
          "Print the variable value."
        ],
        syntaxMap: [
          {
            syntax: 'const language = "JavaScript"',
            meaning: "Create a constant variable named `language`."
          },
          {
            syntax: "console.log(language)",
            meaning: "Print what is stored in that variable."
          }
        ],
        steps: [
          "Use the starter code and type `JavaScript` inside the quotes.",
          "On the second line, print `language`.",
          "Run and check."
        ],
        workedExample: {
          code: 'const city = "New York"\nconsole.log(city)',
          note: "Variables remove repetition. You write the value once, then reuse the name."
        },
        task:
          "Create `const language = \"JavaScript\"` and print it.",
        expectedOutput: "Expected Output: JavaScript",
        hints: [
          "`console.log(\"value\")` prints text directly.",
          "`console.log(language)` prints what is inside the variable."
        ],
        starterCode: 'const language = ""\nconsole.log()\n',
        solutionCode: 'const language = "JavaScript"\nconsole.log(language)\n',
        check: {
          mode: "exact",
          lines: ["JavaScript"],
          require: [/const\s+language\s*=/]
        },
        bonusResources: [
          {
            label: "MDN: Variables",
            url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables"
          }
        ]
      },
      {
        id: "template-literal",
        title: "Combine Text and Variables",
        summary:
          "Template literals let you build readable sentences.",
        explanation: [
          "Backticks ( ` ) create a template literal.",
          "`${name}` inserts a variable inside text.",
          "This is a common frontend pattern for labels and UI messages."
        ],
        objectives: [
          "Use one variable inside a sentence.",
          "Print a formatted line."
        ],
        syntaxMap: [
          {
            syntax: "`Hello, ${name}`",
            meaning: "Insert the value of `name` into text."
          },
          {
            syntax: "console.log(message)",
            meaning: "Print the completed sentence."
          }
        ],
        steps: [
          "Set `const name = \"Alex\"`.",
          "Create `const message = `Welcome, ${name}!`` using backticks.",
          "Print `message`."
        ],
        workedExample: {
          code: 'const count = 3\nconsole.log(`You have ${count} tasks`) ',
          note: "Use backticks, not single quotes, when inserting `${...}`."
        },
        task: "Print exactly: `Welcome, Alex!` using a variable and template literal.",
        expectedOutput: "Expected Output: Welcome, Alex!",
        hints: [
          "Keyboard: the backtick key is usually left of number 1.",
          "Keep `${name}` inside backticks."
        ],
        starterCode:
          'const name = "Alex"\nconst message = ``\nconsole.log(message)\n',
        solutionCode:
          'const name = "Alex"\nconst message = `Welcome, ${name}!`\nconsole.log(message)\n',
        check: {
          mode: "exact",
          lines: ["Welcome, Alex!"],
          require: [/\$\{\s*name\s*\}/]
        },
        bonusResources: [
          {
            label: "MDN: Template literals",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
          }
        ]
      }
    ]
  },
  {
    module: "Chapter 1: Core Building Blocks",
    lessons: [
      {
        id: "numbers-basic",
        title: "Do Math with Numbers",
        summary:
          "JavaScript can calculate totals for prices, counters, and sizes.",
        explanation: [
          "Math operators are the same as school math: `+`, `-`, `*`, `/`.",
          "Store the result in a variable so your code stays readable.",
          "Use `toFixed(2)` when you want exactly 2 decimal places."
        ],
        objectives: [
          "Calculate a total.",
          "Print a rounded value with 2 decimals."
        ],
        syntaxMap: [
          {
            syntax: "const total = price + price * taxRate",
            meaning: "Calculate subtotal plus tax."
          },
          {
            syntax: "total.toFixed(2)",
            meaning: "Return a string with exactly 2 decimal digits."
          }
        ],
        steps: [
          "Create price and taxRate with the given numbers.",
          "Compute total using the provided formula.",
          "Print `total.toFixed(2)`."
        ],
        workedExample: {
          code: 'const score = 7 / 3\nconsole.log(score.toFixed(2))',
          note: "`toFixed` is formatting only. It does not permanently change the original number."
        },
        task: "Use `price = 19` and `taxRate = 0.07`, then print `20.33`.",
        expectedOutput: "Expected Output: 20.33",
        hints: [
          "Formula: `price + price * taxRate`.",
          "Print `total.toFixed(2)`, not `total`."
        ],
        starterCode:
          'const price = 19\nconst taxRate = 0.07\nconst total = \nconsole.log()\n',
        solutionCode:
          'const price = 19\nconst taxRate = 0.07\nconst total = price + price * taxRate\nconsole.log(total.toFixed(2))\n',
        check: { mode: "exact", lines: ["20.33"] },
        bonusResources: [
          {
            label: "MDN: Numbers and strings",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings"
          }
        ]
      },
      {
        id: "function-return",
        title: "Write a Function",
        summary:
          "A function is a reusable recipe.",
        explanation: [
          "You create a function once, then call it with different values.",
          "`return` sends a value back out of the function.",
          "The function body goes between `{` and `}`."
        ],
        objectives: [
          "Define one function with one input.",
          "Return a greeting line."
        ],
        syntaxMap: [
          {
            syntax: "function greet(name) { ... }",
            meaning: "Create a function called `greet` with parameter `name`."
          },
          {
            syntax: "return `Hello, ${name}!`",
            meaning: "Send the greeting value back to the caller."
          }
        ],
        steps: [
          "Inside `greet`, return a template literal greeting.",
          "Do not use `console.log` inside the function for this task.",
          "Print the result by calling `console.log(greet(\"Ada\"))`."
        ],
        workedExample: {
          code: 'function double(n) {\n  return n * 2\n}\nconsole.log(double(5))',
          note: "`return` creates a result. `console.log` displays it."
        },
        task: "Create `greet(name)` and print `Hello, Ada!`.",
        expectedOutput: "Expected Output: Hello, Ada!",
        hints: [
          "Keep `return` inside the function block.",
          "Use backticks if you want variable insertion."
        ],
        starterCode:
          'function greet(name) {\n  \n}\n\nconsole.log(greet("Ada"))\n',
        solutionCode:
          'function greet(name) {\n  return `Hello, ${name}!`\n}\n\nconsole.log(greet("Ada"))\n',
        check: {
          mode: "exact",
          lines: ["Hello, Ada!"],
          require: [/function\s+greet\s*\(/, /return\s+/]
        },
        bonusResources: [
          {
            label: "MDN: Functions",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
          }
        ]
      },
      {
        id: "if-else-basic",
        title: "Choose with if/else",
        summary:
          "`if/else` lets code make decisions.",
        explanation: [
          "A condition is either true or false.",
          "If condition is true, first block runs. Otherwise, `else` block runs.",
          "This is how apps check logins, forms, and age restrictions."
        ],
        objectives: [
          "Write one if/else rule.",
          "Return true and false values."
        ],
        syntaxMap: [
          {
            syntax: "if (age >= 18) { return true }",
            meaning: "Return true for adults."
          },
          {
            syntax: "else { return false }",
            meaning: "Otherwise return false."
          }
        ],
        steps: [
          "Use the starter function `canVote(age)`.",
          "Inside it, add one if and one else branch.",
          "Run and confirm the two output lines."
        ],
        workedExample: {
          code: 'function isBig(n) {\n  if (n > 10) {\n    return true\n  } else {\n    return false\n  }\n}',
          note: "Braces and indentation make branches easier to read."
        },
        task: "Complete `canVote(age)` so output is `false` then `true`.",
        expectedOutput: "Expected Output (2 lines): false, then true",
        hints: [
          "Condition: `age >= 18`.",
          "Each branch should return a boolean."
        ],
        starterCode:
          'function canVote(age) {\n  // add if/else\n}\n\nconsole.log(canVote(16))\nconsole.log(canVote(21))\n',
        solutionCode:
          'function canVote(age) {\n  if (age >= 18) {\n    return true\n  } else {\n    return false\n  }\n}\n\nconsole.log(canVote(16))\nconsole.log(canVote(21))\n',
        check: {
          mode: "exact",
          lines: ["false", "true"],
          require: [/if\s*\(/, /else/]
        },
        bonusResources: [
          {
            label: "MDN: if...else",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else"
          }
        ]
      }
    ]
  },
  {
    module: "Chapter 1: Lists and Objects",
    lessons: [
      {
        id: "arrays-basic",
        title: "Lists with Arrays",
        summary:
          "Arrays store ordered lists of values.",
        explanation: [
          "Use square brackets `[]` to create an array.",
          "`push` adds a new item to the end of the array.",
          "`array.length` gives item count."
        ],
        objectives: [
          "Create an array.",
          "Add an item and print count + last value."
        ],
        syntaxMap: [
          {
            syntax: '["HTML", "CSS"]',
            meaning: "Array of text items."
          },
          {
            syntax: "tools.push(\"Node.js\")",
            meaning: "Add one more item at the end."
          }
        ],
        steps: [
          "Create `tools` with 3 items.",
          "Push `Node.js`.",
          "Print `4:Node.js` using length and index 3."
        ],
        workedExample: {
          code: 'const colors = ["red", "blue"]\ncolors.push("green")\nconsole.log(colors.length)',
          note: "After push, `colors.length` becomes 3."
        },
        task:
          "Create tools array, push `Node.js`, then print `4:Node.js`.",
        expectedOutput: "Expected Output: 4:Node.js",
        hints: [
          "Last index after push is `3`.",
          "You can join pieces with `+`, for example `a + \":\" + b`."
        ],
        starterCode:
          'const tools = ["HTML", "CSS", "JavaScript"]\n\n\nconsole.log()\n',
        solutionCode:
          'const tools = ["HTML", "CSS", "JavaScript"]\ntools.push("Node.js")\nconsole.log(tools.length + ":" + tools[3])\n',
        check: {
          mode: "exact",
          lines: ["4:Node.js"],
          require: [/\.push\s*\(/]
        },
        bonusResources: [
          {
            label: "MDN: Arrays",
            url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays"
          }
        ]
      },
      {
        id: "loops-basic",
        title: "Repeat with a Loop",
        summary:
          "Loops help you process each item in a list.",
        explanation: [
          "`for...of` is beginner-friendly for arrays.",
          "Start a total value, then add each number to it.",
          "This pattern appears in scores, totals, and analytics."
        ],
        objectives: [
          "Use one loop.",
          "Build a running sum."
        ],
        syntaxMap: [
          {
            syntax: "for (const n of numbers) { ... }",
            meaning: "Run the block once for each item."
          },
          {
            syntax: "sum = sum + n",
            meaning: "Add the current number to running total."
          }
        ],
        steps: [
          "Keep `sum = 0` before the loop.",
          "Inside the loop, update sum.",
          "Print sum after the loop."
        ],
        workedExample: {
          code: 'const nums = [1, 1, 1]\nlet total = 0\nfor (const n of nums) {\n  total = total + n\n}\nconsole.log(total)',
          note: "The loop body executes once per array item."
        },
        task: "Sum `[2, 4, 6, 8]` and print `20`.",
        expectedOutput: "Expected Output: 20",
        hints: [
          "Use `for (const n of numbers)`.",
          "Make sure `console.log(sum)` is after the loop block."
        ],
        starterCode:
          'const numbers = [2, 4, 6, 8]\nlet sum = 0\n\n// write your loop here\n\nconsole.log(sum)\n',
        solutionCode:
          'const numbers = [2, 4, 6, 8]\nlet sum = 0\n\nfor (const n of numbers) {\n  sum = sum + n\n}\n\nconsole.log(sum)\n',
        check: {
          mode: "exact",
          lines: ["20"],
          require: [/for\s*\(/]
        },
        bonusResources: [
          {
            label: "MDN: Loops and iteration",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration"
          }
        ]
      },
      {
        id: "objects-basic",
        title: "Group Data with Objects",
        summary:
          "Objects bundle related values using named properties.",
        explanation: [
          "Object keys are labels like `name` or `role`.",
          "Use dot notation (`user.name`) to read values.",
          "Objects are common in APIs and app state."
        ],
        objectives: [
          "Create a simple object.",
          "Read and print two properties."
        ],
        syntaxMap: [
          {
            syntax: 'const user = { name: "Sam", role: "student" }',
            meaning: "One object with two properties."
          },
          {
            syntax: "user.name",
            meaning: "Get the value of the `name` property."
          }
        ],
        steps: [
          "Create the `user` object exactly as shown in the task.",
          "Read both properties with dot notation.",
          "Build and print `Sam (student)`."
        ],
        workedExample: {
          code: 'const product = { name: "Book", price: 20 }\nconsole.log(product.name)',
          note: "Object syntax uses braces and key/value pairs."
        },
        task: "Create `user` and print `Sam (student)`.",
        expectedOutput: "Expected Output: Sam (student)",
        hints: [
          "Use `user.name` and `user.role`.",
          "Output line can be built with `+` concatenation."
        ],
        starterCode: 'const user = {\n  \n}\n\nconsole.log()\n',
        solutionCode:
          'const user = {\n  name: "Sam",\n  role: "student"\n}\n\nconsole.log(user.name + " (" + user.role + ")")\n',
        check: {
          mode: "exact",
          lines: ["Sam (student)"],
          require: [/const\s+user\s*=/]
        },
        bonusResources: [
          {
            label: "MDN: Working with objects",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects"
          }
        ]
      }
    ]
  },
  {
    module: "Chapter 1: First Mini Challenge",
    lessons: [
      {
        id: "mini-challenge-friendly",
        title: "Challenge: Count Vowels",
        summary:
          "Use loops and condition checks together in one practical function.",
        explanation: [
          "You already used all parts needed for this challenge.",
          "This version is scaffolded: fill in missing pieces line by line.",
          "If stuck, open hints first, then the optional full solution."
        ],
        objectives: [
          "Write a small function using a loop.",
          "Use `includes` to test if a letter is a vowel."
        ],
        syntaxMap: [
          {
            syntax: '"aeiou".includes(letter)',
            meaning: "True when `letter` is a vowel."
          },
          {
            syntax: "count = count + 1",
            meaning: "Increase counter by one."
          }
        ],
        steps: [
          "Start with `count = 0`.",
          "Loop over each letter in the word.",
          "If the vowel string includes the letter, increase count.",
          "Return count and print the function call."
        ],
        workedExample: {
          code: 'let c = 0\nfor (const ch of "cat") {\n  if ("aeiou".includes(ch)) {\n    c = c + 1\n  }\n}\nconsole.log(c)',
          note: "The word `cat` has one vowel, so output is 1."
        },
        task:
          "Complete `countVowels(word)` and print result for `documentation`.",
        expectedOutput: "Expected Output: 6",
        hints: [
          "Convert input to lowercase first: `word = word.toLowerCase()`.",
          "Loop shape: `for (const letter of word) { ... }`.",
          "Inside `if`, increment count by 1."
        ],
        starterCode:
          'function countVowels(word) {\n  word = word.toLowerCase()\n  let count = 0\n\n  for (const letter of word) {\n    // if vowel, add 1 to count\n  }\n\n  return count\n}\n\nconsole.log(countVowels("documentation"))\n',
        solutionCode:
          'function countVowels(word) {\n  word = word.toLowerCase()\n  let count = 0\n\n  for (const letter of word) {\n    if ("aeiou".includes(letter)) {\n      count = count + 1\n    }\n  }\n\n  return count\n}\n\nconsole.log(countVowels("documentation"))\n',
        check: {
          mode: "exact",
          lines: ["6"],
          require: [/function\s+countVowels\s*\(/]
        },
        bonusResources: [
          {
            label: "MDN: String includes",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes"
          }
        ]
      }
    ]
  },
  {
    module: "Chapter 2: Array Methods and Logic",
    lessons: [
      {
        id: "map-transform",
        title: "Transform Lists with map",
        summary:
          "`map` creates a new array by changing each item in an existing array.",
        explanation: [
          "Use `map` when you want a transformed copy of a list.",
          "The original array stays unchanged.",
          "Arrow functions are a short way to describe the transform rule."
        ],
        objectives: [
          "Use `map` with an arrow function.",
          "Print transformed values as a comma-separated line."
        ],
        syntaxMap: [
          {
            syntax: "const doubled = prices.map((price) => price * 2)",
            meaning: "Creates a new array where each value is multiplied by 2."
          },
          {
            syntax: "doubled.join(\",\")",
            meaning: "Converts the array into one printable string."
          }
        ],
        steps: [
          "Keep the `prices` array as is.",
          "Set `doubled` using `prices.map(...)`.",
          "Print `doubled.join(\",\")`."
        ],
        workedExample: {
          code: 'const nums = [1, 2, 3]\nconst plusOne = nums.map((n) => n + 1)\nconsole.log(plusOne.join(","))',
          note: "`map` runs once for each value and returns a new array."
        },
        task: "Double `[10, 20, 30]` using `map` and print `20,40,60`.",
        expectedOutput: "Expected Output: 20,40,60",
        hints: [
          "Map shape: `array.map((item) => newValue)`.",
          "Use `join(\",\")` so output appears on one line."
        ],
        starterCode:
          'const prices = [10, 20, 30]\nconst doubled = \nconsole.log()\n',
        solutionCode:
          'const prices = [10, 20, 30]\nconst doubled = prices.map((price) => price * 2)\nconsole.log(doubled.join(","))\n',
        check: {
          mode: "exact",
          lines: ["20,40,60"],
          require: [/\.map\s*\(/]
        },
        bonusResources: [
          {
            label: "MDN: Array.map",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
          }
        ]
      },
      {
        id: "filter-basics",
        title: "Keep Matching Items with filter",
        summary:
          "`filter` keeps only values that match a rule.",
        explanation: [
          "If the filter rule returns true, the item stays.",
          "If it returns false, the item is removed.",
          "This is useful for search, permissions, and list views."
        ],
        objectives: [
          "Use `filter` with a condition.",
          "Print only passing values."
        ],
        syntaxMap: [
          {
            syntax: "scores.filter((score) => score >= 60)",
            meaning: "Keeps only scores that are 60 or above."
          },
          {
            syntax: "passed.join(\",\")",
            meaning: "Prints kept scores in one line."
          }
        ],
        steps: [
          "Create `passed` from `scores.filter(...)`.",
          "Use condition `score >= 60`.",
          "Print `passed.join(\",\")`."
        ],
        workedExample: {
          code: 'const ages = [14, 18, 22]\nconst adults = ages.filter((age) => age >= 18)\nconsole.log(adults.join(","))',
          note: "Only 18 and 22 pass the rule."
        },
        task: "Filter `[40, 70, 55, 90]` to keep passing scores and print `70,90`.",
        expectedOutput: "Expected Output: 70,90",
        hints: [
          "Use `filter`, not `map`.",
          "The condition is `>= 60`."
        ],
        starterCode:
          'const scores = [40, 70, 55, 90]\nconst passed = \nconsole.log()\n',
        solutionCode:
          'const scores = [40, 70, 55, 90]\nconst passed = scores.filter((score) => score >= 60)\nconsole.log(passed.join(","))\n',
        check: {
          mode: "exact",
          lines: ["70,90"],
          require: [/\.filter\s*\(/]
        },
        bonusResources: [
          {
            label: "MDN: Array.filter",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
          }
        ]
      },
      {
        id: "function-object-label",
        title: "Functions That Format Data",
        summary:
          "Use a function to turn raw values into a display-ready line.",
        explanation: [
          "Formatting logic belongs in one function so you can reuse it.",
          "This pattern appears in cards, labels, and summary rows.",
          "Return the value from the function and print it outside."
        ],
        objectives: [
          "Write a formatting function.",
          "Return and print a final label."
        ],
        syntaxMap: [
          {
            syntax: "function formatProduct(name, price) { ... }",
            meaning: "Defines a reusable formatter."
          },
          {
            syntax: "return `${name} - $${price}`",
            meaning: "Builds final text from two inputs."
          }
        ],
        steps: [
          "Inside `formatProduct`, return one template literal.",
          "Use both `name` and `price` in that string.",
          "Print function result for `Notebook` and `12`."
        ],
        workedExample: {
          code: 'function formatUser(name, role) {\n  return `${name} (${role})`\n}\nconsole.log(formatUser("Mia", "student"))',
          note: "Function output can be directly plugged into UI text later."
        },
        task: "Print `Notebook - $12` using `formatProduct(name, price)`.",
        expectedOutput: "Expected Output: Notebook - $12",
        hints: [
          "Use backticks for `${...}` insertion.",
          "Do not hardcode the final full string."
        ],
        starterCode:
          'function formatProduct(name, price) {\n  \n}\n\nconsole.log(formatProduct("Notebook", 12))\n',
        solutionCode:
          'function formatProduct(name, price) {\n  return `${name} - $${price}`\n}\n\nconsole.log(formatProduct("Notebook", 12))\n',
        check: {
          mode: "exact",
          lines: ["Notebook - $12"],
          require: [/function\s+formatProduct\s*\(/, /return\s+/]
        },
        bonusResources: [
          {
            label: "MDN: return",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return"
          }
        ]
      },
      {
        id: "logical-operators",
        title: "Combine Conditions with OR",
        summary:
          "Logical operators let one rule check multiple possible cases.",
        explanation: [
          "`||` means OR: if either side is true, the full condition is true.",
          "You can use this for access checks and feature flags.",
          "Start with readable if/else code, then refactor later."
        ],
        objectives: [
          "Use `||` in an if condition.",
          "Return booleans for multiple test cases."
        ],
        syntaxMap: [
          {
            syntax: "if (ticketType === \"vip\" || hasPass) { ... }",
            meaning: "Allow access if any one condition passes."
          },
          {
            syntax: "console.log(values.join(\",\"))",
            meaning: "Shows boolean results in one line."
          }
        ],
        steps: [
          "Inside function, write one if/else using `||`.",
          "Return true for access and false otherwise.",
          "Keep the provided console line to verify all cases."
        ],
        workedExample: {
          code: 'function canEnter(age, invited) {\n  if (age >= 18 || invited) {\n    return true\n  } else {\n    return false\n  }\n}',
          note: "OR works well when there are multiple paths to success."
        },
        task:
          "Complete `canAccessVIP` so the final output line is `false,true,true`.",
        expectedOutput: "Expected Output: false,true,true",
        hints: [
          "Condition should include `ticketType === \"vip\" || hasPass`.",
          "Return booleans, not strings."
        ],
        starterCode:
          'function canAccessVIP(ticketType, hasPass) {\n  // write one if/else with OR\n}\n\nconst checks = [\n  canAccessVIP("regular", false),\n  canAccessVIP("regular", true),\n  canAccessVIP("vip", false)\n]\n\nconsole.log(checks.join(","))\n',
        solutionCode:
          'function canAccessVIP(ticketType, hasPass) {\n  if (ticketType === "vip" || hasPass) {\n    return true\n  } else {\n    return false\n  }\n}\n\nconst checks = [\n  canAccessVIP("regular", false),\n  canAccessVIP("regular", true),\n  canAccessVIP("vip", false)\n]\n\nconsole.log(checks.join(","))\n',
        check: {
          mode: "exact",
          lines: ["false,true,true"],
          require: [/\|\|/]
        },
        bonusResources: [
          {
            label: "MDN: Logical OR",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR"
          }
        ]
      }
    ]
  },
  {
    module: "Chapter 3: Combine Data and Build Mini Reports",
    lessons: [
      {
        id: "array-of-objects-total",
        title: "Loop Through Objects in an Array",
        summary:
          "Many real datasets are arrays of objects. You can aggregate totals by looping through them.",
        explanation: [
          "Each object can represent one item (post, product, user, etc.).",
          "Inside the loop, read a property and add it to a running total.",
          "This is a core pattern in dashboards and stats widgets."
        ],
        objectives: [
          "Read object properties inside a loop.",
          "Produce one total value."
        ],
        syntaxMap: [
          {
            syntax: "for (const post of posts) { totalLikes = totalLikes + post.likes }",
            meaning: "Adds each post's likes to the total."
          },
          {
            syntax: "post.likes",
            meaning: "Reads the `likes` property of the current object."
          }
        ],
        steps: [
          "Keep `let totalLikes = 0` before the loop.",
          "Inside loop, add `post.likes` to totalLikes.",
          "Print totalLikes after loop."
        ],
        workedExample: {
          code: 'const products = [{ price: 2 }, { price: 3 }]\nlet total = 0\nfor (const product of products) {\n  total = total + product.price\n}\nconsole.log(total)',
          note: "Same structure works for likes, totals, counts, and scores."
        },
        task: "Sum likes in `posts` and print `12`.",
        expectedOutput: "Expected Output: 12",
        hints: [
          "Use `post.likes` in the loop body.",
          "Print only once after loop completes."
        ],
        starterCode:
          'const posts = [{ likes: 2 }, { likes: 4 }, { likes: 6 }]\nlet totalLikes = 0\n\nfor (const post of posts) {\n  \n}\n\nconsole.log(totalLikes)\n',
        solutionCode:
          'const posts = [{ likes: 2 }, { likes: 4 }, { likes: 6 }]\nlet totalLikes = 0\n\nfor (const post of posts) {\n  totalLikes = totalLikes + post.likes\n}\n\nconsole.log(totalLikes)\n',
        check: {
          mode: "exact",
          lines: ["12"],
          require: [/for\s*\(/, /\.likes/]
        },
        bonusResources: [
          {
            label: "MDN: for...of",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of"
          }
        ]
      },
      {
        id: "text-report-from-object",
        title: "Build a Readable Report Line",
        summary:
          "Combine object data and array data into one clean sentence.",
        explanation: [
          "This mirrors profile headers and summary rows in apps.",
          "Use `join(\", \")` to format a list for display.",
          "Keep data separate from final text so code remains maintainable."
        ],
        objectives: [
          "Read object properties and array values.",
          "Generate one formatted sentence."
        ],
        syntaxMap: [
          {
            syntax: "user.skills.join(\", \")",
            meaning: "Turns an array into comma-separated text."
          },
          {
            syntax: "`${user.name} knows ${skillsText}`",
            meaning: "Builds a readable sentence with template literals."
          }
        ],
        steps: [
          "Create `skillsText` using `user.skills.join(\", \")`.",
          "Create `sentence` with template literal.",
          "Print sentence."
        ],
        workedExample: {
          code: 'const team = { name: "Blue", members: ["Ana", "Bo"] }\nconst names = team.members.join(", ")\nconsole.log(`${team.name}: ${names}`)',
          note: "`join` is a fast way to make readable list text."
        },
        task:
          "Print `Mia knows HTML, CSS, JavaScript` from the provided object.",
        expectedOutput: "Expected Output: Mia knows HTML, CSS, JavaScript",
        hints: [
          "Access name with `user.name`.",
          "Use `join(\", \")` to include spaces after commas."
        ],
        starterCode:
          'const user = {\n  name: "Mia",\n  skills: ["HTML", "CSS", "JavaScript"]\n}\n\nconst skillsText = \nconst sentence = \nconsole.log(sentence)\n',
        solutionCode:
          'const user = {\n  name: "Mia",\n  skills: ["HTML", "CSS", "JavaScript"]\n}\n\nconst skillsText = user.skills.join(", ")\nconst sentence = `${user.name} knows ${skillsText}`\nconsole.log(sentence)\n',
        check: {
          mode: "exact",
          lines: ["Mia knows HTML, CSS, JavaScript"],
          require: [/join\s*\(/, /user\.name/]
        },
        bonusResources: [
          {
            label: "MDN: Array.join",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
          }
        ]
      },
      {
        id: "function-map-reuse",
        title: "Reuse a Function with map",
        summary:
          "You can combine reusable functions and array methods for cleaner code.",
        explanation: [
          "Write one function for a single-item rule.",
          "Use `map` to apply that rule to every item.",
          "This is a common path from beginner code to production-style code."
        ],
        objectives: [
          "Build a reusable discount function.",
          "Use `map` to process multiple values."
        ],
        syntaxMap: [
          {
            syntax: "function finalPrice(price, discountPercent) { ... }",
            meaning: "Reusable rule for one price."
          },
          {
            syntax: "items.map((item) => finalPrice(item, 10))",
            meaning: "Applies function to every item."
          }
        ],
        steps: [
          "Return discounted result from `finalPrice`.",
          "Use `map` to create `afterDiscount` array.",
          "Print with `join(\",\")`."
        ],
        workedExample: {
          code: 'function plusTax(price) {\n  return price * 1.1\n}\nconst values = [10, 20]\nconsole.log(values.map((v) => plusTax(v)).join(","))',
          note: "Small helper functions make arrays easier to process."
        },
        task: "Apply 10% discount to `[100, 50]` and print `90,45`.",
        expectedOutput: "Expected Output: 90,45",
        hints: [
          "Discount formula: `price - (price * discountPercent / 100)`.",
          "Then map the items through `finalPrice`."
        ],
        starterCode:
          'function finalPrice(price, discountPercent) {\n  \n}\n\nconst items = [100, 50]\nconst afterDiscount = \nconsole.log(afterDiscount.join(","))\n',
        solutionCode:
          'function finalPrice(price, discountPercent) {\n  return price - (price * discountPercent / 100)\n}\n\nconst items = [100, 50]\nconst afterDiscount = items.map((item) => finalPrice(item, 10))\nconsole.log(afterDiscount.join(","))\n',
        check: {
          mode: "exact",
          lines: ["90,45"],
          require: [/function\s+finalPrice\s*\(/, /\.map\s*\(/]
        },
        bonusResources: [
          {
            label: "MDN: Arrow functions",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
          }
        ]
      },
      {
        id: "chapter3-final-challenge",
        title: "Chapter 3 Challenge: Cart Total",
        summary:
          "Final step for this chapter: calculate a real-style cart total from structured data.",
        explanation: [
          "Each cart item has `price` and `qty`.",
          "Multiply each item and add to `total`.",
          "This is a direct foundation for checkout and invoice logic."
        ],
        objectives: [
          "Read nested values from objects in an array.",
          "Compute and print a formatted total line."
        ],
        syntaxMap: [
          {
            syntax: "total = total + item.price * item.qty",
            meaning: "Adds one item's subtotal into full total."
          },
          {
            syntax: "console.log(`Total: ${total}`)",
            meaning: "Prints a user-facing total line."
          }
        ],
        steps: [
          "Start `total` at 0.",
          "Loop through `cart` with `for...of`.",
          "Inside loop, add each `price * qty`.",
          "Print `Total: 47`."
        ],
        workedExample: {
          code: 'const basket = [{ price: 2, qty: 3 }]\nlet total = 0\nfor (const row of basket) {\n  total = total + row.price * row.qty\n}\nconsole.log(`Total: ${total}`)',
          note: "Total line formatting helps connect logic to UI display."
        },
        task:
          "Calculate the provided cart total and print exactly `Total: 47`.",
        expectedOutput: "Expected Output: Total: 47",
        hints: [
          "Use both `item.price` and `item.qty` in the calculation.",
          "Print with template literal to match exact output."
        ],
        starterCode:
          'const cart = [\n  { name: "Book", price: 12, qty: 2 },\n  { name: "Pen", price: 3, qty: 5 },\n  { name: "Bag", price: 8, qty: 1 }\n]\n\nlet total = 0\n\nfor (const item of cart) {\n  \n}\n\nconsole.log()\n',
        solutionCode:
          'const cart = [\n  { name: "Book", price: 12, qty: 2 },\n  { name: "Pen", price: 3, qty: 5 },\n  { name: "Bag", price: 8, qty: 1 }\n]\n\nlet total = 0\n\nfor (const item of cart) {\n  total = total + item.price * item.qty\n}\n\nconsole.log(`Total: ${total}`)\n',
        check: {
          mode: "exact",
          lines: ["Total: 47"],
          require: [/for\s*\(/, /\.price/, /\.qty/]
        },
        bonusResources: [
          {
            label: "MDN: Working with objects",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects"
          }
        ]
      }
    ]
  },
  {
    module: "Chapter 4: Practical Data Workflows",
    lessons: [
      {
        id: "reduce-total-revenue",
        title: "Total Values with reduce",
        summary:
          "`reduce` combines many values into one final value.",
        explanation: [
          "`reduce` is perfect for totals, scores, and aggregates.",
          "It starts with an initial value (like 0), then updates through each item.",
          "This pattern appears in reports and dashboard cards."
        ],
        objectives: [
          "Use `reduce` with an accumulator.",
          "Print one final total."
        ],
        syntaxMap: [
          {
            syntax: "numbers.reduce((sum, n) => sum + n, 0)",
            meaning: "Starts from 0 and keeps adding each number."
          },
          {
            syntax: "console.log(total)",
            meaning: "Prints the aggregated final value."
          }
        ],
        steps: [
          "Write one `reduce` call on `revenues`.",
          "Use `sum + value` as the update logic.",
          "Start from `0` and print the result."
        ],
        workedExample: {
          code: 'const points = [3, 4, 5]\nconst total = points.reduce((sum, p) => sum + p, 0)\nconsole.log(total)',
          note: "The second `0` is the initial accumulator value."
        },
        task: "Use `reduce` on `[12, 8, 15]` and print `35`.",
        expectedOutput: "Expected Output: 35",
        hints: [
          "Shape: `array.reduce((acc, item) => ..., 0)`.",
          "Accumulator should add each current value."
        ],
        starterCode:
          'const revenues = [12, 8, 15]\nconst total = \nconsole.log(total)\n',
        solutionCode:
          'const revenues = [12, 8, 15]\nconst total = revenues.reduce((sum, value) => sum + value, 0)\nconsole.log(total)\n',
        check: {
          mode: "exact",
          lines: ["35"],
          require: [/\.reduce\s*\(/]
        },
        bonusResources: [
          {
            label: "MDN: Array.reduce",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
          }
        ]
      },
      {
        id: "find-single-object",
        title: "Find One Object in a List",
        summary:
          "`find` returns the first item that matches a rule.",
        explanation: [
          "Use `find` when you need one specific record.",
          "If nothing matches, `find` returns `undefined`.",
          "This is useful for selecting by id, slug, or name."
        ],
        objectives: [
          "Use `find` with object data.",
          "Read properties from the matched object."
        ],
        syntaxMap: [
          {
            syntax: "items.find((item) => item.name === \"Keyboard\")",
            meaning: "Gets the first object where name matches Keyboard."
          },
          {
            syntax: "match.stock",
            meaning: "Reads a property from the found object."
          }
        ],
        steps: [
          "Create `found` with a `find` call.",
          "Match where `item.name` is `Keyboard`.",
          "Print `Keyboard:5` using `found.name` and `found.stock`."
        ],
        workedExample: {
          code: 'const users = [{ name: "Ana" }, { name: "Bo" }]\nconst found = users.find((user) => user.name === "Bo")\nconsole.log(found.name)',
          note: "`find` stops at the first successful match."
        },
        task: "Find the keyboard item and print `Keyboard:5`.",
        expectedOutput: "Expected Output: Keyboard:5",
        hints: [
          "Use strict equality in the condition: `===`.",
          "Build line with `found.name + \":\" + found.stock`."
        ],
        starterCode:
          'const inventory = [\n  { name: "Mouse", stock: 9 },\n  { name: "Keyboard", stock: 5 },\n  { name: "Monitor", stock: 2 }\n]\n\nconst found = \nconsole.log()\n',
        solutionCode:
          'const inventory = [\n  { name: "Mouse", stock: 9 },\n  { name: "Keyboard", stock: 5 },\n  { name: "Monitor", stock: 2 }\n]\n\nconst found = inventory.find((item) => item.name === "Keyboard")\nconsole.log(found.name + ":" + found.stock)\n',
        check: {
          mode: "exact",
          lines: ["Keyboard:5"],
          require: [/\.find\s*\(/]
        },
        bonusResources: [
          {
            label: "MDN: Array.find",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
          }
        ]
      },
      {
        id: "sort-and-map-names",
        title: "Sort Data and Extract Labels",
        summary:
          "You can sort objects by a numeric property, then map into display text.",
        explanation: [
          "Sort lets you order values before rendering.",
          "Comparator `(a, b) => b.score - a.score` sorts highest to lowest.",
          "After sorting, `map` can extract only what UI needs."
        ],
        objectives: [
          "Sort objects by one field.",
          "Map sorted objects to a name list."
        ],
        syntaxMap: [
          {
            syntax: "players.sort((a, b) => b.score - a.score)",
            meaning: "Orders players from highest score to lowest."
          },
          {
            syntax: "players.map((player) => player.name)",
            meaning: "Creates an array of names only."
          }
        ],
        steps: [
          "Sort `players` descending by score.",
          "Map sorted list to `names`.",
          "Print `names.join(\",\")`."
        ],
        workedExample: {
          code: 'const items = [{ n: "A", v: 2 }, { n: "B", v: 5 }]\nitems.sort((a, b) => b.v - a.v)\nconsole.log(items.map((item) => item.n).join(","))',
          note: "Sorting changes the original array order."
        },
        task: "Sort by score and print `Nia,Sam,Lee`.",
        expectedOutput: "Expected Output: Nia,Sam,Lee",
        hints: [
          "Comparator for descending: `b.score - a.score`.",
          "Then map to `player.name`."
        ],
        starterCode:
          'const players = [\n  { name: "Sam", score: 18 },\n  { name: "Nia", score: 25 },\n  { name: "Lee", score: 12 }\n]\n\n\nconsole.log()\n',
        solutionCode:
          'const players = [\n  { name: "Sam", score: 18 },\n  { name: "Nia", score: 25 },\n  { name: "Lee", score: 12 }\n]\n\nplayers.sort((a, b) => b.score - a.score)\nconst names = players.map((player) => player.name)\nconsole.log(names.join(","))\n',
        check: {
          mode: "exact",
          lines: ["Nia,Sam,Lee"],
          require: [/\.sort\s*\(/, /\.map\s*\(/]
        },
        bonusResources: [
          {
            label: "MDN: Array.sort",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
          }
        ]
      },
      {
        id: "chapter4-mini-analytics",
        title: "Chapter 4 Challenge: Mini Analytics Summary",
        summary:
          "Combine filter and reduce to create a compact analytics output.",
        explanation: [
          "You will select only sales transactions.",
          "Then compute total revenue from those sales.",
          "This mirrors backend/frontend reporting features."
        ],
        objectives: [
          "Filter for matching records.",
          "Reduce filtered records into a total.",
          "Print multiple lines as a report."
        ],
        syntaxMap: [
          {
            syntax: "records.filter((row) => row.type === \"sale\")",
            meaning: "Keeps only rows tagged as sales."
          },
          {
            syntax: "sales.reduce((sum, row) => sum + row.amount, 0)",
            meaning: "Adds all sale amounts into a revenue total."
          }
        ],
        steps: [
          "Create `sales` with a filter for type `sale`.",
          "Create `revenue` with reduce over `sales`.",
          "Print `Sales:3` and `Revenue:52` on separate lines."
        ],
        workedExample: {
          code: 'const rows = [{ amount: 2 }, { amount: 3 }]\nconst total = rows.reduce((sum, row) => sum + row.amount, 0)\nconsole.log(total)',
          note: "Build smaller pieces first (`sales`, then `revenue`)."
        },
        task:
          "Filter sales and print exactly two lines: `Sales:3` and `Revenue:52`.",
        expectedOutput: "Expected Output (2 lines): Sales:3, then Revenue:52",
        hints: [
          "Use `sales.length` for sale count.",
          "Print two separate `console.log(...)` lines."
        ],
        starterCode:
          'const transactions = [\n  { type: "sale", amount: 20 },\n  { type: "refund", amount: -5 },\n  { type: "sale", amount: 15 },\n  { type: "sale", amount: 17 }\n]\n\nconst sales = \nconst revenue = \n\nconsole.log()\nconsole.log()\n',
        solutionCode:
          'const transactions = [\n  { type: "sale", amount: 20 },\n  { type: "refund", amount: -5 },\n  { type: "sale", amount: 15 },\n  { type: "sale", amount: 17 }\n]\n\nconst sales = transactions.filter((row) => row.type === "sale")\nconst revenue = sales.reduce((sum, row) => sum + row.amount, 0)\n\nconsole.log(`Sales:${sales.length}`)\nconsole.log(`Revenue:${revenue}`)\n',
        check: {
          mode: "exact",
          lines: ["Sales:3", "Revenue:52"],
          require: [/\.filter\s*\(/, /\.reduce\s*\(/]
        },
        bonusResources: [
          {
            label: "MDN: Array methods overview",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
          }
        ]
      }
    ]
  }
];

const lessons = course.flatMap((group) =>
  group.lessons.map((lesson) => ({ ...lesson, module: group.module }))
);
const lessonIds = lessons.map((lesson) => lesson.id);
const lessonIdSet = new Set(lessonIds);
const courseVersion = "v4";
const progressTemplatePath = "./lesson-progress.json";

const elements = {
  lessonNav: document.querySelector("#lesson-nav"),
  progressLabel: document.querySelector("#progress-label"),
  resetProgress: document.querySelector("#reset-progress"),
  downloadProgress: document.querySelector("#download-progress"),
  moduleTitle: document.querySelector("#module-title"),
  lessonTitle: document.querySelector("#lesson-title"),
  objectives: document.querySelector("#objectives"),
  lessonSummary: document.querySelector("#lesson-summary"),
  explanationContent: document.querySelector("#explanation-content"),
  lessonExplanation: document.querySelector("#lesson-explanation"),
  syntaxMap: document.querySelector("#syntax-map"),
  guidedSteps: document.querySelector("#guided-steps"),
  workedExample: document.querySelector("#worked-example"),
  exampleNote: document.querySelector("#example-note"),
  lessonResources: document.querySelector("#lesson-resources"),
  taskText: document.querySelector("#task-text"),
  expectedOutput: document.querySelector("#expected-output"),
  hints: document.querySelector("#hints"),
  editor: document.querySelector("#code-editor"),
  output: document.querySelector("#output"),
  feedback: document.querySelector("#feedback"),
  solution: document.querySelector("#solution"),
  prevLesson: document.querySelector("#prev-lesson"),
  nextLesson: document.querySelector("#next-lesson"),
  runCode: document.querySelector("#run-code"),
  checkTask: document.querySelector("#check-task"),
  resetCode: document.querySelector("#reset-code"),
  toggleHints: document.querySelector("#toggle-hints"),
  toggleSolution: document.querySelector("#toggle-solution"),
  toggleExplanation: document.querySelector("#toggle-explanation")
};

const storageKey = "js-learning-lab-progress-v4";
const state = {
  currentIndex: 0,
  showHints: false,
  showSolution: false,
  showExplanation: true,
  drafts: {},
  progress: loadProgress(),
  lastRun: null
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      return new Set();
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return new Set(parsed.filter((id) => lessonIdSet.has(id)));
    }
    if (parsed && Array.isArray(parsed.completedLessonIds)) {
      return new Set(parsed.completedLessonIds.filter((id) => lessonIdSet.has(id)));
    }
    return new Set();
  } catch (error) {
    return new Set();
  }
}

function getProgressSnapshot() {
  const completionByLesson = {};
  lessonIds.forEach((id) => {
    completionByLesson[id] = state.progress.has(id);
  });

  return {
    courseVersion,
    totalLessons: lessons.length,
    completedLessons: state.progress.size,
    completedLessonIds: Array.from(state.progress),
    completionByLesson,
    lastUpdated: new Date().toISOString()
  };
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(getProgressSnapshot()));
}

function downloadProgressJson() {
  const snapshot = getProgressSnapshot();
  const payload = JSON.stringify(snapshot, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "lesson-progress.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function initializeProgressFromFile() {
  if (state.progress.size > 0) {
    return;
  }
  try {
    const response = await fetch(progressTemplatePath, { cache: "no-store" });
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    if (data && Array.isArray(data.completedLessonIds)) {
      state.progress = new Set(
        data.completedLessonIds.filter((id) => lessonIdSet.has(id))
      );
      saveProgress();
    }
  } catch (error) {
    // file:// mode or blocked fetch; localStorage remains the fallback
  }
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
        state.showSolution = false;
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
  elements.taskText.textContent = lesson.task;
  elements.expectedOutput.textContent = lesson.expectedOutput;

  elements.objectives.innerHTML = "";
  lesson.objectives.forEach((objective) => {
    const li = document.createElement("li");
    li.textContent = objective;
    elements.objectives.appendChild(li);
  });

  elements.lessonExplanation.innerHTML = "";
  lesson.explanation.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    elements.lessonExplanation.appendChild(p);
  });

  elements.syntaxMap.innerHTML = "";
  lesson.syntaxMap.forEach((item) => {
    const li = document.createElement("li");
    const code = document.createElement("code");
    const desc = document.createElement("span");

    code.textContent = item.syntax;
    desc.textContent = item.meaning;

    li.appendChild(code);
    li.appendChild(desc);
    elements.syntaxMap.appendChild(li);
  });

  elements.guidedSteps.innerHTML = "";
  lesson.steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    elements.guidedSteps.appendChild(li);
  });

  elements.workedExample.textContent = lesson.workedExample.code;
  elements.exampleNote.textContent = lesson.workedExample.note;

  elements.lessonResources.innerHTML = "";
  lesson.bonusResources.forEach((resource) => {
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

  const savedDraft = state.drafts[lesson.id];
  elements.editor.value =
    typeof savedDraft === "string" ? savedDraft : lesson.starterCode;

  elements.solution.textContent = lesson.solutionCode;

  if (state.showHints) {
    elements.hints.classList.remove("hidden");
    elements.toggleHints.textContent = "Hide hints";
  } else {
    elements.hints.classList.add("hidden");
    elements.toggleHints.textContent = "Show hints";
  }

  if (state.showSolution) {
    elements.solution.classList.remove("hidden");
    elements.toggleSolution.textContent = "Hide solution";
  } else {
    elements.solution.classList.add("hidden");
    elements.toggleSolution.textContent = "Show solution";
  }

  if (state.showExplanation) {
    elements.explanationContent.classList.remove("hidden");
    elements.toggleExplanation.textContent = "Hide explanation";
  } else {
    elements.explanationContent.classList.add("hidden");
    elements.toggleExplanation.textContent = "Show explanation";
  }

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
    error: (...args) => output.push(`ERROR: ${args.map(formatValue).join(" ")}`)
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

function normalizeLines(lines) {
  return lines.map((line) => line.trim());
}

function evaluateLesson(lesson, code, result) {
  if (result.error) {
    return fail(
      "There is a syntax/runtime error. Use hints or solution, then run again."
    );
  }

  if (lesson.check.require) {
    for (const pattern of lesson.check.require) {
      if (!pattern.test(code)) {
        return fail("Output is close, but key lesson syntax is missing. Check the step list.");
      }
    }
  }

  const actual = normalizeLines(result.output);
  const expected = normalizeLines(lesson.check.lines);

  if (lesson.check.mode === "exact") {
    if (actual.length < expected.length) {
      return fail(`Not enough output lines. ${lesson.expectedOutput}`);
    }

    for (let i = 0; i < expected.length; i += 1) {
      if (actual[i] !== expected[i]) {
        return fail(`Output mismatch. ${lesson.expectedOutput}`);
      }
    }

    return pass("Task complete. Move to the next lesson when ready.");
  }

  return fail("Could not evaluate this lesson.");
}

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

  const evaluation = evaluateLesson(lesson, code, result);

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
    state.showSolution = false;
    state.showExplanation = true;
    render();
  }
});

elements.nextLesson.addEventListener("click", () => {
  if (state.currentIndex < lessons.length - 1) {
    state.currentIndex += 1;
    state.showHints = false;
    state.showSolution = false;
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

elements.toggleSolution.addEventListener("click", () => {
  state.showSolution = !state.showSolution;
  if (state.showSolution) {
    elements.solution.classList.remove("hidden");
    elements.toggleSolution.textContent = "Hide solution";
  } else {
    elements.solution.classList.add("hidden");
    elements.toggleSolution.textContent = "Show solution";
  }
});

elements.toggleExplanation.addEventListener("click", () => {
  state.showExplanation = !state.showExplanation;
  if (state.showExplanation) {
    elements.explanationContent.classList.remove("hidden");
    elements.toggleExplanation.textContent = "Hide explanation";
  } else {
    elements.explanationContent.classList.add("hidden");
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

elements.downloadProgress.addEventListener("click", downloadProgressJson);

async function initializeApp() {
  await initializeProgressFromFile();
  render();
}

initializeApp();
