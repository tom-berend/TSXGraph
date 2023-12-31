// this file declares JXG and makes it available to typescript


declare namespace JXG {
    export class JSXGraph {
        static initBoard(HTML_ID: any, attributes: any): any;
        // static freeBoard(Board):Board;
        // static registerElement(element:JSXElement)
    }
    export class Options {
        static label: any
        static text: any
        static line: any
    }
    export class Math {
        static Numerics: any
    }
    export class CanvasRenderer {
        static context: any
    }

    export class Text {
        setText(t:string):any
    }

    function addEvent(a: any, eventType: string, c: () => void, d: any): any
    function toFixed(a: any, b: number): number

}