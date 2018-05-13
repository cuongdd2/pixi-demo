import { CircleView } from "./CircleView";
import { Mediator } from "@robotlegsjs/pixi";
import { ChildView } from "./ChildView";

export class CircleMediator extends Mediator<CircleView> {
    initialize() {
        console.log("CircleMediator initialized!");
        this.view.interactive = true;
        this.addViewListener("click", this.onClick, this);
    }

    onClick(e) {
        this.view.parent.addChild(new ChildView());
    }

    destroy() {
        console.log("CircleMediator destroyed!");
    }
}
