$(function () {
    $('label').click(function () {
        switch ($('input[name='+$(this).attr('for')+']').attr('type')) {
            /*case "text":
            case "password":*/

            case "checkbox":
                $('input[name='+$(this).attr('for')+']').trigger('click');
                break;
            default:
                $('input[name='+$(this).attr('for')+']').focus();
                break;
        }

    });
    $('.lang-link').click(function(){
        $('.lang-link').removeClass('selected');
        $(this).addClass('selected');
        $.get('php/appAPI.php?op=setLang&lang='+$(this).attr('data-lang'),function () {
            window.location=window.location;
        });
    });
    //new WOW().init();
});

$(function () {
    obj ={
        data:[
            {type:"container",id:"cont_t",class:"container-fluid", style:{marginTop:"130px"},items:[
                    {type:"dhx-toolbar",id:"toolbar",data:[
                            {id: "other", icon: "mdi mdi-menu", "type": "button", "view": "link", "circle": true, "color": "secondary"},
                            {id: "add", icon: "mdi mdi-plus", value: "Add"},
                            {type: "separator"},
                            {id: "language", value: "Language", items: [
                                    {id: "eng", value: "English"},
                                    {id: "spa", value: "Spanish"},
                                    {id: "rus", value: "Russian"},
                                    {id: "de", value: "Deutsch"}
                                ]},
                            {id: "skin", value: "Skin", items: [
                                    {id: "material", value: "Material"},
                                    {id: "skyblue", value: "Skyblue"},
                                    {id: "web", value: "Web"},
                                    {id: "terrace", value: "Terrace"}
                                ]},
                            {type: "separator"},
                            {id: "edit", value: "Edit"},
                            {id: "search", type: "input", placeholder: "Search", icon: "mdi mdi-magnify"},
                            {type: "spacer"},
                            {id: "notifications", icon: "mdi mdi-bell", tooltip: "Notifications", count: 7, "type": "button", "view": "link", "color": "secondary", "circle": true,},
                            {id: "avatar", type: "imageButton", src: "https://webmail.btrl.ro/ews/Exchange.asmx/s/GetUserPhoto?size=HR48x48&email=paul.sas@btrl.ro", count: 15}
                        ]}
                ]},
            {type:"container",id:"cont1",class:"container-fluid ",items:[
                    {type:"row",id:"row1",class:"justify-content-center my-2  align-items-start",items:[
                            {type:"col",class:"col-md-6 my-2 my-md-0",id:"col1",
                                items:[
                                    {type:"dhx-layout",id:"layout1",data: {
                                            rows: [
                                                { height: "300px",id:"a", header: "Layout Accardion header", html: "Layout Accardion Content",css: "dhx_layout-cell--bordered dhx_layout-cell--no-border_bottom", collapsable: true, collapsed: false},
                                                { height: "300px",id:"b", header: "Layout Accardion header 2", html: "Layout Accardion Content", css: "dhx_layout-cell--bordered dhx_layout-cell--no-border_bottom", collapsable: true , collapsed:true},
                                                { height: "300px",id:"c", header: "Layout Accardion header3", html: "Layout Accardion Content", css: "dhx_layout-cell--bordered", collapsable: true, collapsed:true }
                                            ]
                                        }		}
                                ]},
                            {type:"col",class:"col-md-6 my-2 my-md-0",id:"col2",
                                items:[
                                    {type:"dhx-layout",id:"layout2",data:{
                                            css: "dhx_layout-cell--bordered",
                                            rows: [{
                                                id: "toolbar",
                                                html: "Header",
                                                css: "dhx_layout-cell--border_bottom",
                                                gravity: false,
                                                height: "60px"
                                            },
                                                {
                                                    cols: [{
                                                        id: "sidebar",
                                                        html: "Sidebar",
                                                        gravity: false,
                                                        css: "dhx_layout-cell--border_right",
                                                        width: "200px"
                                                    },
                                                        {
                                                            rows: [{
                                                                id: "content",
                                                                css: "",
                                                                html: "Content"
                                                            }, ]
                                                        },
                                                        {
                                                            id: "rightbar",
                                                            html: "Aside",
                                                            gravity: false,
                                                            css: "dhx_layout-cell--border_left",
                                                            width: "200px"
                                                        },
                                                    ]
                                                },
                                                {
                                                    id: "footer",
                                                    html: "Footer",
                                                    css: "dhx_layout-cell--border_top",
                                                    gravity: false,
                                                    height: "60px"
                                                }
                                            ]
                                        }
                                    }
                                ]}
                        ]}
                ]},
            {type:"container",id:"cont3",class:"container-fluid",items:[
                    {type:"container",id:"cont4",class:"container"}
                ]}
        ]};
    obj2={
        data:[

            {type:"container",id:"cont3",class:"container-fluid",items:[
                    {type:"container",id:"cont4",class:"container"}
                ]}
        ]
    };
    //scr  = new screen('scr1',obj);
    //scr  = new screen('scr2',obj);

})