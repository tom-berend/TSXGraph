A thin layer over JSXGraph to make TS delightful.

The problem is that JSXGraph provides an interface that TS can't verify.

A typical JSXGraph construction looks like this 
```
// hello world message
var board = JXG.JSXGraph.initBoard('jxgbox',{});
board.create('text',[0,1,"Hello World" ],{fontSize:28, color:'green'});
```

In TSXGraph, we would use wrapper function for *initBoard()* and **create()* 
```
// hello world message
const board = JXG.JSXGraph.initTSBoard('jxgbox',{});
board.text([0,1,"Hello World" ],{fontSize:28, color:'green'});
```

Each wrapper function is simply a one-line call to the original.
