import { ChildView } from "./ChildView";
import { Mediator } from "@robotlegsjs/pixi";

export class ChildMediator extends Mediator<ChildView> {
    initialize() {
        console.log("ChildMediator initialized!");
        this.view.interactive = true;
        this.addViewListener("click", this.onClick, this);
    }

    onClick(e) {
        this.view.parent.removeChild(this.view);
    }

    destroy() {
        console.log("ChildMediator destroyed!");
    }
}
