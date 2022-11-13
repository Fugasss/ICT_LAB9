const delay = async (ms) => new Promise(res => setTimeout(res, ms));
const getRandom = (min, max) => Math.random() * (max - min + 1) + max;
const getRandomSign = () => Math.random() > 0.5 ? -1 : 1;

async function begin_shit() {
    document.getElementById("yes").remove();

    let audio = document.getElementById("music");
    audio.volume = 0.5;
    audio.loop = true;
    audio.play();

    const timeToStart = 14500;
    const shrimpsBg = "img/shrimp-dancing.gif";

    document.body.style.transition = timeToStart + "ms" + " cubic-bezier(1,0,1,-0.01)";
    document.body.style.backgroundImage = "url(" + shrimpsBg + ")";

    await delay(timeToStart);

    const container = document.getElementsByClassName("main_info")[0];

    let cockroach = document.createElement("img");
    cockroach.id = 'main-cockroach';
    cockroach.alt = 'cockroach';
    cockroach.src = 'img/rainbows-cockroach.gif';
    cockroach.style.maxWidth = '245px';
    cockroach.style.backgroundColor = 'unset';

    container.appendChild(cockroach);
    
    for (let i = 0; i < 25; i++) {
        await delay(500);
        spawn_random_cockroach();
    }

    cockroach.style.animation = 'cockroach_dance 5s infinite ease';
}

function spawn_random_cockroach() {
    const container = document.getElementsByClassName("main_info")[0];

    let x = getRandom(-200, 0) + getRandom(-200, 200) * getRandomSign() + 150;
    let y = getRandom(-200, 0) + getRandom(-150, 50) * getRandomSign();

    let cockroach = document.createElement("img");
    cockroach.alt = 'cockroach';
    cockroach.src = 'img/rainbows-cockroach.gif';
    cockroach.style.maxWidth = '245px';
    cockroach.style.backgroundColor = 'unset';
    cockroach.style.position = 'absolute';
    cockroach.style.left = x + 'px';
    cockroach.style.top = y + 'px';
    cockroach.style.opacity = '0.4';
    cockroach.style.filter = "hue-rotate(" + getRandom(0, 360) + "deg)";

    container.appendChild(cockroach);

}