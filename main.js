const createCard = () => {
    const mainContainer = document.body.querySelector(".container");

    const cardDiv = document.createElement("div");
    cardDiv.id = "card";

    const heading = document.createElement("h2");
    heading.textContent = "Thom Yorke";

    const image = document.createElement("img");
    image.src = "./images/profile.jpg";
    image.id = "profileImg";

    const description = document.createElement("p");
    description.textContent = "Radiohead's lead singer";
    description.id = "description";

    const anchor = document.createElement("a");
    anchor.href = "https://www.radiohead.com/library/#ir";
    anchor.textContent = "Go to profile";
    anchor.id = "hrefAnchor";

    cardDiv.appendChild(heading);
    cardDiv.appendChild(image);
    cardDiv.appendChild(description);
    cardDiv.appendChild(anchor);

    mainContainer.appendChild(cardDiv);
};

createCard();
