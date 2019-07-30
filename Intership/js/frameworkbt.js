var screens=[];
var screensTypes=[];
function screen(name,source,container){

    this.name=name;
    this.container=container||document.body;
    this._container=this.container
    this.source=source.data;
    this.elements={};
    this.initScreen=function () {
       console.log('initScreen:'+name);
        if (typeof source === 'string') {
            this.loadScreen(source);
        }
        else
            {
                this.parse(this.source,this.container);
                screens[this.name]=this;
            }
    };
    this.loadScreen=function(){
        //todo : de implementat incarcarea - de vazut ceva loadere
        console.log('loadScreen');
    };
    this.parse=function (obj,container) {
        console.log('parse');
        obj.forEach(this.process.bind(this,container));
    };
    this.process=function (container,obj) {
        console.log('process');
        if (typeof this.init[obj.type] === 'function') {
            el=this.init[obj.type].call(this,obj,container);
            if (obj.id){
                el.id=this.name+'_'+obj.id;//todo: de implementat o serie de id-uri unice
                this.elements[obj.id]=el;
            }
            if (!!obj.style){
                for(var key in obj.style){
                    el.style[key]=obj.style[key];
                }
            }
            if (Array.isArray(obj.items)) this.parse(obj.items,el);
        }

    }
    this.init= {
        "container":function (obj,container) {
            console.log('init.container');
            console.log(obj);
            let el=document.createElement('div');
            el.className=obj.class||'';

            container.appendChild(el);
            return el;
        },
        "row":function (obj,container) {
            console.log('init.row');
            console.log(obj);
            let el=document.createElement('div');
            el.className="row"+(obj.class?" "+obj.class:'');
            container.appendChild(el);
            return el;
        },
        "col":function (obj,container) {
            console.log('init.col');
            console.log(obj);
            let el=document.createElement('div');
            el.className="col-12"+(obj.class?" "+obj.class:'');
            container.appendChild(el);
            return el;
        },
        "dhx-layout":function (obj,container) {
            console.log('init.layout');
            console.log(obj);
            var el = new dhx.Layout(container,obj.data);
            return el;
        },
        "dhx-toolbar":function (obj,container) {
            console.log('init.toolbar');
            console.log(obj);
            //debugger;
            var el = new dhx.Toolbar(container,{
                css: "dhx_widget--bordered dhx_widget--bg_gray"
            });
            el.data.parse(obj.data);
            return el;
        },

    };


    this.initScreen();
    return this;

}