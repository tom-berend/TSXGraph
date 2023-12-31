

interface StyleUnit {
    style?: string
    unit?: string
    unitDisplay?: string
    maximumFractionDigits?: number
}

interface Intl {
    enabled?: boolean
    locale?: string
    options?: StyleUnit
}

interface TransitionProperties {
    color?: string
    opacity?: string
}

interface TextOptions {
    fontSize?: number
    fontUnit?: string
    digits?: number
    intl?: Intl
    parse?: boolean
    useCaja?: boolean
    isLabel?: boolean       // internal use only?
    strokeColor?: string
    highlightStrokeColor?: string
    highlightStrokeOpacity?: number
    cssDefaultStyle?: string
    highlightCssDefaultStyle?: string
    cssStyle?: string
    highlightCssStyle?: string
    transitionProperties?: TransitionProperties
    useASCIIMathML?: boolean
    useMathJax?: boolean
    useKatex?: boolean
    katexMacros?: object
    display?: string
    anchor?: null | 'auto' | 'left' | 'middle' | 'right'
    anchorX?: null | 'auto' | 'left' | 'middle' | 'right'
    cssClass?: string
    highlightCssClass?: string
    dragArea?: 'all' | 'small'
    withLabel?: boolean
    rotate?: number
    visible?: boolean
    snapSizeX?: number
    snapSizeY?: number
    attractors?: []
}



class TSXGraph {
    JSXboard: any       // local variable that holds the JSXGraph board

    // CSS Style Declaration is just picked up from DOM
    constructor(canvas: string, options?: object) {
        this.JSXboard = JXG.JSXGraph.initBoard(canvas, {})

    }

    text(x: number, y: number, text: string, options: TextOptions): JXG.Text {
        return this.JSXboard.create('text', [x, y, text], options)   // vanilla JSXGraph call
    }

}

