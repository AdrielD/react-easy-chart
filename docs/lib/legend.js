webpackJsonp([6],[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(8),r=n(l),d=a(9),o=n(d),c=a(10),u=n(c),i=a(12),s=n(i),f=a(11),m=n(f),p=a(4),h=n(p),y=a(44),g=n(y),E=a(40),v=a(39),x=a(48),k=[{key:"Cats",value:100},{key:"Dogs",value:200},{key:"Other",value:50}],b=[{key:"Cats",value:100,color:"#aaac84"},{key:"Dogs",value:200,color:"#dce7c5"},{key:"Other",value:50,color:"#e3a51a"}],S=[{color:"#aaac84"},{color:"#dce7c5"},{color:"#e3a51a"}],C={".legend":{backgroundColor:"#f9f9f9",border:"1px solid #e5e5e5",borderRadius:"12px",fontSize:"0.8em",maxWidth:"300px",padding:"12px"}},L={".legend":{backgroundColor:"#f9f9f9",border:"1px solid #e5e5e5",borderRadius:"12px",fontSize:"0.8em",maxWidth:"480px",padding:"12px"}},_=[{type:"One",x:1,y:5},{type:"One",x:2,y:6},{type:"One",x:3,y:7},{type:"Two",x:3,y:1},{type:"Two",x:4,y:2},{type:"Two",x:5,y:3},{type:"Three",x:0,y:6},{type:"Three",x:1,y:7},{type:"Three",x:2,y:8},{type:"Four",x:5,y:2},{type:"Four",x:6,y:3},{type:"Four",x:7,y:4},{type:"Five",x:4,y:4},{type:"Five",x:5,y:5},{type:"Five",x:6,y:6}],z=function(e){function t(e){(0,o.default)(this,t);var a=(0,s.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.toggleState=a.toggleState.bind(a),a.state={active:!1},a}return(0,m.default)(t,e),(0,u.default)(t,[{key:"toggleState",value:function(){this.setState({active:!this.state.active})}},{key:"render",value:function(){var e=this.state.active?"menu active":"menu";return h.default.createElement("div",null,h.default.createElement("aside",{id:"menu",className:e},h.default.createElement("a",{id:"menuToggle",className:"menu__toggle","aria-hidden":"true",href:"#",onClick:this.toggleState},h.default.createElement("span",null,"Toggle menu")),h.default.createElement("nav",{className:"menu__nav"},h.default.createElement("ul",null,h.default.createElement("li",null,h.default.createElement("a",{href:"../",className:"menu__all-charts"},"← All charts"))),h.default.createElement(x.Scrollspy,{items:["introduction","basic","horizontal","config","styles","scatterplot"],currentClassName:"active"},h.default.createElement("li",null,h.default.createElement("a",{href:"#introduction"},"Introduction")),h.default.createElement("li",null,h.default.createElement("a",{href:"#basic"},"Basic")),h.default.createElement("li",null,h.default.createElement("a",{href:"#horizontal"},"Horizontal")),h.default.createElement("li",null,h.default.createElement("a",{href:"#config"},"Config")),h.default.createElement("li",null,h.default.createElement("a",{href:"#styles"},"Styles")),h.default.createElement("li",null,h.default.createElement("a",{href:"#scatterplot"},"Scatterplot"))))),h.default.createElement("div",{className:"content"},h.default.createElement("h1",null,"The React Easy Chart Legend"),h.default.createElement("section",{id:"introduction"},h.default.createElement("h2",null,"Introduction"),h.default.createElement("p",null,"The legend component provides a key to the data and is designed to work with the Pie and Scatter plot charts. The legend component is easily cusomised via css.")),h.default.createElement("section",{id:"basic"},h.default.createElement("h2",null,"Basic"),h.default.createElement("p",null,"Simply pass the same data used for the chart and provide a data id (dataId) for the label."),h.default.createElement("pre",null,function(){var e="\n  const pieData = [\n    {key: 'Cats', value: 100},\n    {key: 'Dogs', value: 200},\n    {key: 'Other', value: 50}\n  ];\n\n  <PieChart data={pieData} size={300} />\n\n  <Legend data={pieData} dataId={'key'} />";return h.default.createElement("code",{dangerouslySetInnerHTML:{__html:(0,v.escapeHTML)(e)}})}()),h.default.createElement("div",null,h.default.createElement(E.PieChart,{data:k,size:300}),h.default.createElement(E.Legend,{data:k,dataId:"key"}),h.default.createElement("pre",null,function(){var e="\n  <Legend data={pieData} dataId={'value'} />";return h.default.createElement("code",{dangerouslySetInnerHTML:{__html:(0,v.escapeHTML)(e)}})}()),h.default.createElement(E.Legend,{data:k,dataId:"value"}))),h.default.createElement("section",{id:"horizontal"},h.default.createElement("h2",null,"Horizontal"),h.default.createElement("p",null,"Pass 'horizontal' as a parameter to switch the list items from block to inline-block."),h.default.createElement("pre",null,function(){var e="\n  <Legend data={pieData} dataId={'key'} horizontal />";return h.default.createElement("code",{dangerouslySetInnerHTML:{__html:(0,v.escapeHTML)(e)}})}()),h.default.createElement("div",null,h.default.createElement(E.PieChart,{data:k,size:300}),h.default.createElement(E.Legend,{data:k,dataId:"key",horizontal:!0}))),h.default.createElement("section",{id:"config"},h.default.createElement("h2",null,"Config"),h.default.createElement("p",null,"React Easy Charts use ",h.default.createElement("a",{href:"https://github.com/mbostock/d3/wiki/Ordinal-Scales#category20"},"d3.scale.category20"),"to generate a list of default colours. If your chart has a custom colour scheme, pass this colour array to the config property."),h.default.createElement("pre",null,function(){var e="\n  const pieDataCustom = [\n    {key: 'Cats', value: 100, color: '#aaac84'},\n    {key: 'Dogs', value: 200, color: '#dce7c5'},\n    {key: 'Other', value: 50, color: '#e3a51a'}\n  ];\n\n  const config = [\n    {color: '#aaac84'},\n    {color: '#dce7c5'},\n    {color: '#e3a51a'}\n  ];\n\n  <PieChart data={pieDataCustom} size={300} />\n\n  <Legend data={pieDataCustom} dataId={'key'} config={config} />";return h.default.createElement("code",{dangerouslySetInnerHTML:{__html:(0,v.escapeHTML)(e)}})}()),h.default.createElement("div",null,h.default.createElement(E.PieChart,{data:b,size:300,padding:20}),h.default.createElement(E.Legend,{data:b,dataId:"key",config:S,horizontal:!0}))),h.default.createElement("section",{id:"styles"},h.default.createElement("h2",null,"Styles"),h.default.createElement("p",null,"Legend is a styled unordered list and can be easily customised by overriding (all or parts of) the default styles. Simply create a javascript based style object and pass this in through the styles parameter."),h.default.createElement("pre",null,function(){var e="\n  /* default component styles */\n  const defaultStyles = {\n    '.legend': {\n      'list-style': 'none',\n      margin: 0,\n      padding: 0\n    },\n    '.legend li': {\n      display: 'block',\n      lineHeight: '24px',\n      marginRight: '24px',\n      marginBottom: '6px',\n      paddingLeft: '24px',\n      position: 'relative'\n    },\n    '.legend li.horizontal': {\n      display: 'inline-block'\n    },\n    '.legend .icon': {\n      width: '12px',\n      height: '12px',\n      background: 'red',\n      borderRadius: '6px',\n      position: 'absolute',\n      left: '0',\n      top: '50%',\n      marginTop: '-6px'\n    }\n  };\n\n  /* example override */\n  const customStyle = {\n    '.legend': {\n      backgroundColor: '#f9f9f9',\n      border: '1px solid #e5e5e5',\n      borderRadius: '12px',\n      fontSize: '0.8em',\n      maxWidth: '300px',\n      padding: '12px'\n    }\n  };\n\n  <Legend\n    data={pieDataCustom}\n    dataId={'key'}\n    config={config}\n    styles={customStyle}\n    horizontal\n  />";return h.default.createElement("code",{dangerouslySetInnerHTML:{__html:(0,v.escapeHTML)(e)}})}()),h.default.createElement("div",null,h.default.createElement(E.PieChart,{data:b,size:300,padding:20,innerHoleSize:150}),h.default.createElement(E.Legend,{data:b,dataId:"key",config:S,styles:C,horizontal:!0}))),h.default.createElement("section",{id:"scatterplot"},h.default.createElement("h2",null,"Scatterplot"),h.default.createElement("p",null,"A scatterplot example"),h.default.createElement("pre",null,function(){var e="\n  const scatterStyle = {\n    '.legend': {\n      backgroundColor: '#f9f9f9',\n      border: '1px solid #e5e5e5',\n      borderRadius: '12px',\n      fontSize: '0.8em',\n      maxWidth: '480px',\n      padding: '12px'\n    }\n  };\n\n  <ScatterplotChart\n    data={bigData}\n    width={480}\n    height={270}\n    axes\n  />\n\n  <Legend\n    data={bigData}\n    dataId={type}\n    styles={scatterStyle}\n    horizontal\n  />";return h.default.createElement("code",{dangerouslySetInnerHTML:{__html:(0,v.escapeHTML)(e)}})}()),h.default.createElement(E.ScatterplotChart,{data:_,width:480,height:270,axes:!0}),h.default.createElement(E.Legend,{data:_,dataId:"type",styles:L,horizontal:!0}))))}}]),t}(h.default.Component);t.default=z,g.default.render(h.default.createElement(z,null),document.getElementById("root"))}]);