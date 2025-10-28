window.playSound = (file) => {
    let audio = new Audio(file);
    audio.play();
};

window.flashElement = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.transition = "background-color 0.3s";
    el.style.backgroundColor = "yellow";
    setTimeout(() => el.style.backgroundColor = "", 500);
};