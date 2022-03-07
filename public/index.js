import {
    injectHistoryButtons,
    getBrowserInfo,
    setUrlHashParameter,
    setUrlParameter,
    initWindowSizePrinter
} from './lib.js'
initWindowSizePrinter()
injectHistoryButtons()
getBrowserInfo()
setUrlHashParameter('x', 1000)
setUrlParameter('abc', 999)
