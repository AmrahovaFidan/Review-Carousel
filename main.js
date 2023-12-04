let container = document.querySelector(".container");
let img = document.querySelector(".img");
let name = document.querySelector(".name");
let job = document.querySelector(".job");
let about = document.querySelector(".about");
let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");
let card = document.querySelector(".card");


//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
const object = [
    {
        imgUrl: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
        fullName: "Susan Smith",
        job: "WEB DEVOLOPER",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti idconsequatur quisquam rem? Doloremque dolore facere ipsum sapiente, deleniti minima earum nonobcaecati dicta. Eaque, nam deleniti? Perspiciatis illo, nobis incidunt iusto dicta eligendi reiciendis et voluptas quod quia, mollitia, nulla nesciunt. Sit id numquam ipsam nam alias tempore."
    },

    {
        imgUrl: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
        fullName: "John Khan",
        job: "GRAPHIC DESIGNER",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti idconsequatur quisquam rem? Doloremque dolore facere ipsum sapiente, deleniti minima earum nonobcaecati dicta. Eaque, nam deleniti? Perspiciatis illo, nobis incidunt iusto dicta eligendi reiciendis et voluptas quod quia, mollitia, nulla nesciunt. Sit id numquam ipsam nam alias tempore."
    },

    {
        imgUrl: "https://digitalasset.intuit.com/content/dam/intuit/pcg/en_ca/profile/web/image/photos/grinning-man-with-coffee-image-profile-ca-desktop.jpg",
        fullName: "Selin Diana",
        job: "WEB DEVOLOPER",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti idconsequatur quisquam rem? Doloremque dolore facere ipsum sapiente, deleniti minima earum nonobcaecati dicta. Eaque, nam deleniti? Perspiciatis illo, nobis incidunt iusto dicta eligendi reiciendis et voluptas quod quia, mollitia, nulla nesciunt. Sit id numquam ipsam nam alias tempore."
    },
];

// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
let number = 0;
backBtn.addEventListener("click", function () {
    if (number <= 0) {
        number = 0;
    }
    else if (number > 0) {
        number -= 1;

    }
});
nextBtn.addEventListener("click", function () {
    if (number < object.length - 1) {
        number += 1
        object[number];
        show()


    }
})


function show() {
    for (let i = 0; i < object.length; i++) {
        return card.innerHTML = `
        <div class="container">
        <div class="imgContainer">
        <div class="circle">
            <img src="${object[number].imgUrl}" alt="img" class="img" width="193px">
        </div>
    </div>
    <div class="namePart">
        <div class="name">${object[number].fullName}</div>
        <div class="job">${object[number].job}</div>
    </div>
    <div class="about">${object[number].about}
    </div>
    </div>
    <div class="btn">
        <button id="backBtn">&#x276E</button>
        <button id="nextBtn">&#x276F</button>
    </div>
    `;
    }

}
























// nextBtn.addEventListener("click", function () {
//     let newArr = object.map((item, index) => {
//         return `<div class="imgContainer">
//         <div class="circle">
//             <img src="${item.imgUrl}" alt="img" class="img" width="193px">
//         </div>
//     </div>
//     <div class="namePart">
//         <div class="name">${item.fullName}</div>
//         <div class="job">${item.job}</div>
//     </div>
//     <div class="about">${item.about}
//     </div>`;
//     }).join("");

//     card.innerHTML=newArr;
//     console.log(object);
// });