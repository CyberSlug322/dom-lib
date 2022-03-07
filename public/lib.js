function printSize(width, height){
    console.log(`Current size is ${width}x${height}`)
}

export const initWindowSizePrinter = () => {
    window.onresize = () => printSize(window.innerWidth, window.innerHeight)
}

export const setUrlParameter = (key, value) => {
    const url = new URL(document.location.href)
    url.searchParams.set(key, value)
    document.location.assign(url.toString())
}

export const _getObjectFromHashString = (hashStringToConvert) => {
    if(!hashStringToConvert || hashStringToConvert.trim().length === 0) return {}

    const hashEntries = hashStringToConvert
                            .replace('#', '')
                            .split('&')
                            .map(keyValuePair => keyValuePair.split('='));

    return Object.fromEntries(hashEntries)
}

export const _getHashStringFromObject = (objectToConvert) => {
    if(Object.keys(objectToConvert).length === 0) return ''

    return '#' + Object.entries(objectToConvert)
                        .map(keyValuePair => keyValuePair.join('='))
                        .join('&')
}

export const _getHashStringWithAssignedParam = (oldHashString, key, value) => {
    const hashStringObject = _getObjectFromHashString(oldHashString)

    const assignedHashObject = {
        ...hashStringObject,
        [key]: value
    }

    return _getHashStringFromObject(assignedHashObject)
}

export const setUrlHashParameter = (key, value) => {
    window.location.hash = _getHashStringWithAssignedParam(window.location.hash, key, value)
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
