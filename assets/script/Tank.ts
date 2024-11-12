const {ccclass, property} = cc._decorator;

@ccclass
export default class Tank extends cc.Component {

    @property
    private speed = 0;
    
    @property
    private y_index = 0;

    private _xSpeed = 0;
    
    //TODO
    private _canMoveLeft(): boolean{
        return false;
    }

    //TODO
    private _canMoveRight(): boolean{
        return false;
    }

    // TODO
    public shoot(): void {

    }

    // TODO
    public onLoad(): void {
        
    }
}
