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
        imgUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8",
        fullName: "Mister Smith",
        job: "WEB DEVOLOPER",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti idconsequatur quisquam rem? Doloremque dolore facere ipsum sapiente, deleniti minima earum nonobcaecati dicta. Eaque, nam deleniti? Perspiciatis illo, nobis incidunt iusto dicta eligendi reiciendis et voluptas quod quia, mollitia, nulla nesciunt. Sit id numquam ipsam nam alias tempore."
    },

    {
        imgUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
        fullName: "John Khan",
        job: "GRAPHIC DESIGNER",
        about: "Lorem ipsum dolor Consectetur quisquam rem? Doloremque dolore facere ipsum sapiente, deleniti minima earum nonobcaecati dicta. Eaque, nam deleniti? Perspiciatis illo, nobis incidunt iusto dicta eligendi reiciendis et voluptas quod quia, mollitia, nulla nesciunt. Sit id numquam ipsam nam alias tempore."
    },

    {
        imgUrl: "https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg",
        fullName: "Aykhan Buss",
        job: "WEB DEVOLOPER",
        about: "Dolor sit ametng elit. Consectetur deleniti idconsequatur quisquam rem? Doloremque dolore facere ipsum sapiente, deleniti minima earum nonobcaecati dicta. Eaque, nam deleniti? Perspiciatis illo, nobis incidunt iusto dicta eligendi reiciendis et voluptas quod quia, mollitia, nulla nesciunt. Sit id numquam ipsam nam alias tempore."
    },
    {
        imgUrl: "https://media.licdn.com/dms/image/C4E03AQFNPQN4lAxjtw/profile-displayphoto-shrink_800_800/0/1626457593073?e=2147483647&v=beta&t=7tD-D0oQyS2aZFugmkD6U4CqvlzFmqf95D3luhyJ6po",
        fullName: "Selin Diana",
        job: "UX DESIGIN",
        about: "Consectetur deleniti idconsequatur quisquam rem? Doloremque dolore facere ipsum sapiente, deleniti minima earum nonobcaecati dicta. Eaque, nam deleniti? Perspiciatis illo, nobis incidunt iusto dicta eligendi reiciendis et voluptas quod quia, mollitia, nulla nesciunt. Sit id numquam ipsam nam alias tempore."
    },
];

// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

let count = 0;

// window.addEventListener("DOMContentLoaded", function (e) {
//     show(count);
// });

function show(count) {
    const item = object[count];
    img.src = item.imgUrl;
    name.textContent = item.fullName;
    job.textContent = item.job;
    about.textContent = item.about;
};

nextBtn.addEventListener("click", function () {
    count++;
    if (count > object.length - 1) {
        count = 0;
    }
    show(count);
});
backBtn.addEventListener("click", function () {
    count--;
    if (count < 0) {
        count = object.length-1;
    }
    show(count);
});





















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