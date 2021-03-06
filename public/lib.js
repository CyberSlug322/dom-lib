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
    const checkHashOverwrite = (arr, key) => {
        if (!arr.length) return true
        if (arr.includes(key) && !arr.includes('&')) return true
        return false
    }
    const assignUrlFromArray = (url, arr) => {
        url.hash = arr.join('')
        document.location.assign(url.toString())
    }

    const injectValue = (hashArr, embededValue = `${key}=${value}`) => {     
        hashArr.splice(hashArr.length, 0, embededValue)
        return hashArr
    }

    const rewriteValue = (hashArr, keyIndex, embededValue = `${separator}${key}=${value}`) => {
        const lastValueIndex = hashArr.indexOf('&', keyIndex)
        const cutCount =
            lastValueIndex === -1
                ? hashArr.length
                : lastValueIndex - keyIndex + 1
        hashArr.splice(keyIndex - 1, cutCount, embededValue)
        return hashArr
    }

    if (checkHashOverwrite(hashArr, key)) {
        assignUrlFromArray(url, [`${key}=${value}`])
        return
    }
    const keyIndex = hashArr.findIndex(elem => elem === key)
    if (keyIndex === -1) {
        hashArr = injectValue(hashArr)
    } else {
        hashArr = rewriteValue(hashArr, keyIndex, embededValue)
    }

    assignUrlFromArray(url, hashArr)
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
        `???????????????? ????????????????: ${nav.appCodeName}\n`,
        `?????????????????? ????????: ${nav.language}\n`,
        `?????????????????? ??????????: ${nav.languages}\n`,
        `User agen object: ${nav.userAgent}`
    )
}
