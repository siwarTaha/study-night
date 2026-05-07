const createElement = (elementType, text) => {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

const createImage = (url, alt) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = alt;
  return img;
};

const createHeader = (headerType, text, dataCy) => {
  const header = document.createElement(headerType);
  header.textContent = text;
  header.setAttribute("data-cy", dataCy);
  return header;
};

const createToggleButton = (text, element) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", () => {
    element.classList.toggle("notVisible");
  });

  return button;
};

const createLabel = (text, htmlFor) => {
  const label = document.createElement("label");
  label.textContent = text;
  label.setAttribute("for", htmlFor);
  return label;
};

const createInput = (name) => {
  const input = document.createElement("input");
  input.type = "text";
  input.name = name;
  input.id = name;

  if (name === "titleInput") {
    input.setAttribute("data-cy", "create-set-input");
  } else if (name === "termInput") {
    input.setAttribute("data-cy", "card-front-input");
  } else if (name === "descriptionInput") {
    input.setAttribute("data-cy", "card-back-input");
  }

  return input;
};

const createSubmitButton = (value) => {
  const submit = document.createElement("input");
  submit.type = "submit";
  submit.value = value;

  if (value === "Submit Set") {
    submit.setAttribute("data-cy", "create-set-submit");
  } else if (value === "Add Card") {
    submit.setAttribute("data-cy", "add-card-submit");
  }

  return submit;
};

export {
  createElement,
  createImage,
  createHeader,
  createToggleButton,
  createLabel,
  createInput,
  createSubmitButton,
};
