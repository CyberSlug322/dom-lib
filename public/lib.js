window.onresize = function () {
    const WIDTH = window.innerWidth
    const HEIGHT = window.innerHeight
    console.log(`Current window size is ${WIDTH}x${HEIGHT}`)
}

export const setUrlParameter = (key, value) => {
    const url = new URL(document.location.href)
    url.searchParams.set(key, value)
    document.location.assign(url.toString())
}

export const setUrlHashParameter = (key, value) => {
    const url = new URL(document.location.href)
    const hashArr = url.hash.split('')
    const assignUrlFromArray = (url, arr) => {
        url.hash = arr.join('')
        document.location.assign(url.toString())
    }
    if (!url.hash) {
        assignUrlFromArray(url, [`${key}=${value}`])
        return
    }
    const keyIndex = hashArr.findIndex((elem) => elem === key)
    if (keyIndex === -1) {
        hashArr.splice(hashArr.length, 0, `&${key}=${value}`)
        assignUrlFromArray(url, hashArr)
        return
    }

    const lastValueIndex = hashArr.indexOf('&', keyIndex)
    if (lastValueIndex === -1) {
        hashArr.splice(keyIndex, hashArr.length, `&${key}=${value}`)
    } else {
        hashArr.splice(keyIndex, lastValueIndex - keyIndex, `&${key}=${value}`)
    }
    assignUrlFromArray(url, hashArr)
    return
}

export const createHistoryButtons = () => {
    const historyButtonCreate = (name, goIndex) => {
        const button = document.createElement('button')
        button.appendChild(document.createTextNode(`${name}`))
        button.onclick = () => history.go(goIndex)
        const firstDiv = document.querySelector('.my-div')
        firstDiv.appendChild(button)
    }

    historyButtonCreate('forward', 1)
    historyButtonCreate('back', -1)
}

export const getBrowserInfo = () => {
    const nav = window.navigator
    console.log(
        `Название браузера: ${nav.appCodeName}\n`,
        `Выбранный язык: ${nav.language}\n`,
        `Доступные языки: ${nav.languages}\n`,
        `User agen object: ${nav.userAgent}`
    )
}
