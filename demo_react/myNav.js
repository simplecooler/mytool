/**
 * Created by shenz on 2015/11/17.
 */
var Mynav = React.createClass({displayName: "Mynav",
    render:function(){
        return(
            React.createElement("div", {style: {fontSize:'100px',fontWeight:'bold'}}, "这是我的导航条")
        );
    }
});

React.render(React.createElement(Mynav, null),document.getElementById('nav'));