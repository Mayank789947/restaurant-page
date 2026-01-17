import "./about.css";

export function loadAbout() {

    const aboutNavBtn = document.querySelector(".about");
    aboutNavBtn.classList.add("active");

    const content = document.querySelector("#content");

    const aboutContent = document.createElement("div");
    aboutContent.classList.add("about-content");

    const aboutHeading = document.createElement("h2");
    aboutHeading.classList.add("about-heading");
    aboutHeading.textContent = "About Us";

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const aboutLeftContainer = document.createElement("div");
    const aboutRightContainer = document.createElement("div");

    const leftContainerImage = document.createElement("img");
    leftContainerImage.classList.add("left-container-image");
    leftContainerImage.src = "https://images.unsplash.com/photo-1538334421852-687c439c92f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const rightContainerContent = document.createElement("div");
    rightContainerContent.classList.add("right-container-content");
    rightContainerContent.textContent = "At our restaurant, food is more than a meal—it’s an experience. We’re passionate about serving fresh, flavorful dishes made with quality ingredients and a lot of heart. Whether you’re joining us for a quick bite or a special gathering, our goal is to make you feel at home with great food and friendly service every time you visit.";


    aboutLeftContainer.appendChild(leftContainerImage);
    aboutRightContainer.appendChild(rightContainerContent); 

    aboutContainer.append(aboutLeftContainer, aboutRightContainer);

    aboutContent.appendChild(aboutHeading);
    aboutContent.appendChild(aboutContainer);

    content.appendChild(aboutContent);
}