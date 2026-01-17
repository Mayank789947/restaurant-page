import "./contact.css";

export function loadContact() {

    const contactNavBtn = document.querySelector(".contact");
    contactNavBtn.classList.add("active");

    const content = document.querySelector("#content");

    const contactContent = document.createElement("div");
    contactContent.classList.add("contact-content");

    const contactHeading = document.createElement("h2");
    contactHeading.classList.add("contact-heading");
    contactHeading.textContent = "Contact Us";

    const contactContainer = document.createElement("div");
    const contactForm = document.createElement("form");
    contactForm.classList.add("contact-form");

    const row1 = document.createElement("div");
    row1.classList.add("row");
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    nameLabel.htmlFor = "user-name";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "user-name";

    row1.append(nameLabel, nameInput);

    const row2 = document.createElement("div");
    row2.classList.add("row");
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    emailLabel.htmlFor = "email";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.required = true;

    row2.append(emailLabel, emailInput);

    const row3 = document.createElement("div");
    row3.classList.add("row");

    const messageLabel = document.createElement("label");
    messageLabel.textContent = "Message:";
    messageLabel.htmlFor = "message";

    const message = document.createElement("textarea");
    message.id = "message";
    message.required = "true";
    message.placeholder = "Enter your message...";
    message.rows = "10";

    row3.append(messageLabel, message);

    const sendBtn = document.createElement("button");
    sendBtn.classList.add("send-btn");
    sendBtn.textContent = "Send";

    contactForm.append(row1, row2, row3, sendBtn);

    contactContainer.appendChild(contactForm);

    contactContent.append(contactHeading, contactForm);

    content.appendChild(contactContent);
}