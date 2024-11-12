const {ccclass, property} = cc._decorator;

const SCREEN_WIDTH = 480;

@ccclass
export default class Tank extends cc.Component {

    @property
    private speed = 0;
    
    @property
    private y_index = 0;

    private _xSpeed = 0;
    
    //TODO
    private _canMoveLeft(): boolean{
        if (this.node.x <= -SCREEN_WIDTH){
            this.node.x = -SCREEN_WIDTH;
            return false;
        }
        return true;
    }

    //TODO
    private _canMoveRight(): boolean{
        if (this.node.x >= SCREEN_WIDTH){
            this.node.x = SCREEN_WIDTH;
            return false;
        }
        return true;
    }

    // TODO
    public shoot(): void {

    }

    // TODO
    public onLoad(): void {
        
    }
}
