import Tank from "./Tank";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SpaceWar extends cc.Component {
    
    @property(cc.Node)
    private background: cc.Node = undefined as never;

    @property(Tank)
    private tank: Tank = undefined as never;

}
