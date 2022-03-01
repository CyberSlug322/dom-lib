
window.onresize = function() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    console.log(`Current window size is ${WIDTH}x${HEIGHT}`);
  }


export const setUrlParameter = (key, value) => {
    const url = new URL(document.location.href);
    url.searchParams.set(key, value);
    document.location.assign(url.toString());
}

export const setUrlHashParameter = (key, value) => {
    const url = new URL(document.location.href);
    url.hash
}

export const createHisoryButton = () => {
    const backButton = document.createElement("button");
    const forwardButton = document.createElement("button");
    backButton.appendChild(document.createTextNode("Back"));
    forwardButton.appendChild(document.createTextNode("Forward"));
    backButton.onclick = () => history.go(-1)
    forwardButton.onclick = () => history.go(1)
    const firstDiv = document.querySelector(".my-div");
    firstDiv.appendChild(backButton);
    firstDiv.appendChild(forwardButton);
}

export const getBrowserInfo = () => {
    const nav = window.navigator;
    console.log(
       `Название браузера: ${nav.appCodeName}\n`,
       `Выбранный язык: ${nav.language}\n`,
        `Доступные языки: ${nav.languages}\n`,
        `User agen object: ${nav.userAgent}`
    )
}



