import "./menuPage.css";

export function loadMenu() {

    const content = document.querySelector("#content");

    const menuContentContainer = document.createElement("div");
    menuContentContainer.classList.add("menu-content-container");

    const menuContainerHeading = document.createElement("h2");
    menuContainerHeading.textContent = "Dive Into Delicious Meal Dishes";
    menuContainerHeading.classList.add("menu-container-heading");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const image1 = document.createElement("img");
    image1.src = "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const image2 = document.createElement("img");
    image2.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const image3 = document.createElement("img");
    image3.src = "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?q=80&w=1238&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    imageContainer.append(image2, image1, image3);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuHeading1 = document.createElement("h3");
    menuHeading1.classList.add("menu-heading1");
    menuHeading1.textContent = "Starter Menu";

    menuContainer.appendChild(menuHeading1);


    for (let i = 0; i < 9; i++) {
        const card = document.createElement("div");
        card.classList.add("card");

        const dishInfo = document.createElement("div");
        dishInfo.classList.add("dish-info");

        const dishTitle = document.createElement("p");
        dishTitle.classList.add("dish-title");
        dishTitle.textContent = "Crispy Noodles";

        const info = document.createElement("p");
        info.classList.add("info");
        info.textContent = "lorem ipsum dimsum";

        const price = document.createElement("div");
        price.classList.add("price");
        price.textContent = "$70";

        dishInfo.append(dishTitle, info);
        card.append(dishInfo, price);

        menuContainer.appendChild(card);
    }

    const menuHeading2 = document.createElement("h3");
    menuHeading2.classList.add("menu-heading2");
    menuHeading2.textContent = "Lunch Special Menu";

    menuContainer.appendChild(menuHeading2);

    for (let i = 0; i < 9; i++) {
        const card = document.createElement("div");
        card.classList.add("card");

        const dishInfo = document.createElement("div");
        dishInfo.classList.add("dish-info");

        const dishTitle = document.createElement("p");
        dishTitle.classList.add("dish-title");
        dishTitle.textContent = "Butter Paneer Masala";

        const info = document.createElement("p");
        info.classList.add("info");
        info.textContent = "lorem ipsum dimsum";

        const price = document.createElement("div");
        price.classList.add("price");
        price.textContent = "$130";

        dishInfo.append(dishTitle, info);
        card.append(dishInfo, price);

        menuContainer.appendChild(card);
    }


    const menuHeading3 = document.createElement("h3");
    menuHeading3.classList.add("menu-heading3");
    menuHeading3.textContent = "Dinner Special Menu";

    menuContainer.appendChild(menuHeading3);

    for (let i = 0; i < 9; i++) {
        const card = document.createElement("div");
        card.classList.add("card");

        const dishInfo = document.createElement("div");
        dishInfo.classList.add("dish-info");

        const dishTitle = document.createElement("p");
        dishTitle.classList.add("dish-title");
        dishTitle.textContent = "Chicken 65";

        const info = document.createElement("p");
        info.classList.add("info");
        info.textContent = "lorem ipsum dimsum";

        const price = document.createElement("div");
        price.classList.add("price");
        price.textContent = "$200";

        dishInfo.append(dishTitle, info);
        card.append(dishInfo, price);

        menuContainer.appendChild(card);
    }

    menuContentContainer.appendChild(menuContainerHeading);
    menuContentContainer.appendChild(imageContainer);
    menuContentContainer.appendChild(menuContainer);

    content.appendChild(menuContentContainer);
}