const reviews = [

    {
        name: "Szent Endre",
        job: "PHP fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi distinctio cum aliquid nesciunt alias iste illo temporibus veritatis excepturi, doloremque sed est quia aliquam eligendi reprehenderit modi quis rem suscipit quos iure natus. Nobis sequi exercitationem explicabo sapiente iste expedita, doloremque quasi voluptas architecto veritatis ducimus velit accusamus qui odio quae molestiae hic harum possimus dolor maiores quo, repellat ad! Voluptates sapiente repudiandae eum consectetur voluptatibus explicabo accusantium placeat molestiae, adipisci ullam velit repellat?"
    },

    {
        name: "Nagy Zsanett",
        job: "Marketing manager",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi distinctio cum aliquid nesciunt alias iste illo temporibus veritatis excepturi, doloremque sed est quia aliquam eligendi reprehenderit modi quis rem suscipit quos iure natus. Nobis sequi exercitationem explicabo sapiente iste expedita, doloremque quasi voluptas architecto veritatis ducimus velit accusamus qui odio quae molestiae hic harum possimus dolor maiores quo, repellat ad!"
    },

    {
        name: "Török Bálint",
        job: "Tesztelő",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi distinctio cum aliquid nesciunt alias iste illo temporibus veritatis excepturi, doloremque sed est quia aliquam eligendi reprehenderit modi quis rem suscipit quos iure natus. Nobis sequi exercit"
    }

]

//hasznalni kivant telemek eltarolasa valtozokba
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


//kiindulo ertek megadas (ez fogja reprezentalni az aktualis elemet a tombomben)
let current = 0;

//kiindulo szemely betoltese
window.addEventListener("load", ()=> {

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;

})

//irunk egy fuggvenyt amellyel kitudjuk valasztani a kovetkezo emberunket
function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

//gombnyomasra ugorjon a kovetkezo emberre
nextBtn.addEventListener("click",() => {

    current++;

    if(current > reviews.length -1){

        current = 0;
    }

    showPerson(current);

})

//gombnyomasra ugorjon az elozo emberre
prevBtn.addEventListener("click",() => {

    current--;

    if(current < 0){

        current = reviews.length - 1;
    }

    showPerson(current);

})