import { AciotnComponent } from "./ActionComponents";
import { Component } from "./CustomElement_basico";
import { StyledWebComponent } from "./StyledComponent";
import { WebComponent } from "./WebComponents";
customElements.define("my-component-basic", Component);
customElements.define("web-component-nostyle", WebComponent);
customElements.define("web-component-style", StyledWebComponent);
customElements.define("web-component-action", AciotnComponent);
