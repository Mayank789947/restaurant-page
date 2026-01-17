import "./homepage.css";

export function homePage() {

    const homeNavBtn = document.querySelector(".home");
    homeNavBtn.classList.add("active");

    const content = document.querySelector("#content");

    const homePageContent = document.createElement("div");
    homePageContent.classList.add("homePageContent");

    const rating = document.createElement("div")
    rating.textContent = "💖 Loved by 3.8k users with 4.9 rating";
    rating.classList.add("rating-box"); 

    const heading = document.createElement("h1");
    heading.textContent = "Welcome To Food Heaven Where Flavor Meets Excellence!";
    heading.classList.add("home-heading");

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "View Menu 🥜";
    menuBtn.classList.add("menu-btn");

    const heroImage = document.createElement("img");
    heroImage.src = "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    heroImage.classList.add("hero-img");

    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("bottom-div");
    
    const leftDiv = document.createElement("div");
    leftDiv.classList.add("left-div");

    const rightDiv = document.createElement("div");
    rightDiv.classList.add("right-div");

    const leftDivHeading = document.createElement("h2");
    leftDivHeading.textContent = "A healthier way now has a seat at the table";
    leftDivHeading.classList.add("left-div-heading");

    const subText = document.createElement("p");
    subText.textContent = "Take advantage of exclusive deals and packages designed to elevate your stay. Whether it's a romantic date or family get-together."
    subText.classList.add("sub-text");

    const infoList = document.createElement("ul");
    infoList.classList.add("info-list");

    const listItem1 = document.createElement("li");
    const listText1 = document.createElement("span");
    listText1.textContent = "Whatever your taste, we have something for everyone.";
    listItem1.appendChild(listText1);

    const listItem2 = document.createElement("li");
    const listText2 = document.createElement("span");
    listText2.textContent = "Ordering is a browse, select and pay securely - all from the comfort.";
    listItem2.appendChild(listText2);

    const listItem3 = document.createElement("li");
    const listText3 = document.createElement("span");
    listText3.textContent = "Save more with special promotions and discounts.";
    listItem3.appendChild(listText3);

    infoList.append(listItem1, listItem2, listItem3);

    const bottomDivMenuBtn = document.createElement("button");
    bottomDivMenuBtn.textContent = "View Menu 🥜";
    bottomDivMenuBtn.classList.add("menu-btn");

    leftDiv.appendChild(leftDivHeading);
    leftDiv.appendChild(subText);
    leftDiv.appendChild(infoList);
    leftDiv.appendChild(bottomDivMenuBtn);

    const rightDivImage = document.createElement("img");
    rightDivImage.classList.add("right-div-img");
    rightDivImage.src = "https://images.unsplash.com/photo-1556742205-e10c9486e506?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    rightDiv.appendChild(rightDivImage);
    

    homePageContent.appendChild(rating);
    homePageContent.appendChild(heading);
    homePageContent.appendChild(menuBtn);
    homePageContent.appendChild(heroImage);
    homePageContent.appendChild(bottomDiv);
    bottomDiv.appendChild(leftDiv);
    bottomDiv.appendChild(rightDiv);

    content.appendChild(homePageContent);
}