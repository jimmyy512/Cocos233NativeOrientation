const {ccclass, property} = cc._decorator;

@ccclass
export default class test extends cc.Component {

    start () {
       
    }

    //竖屏
    VerticalScreen(){
        this.changeOrientation(true);
    }

    //橫屏
    HorizontalScreen(){
        this.changeOrientation(false);
    }

    // true 竖屏
    // false 横屏
    changeOrientation(isPortrait){
        console.log("ts changeOrientation:",isPortrait)
        //網頁端
        let w = cc.view.getFrameSize().width;
        let h = cc.view.getFrameSize().height;
        if(isPortrait)
            cc.view.setFrameSize(w>h?h:w,w>h?w:h);
        else
            cc.view.setFrameSize(w>h?w:h,w>h?h:w);
    
        //native
        if (cc.sys.os == cc.sys.OS_IOS)
            jsb.reflection.callStaticMethod("AppController","setOrientation:",isPortrait.toString());
        else if (cc.sys.os == cc.sys.OS_ANDROID)
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "changeOrientation", "(Z)V", isPortrait);
    }
}
