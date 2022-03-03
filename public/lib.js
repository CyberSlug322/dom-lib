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
    const separator = hashArr[1] === key ? '' : '&'
    const checkHashOverwrite = (key, arr) => {
        if (!arr.length) return true
        if (arr.includes(key) && !arr.includes('&')) return true
        return false
    }
    const assignUrlFromArray = (url, arr) => {
        url.hash = arr.join('')
        document.location.assign(url.toString())
    }
    if (checkHashOverwrite(key, hashArr)) {
        assignUrlFromArray(url, [`${key}=${value}`])
        return
    }
    const keyIndex = hashArr.findIndex(elem => elem === key)
    if (keyIndex === -1) {
        hashArr.splice(hashArr.length, 0, `&${key}=${value}`)
    } else {
        const lastValueIndex = hashArr.indexOf('&', keyIndex)
        const cutCount =
            lastValueIndex === -1
                ? hashArr.length
                : lastValueIndex - keyIndex + 1
        hashArr.splice(keyIndex - 1, cutCount, `${separator}${key}=${value}`)
    }
    assignUrlFromArray(url, hashArr)
    return
}

export const injectHistoryButtons = (injectionPointName = '.my-div') => {

    const createHistoryButton = (name, goIndex) => {
        const button = document.createElement('button')
        button.appendChild(document.createTextNode(`${name}`))
        button.onclick = () => history.go(goIndex)
        return button
    }

    const injectButton = (injectionPointName, button) => {
        const injectionElement = document.querySelector(injectionPointName)
        console.log(injectionPointName)
        injectionElement.appendChild(button)
    }

    const forwardButton = createHistoryButton('forward', 1)
    const backButton = createHistoryButton('back', -1)
    injectButton(injectionPointName, forwardButton)
    injectButton(injectionPointName, backButton)
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
