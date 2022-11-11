const delay = async (ms) => new Promise(res => setTimeout(res, ms));

async function begin_shit() {
    document.getElementById("yes").remove();

    let audio = document.getElementById("music");
    audio.volume = 0.5;
    audio.loop = true;
    audio.play();

    await delay(14500);

    const container = document.getElementsByClassName("main_info")[0];
    container.innerHTML += "<img src=\"img/rainbows-cockroach.gif\" style=\"max-width: 245px; background-color: unset; animation: cockroach_dance 5s infinite ease\">";

    document.body.style.backgroundImage = "url('img/shrimp-dancing.gif')";
}