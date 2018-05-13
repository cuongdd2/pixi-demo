import { inject, injectable, IConfig, IInjector } from "@robotlegsjs/core";

import { CircleMediator } from "../view/CircleMediator";
import { CircleView } from "../view/CircleView";
import { ChildMediator } from "../view/ChildMediator";
import { ChildView } from "../view/ChildView";
import { IMediatorMap } from "@robotlegsjs/pixi";

@injectable()
export class MyConfig implements IConfig {
    @inject(IInjector) injector: IInjector;

    @inject(IMediatorMap) mediatorMap: IMediatorMap;

    configure() {
        this.mediatorMap.map(CircleView).toMediator(CircleMediator);
        this.mediatorMap.map(ChildView).toMediator(ChildMediator);
    }
}
