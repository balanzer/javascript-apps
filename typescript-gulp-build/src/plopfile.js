/**
 * Validation functions
 * @param {} year
 * @returns
 */

const isValidYear = (year) => {
  return (value) => {
    if (!!value && value.trim().length == 4) {
      return true;
    }
    return year + " is required";
  };
};

/**
 * Plop generator
 * @param {} plop
 */
export default function (plop) {
  //set helpers
  plop.setHelper("upperCase", (txt) => txt.toUpperCase());

  plop.setHelper("leadingZeros", (testNumber) => {
    if (testNumber < 10000) {
      return `0${testNumber}`;
    }
    return testNumber;
  });

  // controller generator
  plop.setGenerator("module", {
    description: "application controller logic",
    prompts: [
      {
        type: "list",
        name: "year",
        message: "Select test year : ",
        default: "none",
        choices: [
          { name: "2024", value: "2024" },
          { name: "2025", value: "2025" },
          { name: "2026", value: "2026" },
        ],
      },
      {
        type: "input",
        name: "testNumber",
        message: "Enter test number between 01 to 99 : ",
        validate: function (value) {
          var digitsOnly = /\d+/;
          if (digitsOnly.test(value)) {
            const numval = parseInt(value);
            if (numval > 0 && numval <= 99) {
              return true;
            }
          }
          return "Invalid test number ! Must be between 01 to 99";
        },
      },
    ],

    actions: [
      {
        type: "add",
        path: "src-genrated/{{year}}.js",
        templateFile: "src-templates/controller.txt",
        abortOnFail: true,
        skipIfExists: true,
      },
    ],
  });
}
