const {ccclass, property} = cc._decorator;

const SCREEN_WIDTH = 480;

@ccclass
export default class Tank extends cc.Component {

    @property
    private speed = 0;
    
    @property
    private y_index = 0;

    private _xSpeed = 0;

    public onLoad(): void{
        this._setInputListener();
        this.node.y = this.y_index;
    }
    
	private _setInputListener(): void {
		cc.systemEvent.on(
			cc.SystemEvent.EventType.KEY_DOWN,
			this._onKeyDown,
			this
		);
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this._onKeyUp, this);
	}

    private _onKeyDown(event):void{
        switch (event.keyCode){
            case cc.macro.KEY.left:
                console.log("MOVE LEFT");
                break;
            case cc.macro.KEY.right:
                console.log("MOVE RIGHT");
                break;
            case cc.macro.KEY.space:
                console.log("SHOOT");
                break;
            default:
                break;
        }
    }

    private _onKeyUp(event):void{
        switch (event.keyCode){
            case cc.macro.KEY.left:
                console.log("STOP MOVE LEFT");
                break;
            case cc.macro.KEY.right:
                console.log("STOP MOVE RIGHT");
                break;
            case cc.macro.KEY.space:
                console.log("STOP SHOOT");
                break;
            default:
                break;
        }
    }

    private _canMoveLeft(): boolean{
        if (this.node.x <= -SCREEN_WIDTH){
            this.node.x = -SCREEN_WIDTH;
            return false;
        }
        return true;
    }

    private _canMoveRight(): boolean{
        if (this.node.x >= SCREEN_WIDTH){
            this.node.x = SCREEN_WIDTH;
            return false;
        }
        return true;
    }

    private _canMove(): boolean{
        if (this._xSpeed < 0){
            if (!this._canMoveLeft()){
                return false;
            }
        } else if (this._xSpeed > 0){
            if (!this._canMoveRight()){
                return false;
            }
        }
        return true;
    }

    // TODO
    public shoot(): void {

    }

    public update(dt: number): void{
        if (this._canMove){
            this.node.x += this.speed * dt;
        }
    }


}
