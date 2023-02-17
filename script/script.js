let bannerVideo = document.querySelector(".banner-video"),
    bannerOverlay = document.querySelector(".banner .overlay"),
    banner = document.querySelector(".banner");

banner.addEventListener("mouseover", (e) => {
    let currentTarget = e.currentTarget;

    if (currentTarget.classList.contains("banner")) {
        bannerVideo.play();
    }
});

// banner.addEventListener('mouseout', () => {
//     bannerVideo.pause();
// })

// setTimeout(() => {
//     bannerVideo.play();
// }, 5000);

let trucksAmount = document
        .querySelector(".transportation img.truck")
        .getAttribute("data-amountOfImg"),
    trucks = document.querySelector(".transportation img.truck"),
    truckNextBtn = document.querySelector(".transportation .controls .next"),
    truckPrevBtn = document.querySelector(".transportation .controls .prev");

let counter = 1;

truckNextBtn.addEventListener("click", () => {
    if (counter == trucksAmount) {
        trucks.setAttribute(
            "src",
            `./images/section(transportation)/truck-${(counter = 1)}.png`
        );
    } else {
        trucks.setAttribute(
            "src",
            `./images/section(transportation)/truck-${++counter}.png`
        );
    }
});

truckPrevBtn.addEventListener("click", () => {
    if (counter == 1) {
        trucks.setAttribute(
            "src",
            `./images/section(transportation)/truck-${(counter =
                trucksAmount)}.png`
        );
    } else {
        trucks.setAttribute(
            "src",
            `./images/section(transportation)/truck-${--counter}.png`
        );
    }
});

let statisticsBlock = document.querySelectorAll(".about-statistics__block");

statisticsBlock.forEach((block) => {
    block.addEventListener("click", () => {
        

        let backSide = block.querySelector(".backSide");


        if (block.classList.contains("active")) {
            block.classList.remove("active");
            backSide.classList.add("hidden");
            console.log(true);
        } else {
            document.querySelectorAll("section.about .backSide").forEach((item) => {
                item.classList.add("hidden");
            });
    
            statisticsBlock.forEach((block) => {
                block.classList.remove("active");
            });

            
            block.classList.add("active");
            backSide.classList.remove("hidden");
            console.log(false);
        }
    });
});
