const isValidYear = year => {
  return value => {
    if (!!value && value.trim().length == 4) {
      return true;
    }
    return year + " is required";
  };
};

export default function (plop) {
  // controller generator
  plop.setGenerator("module", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "year",
        message: "What Year?",
        validate: isValidYear("year"),
      },
      {
        type: "list",
        name: "dataConfig",
        message: "Tell me about the data, what do you need?",
        default: "none",
        choices: [
          { name: "A", value: "A" },
          { name: "B", value: "B" },
          { name: "C", value: "C" },
          { name: "D", value: "D" },
        ],
      },
    ],
    actions: [
      {
        type: "add",
        path: "src-genrated/{{year}}.js",
        templateFile: "src-templates/controller.hbs",
      },
    ],
  });
}
