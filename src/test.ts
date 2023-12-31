// hello world message

/////////////// std version
// let board = JXG.JSXGraph.initBoard('jxgbox',{});
// board.create('text',[0,1,"Hello World" ],{fontSize:28, color:'green'});


const board = new TSXGraph('box', {});
let text1 = board.text(0, 1, "Hello World", { fontSize: 28, strokeColor: 'red' });

// and update after 1 second
setInterval(()=>text1.setText('not Hello'),1000)



