import {
    injectHistoryButtons,
    getBrowserInfo,
    setUrlHashParameter,
    setUrlParameter,
} from './lib.js'
injectHistoryButtons()
getBrowserInfo()
setUrlHashParameter('x', 1000)
setUrlParameter('abc', 999)
