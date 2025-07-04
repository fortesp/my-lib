import { p as proxyCustomElement, H, f as format, h } from './p-5a415f59.js';

const myComponentDarkCss$1 = ":host{display:block}.component{background:darkblue}";
const MyComponentStyle0 = myComponentDarkCss$1;

const myComponentDarkCss = ":host{display:block}.component{background:darkblue}";
const MyComponentDarkStyle0 = myComponentDarkCss;

const myComponentLightCss = ":host{display:block}.component{background:lightblue}";
const MyComponentLightStyle0 = myComponentLightCss;

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.mode = "dark";
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", { key: '938100f1dc8e8bec1e5c5d02754f22c5074ee34c', class: "component" }, "Hello, World! I'm ", this.getText());
    }
    static get style() { return {
        $: MyComponentStyle0,
        dark: MyComponentDarkStyle0,
        light: MyComponentLightStyle0
    }; }
}, [33, "my-component", {
        "mode": [1],
        "first": [1],
        "middle": [1],
        "last": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-component"];
    components.forEach(tagName => { switch (tagName) {
        case "my-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyComponent$1);
            }
            break;
    } });
}

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };

//# sourceMappingURL=my-component.js.map