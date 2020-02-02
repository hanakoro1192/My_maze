'use strict';

//即時関数
(function(){
    //迷路のデータを配列で用意する

    /*
    0 0 0
    0 1 0
    0 1 0
    map[x][y]
    */

    var map = [];
    map[0] = [0, 0, 0];
    map[1] = [0, 1, 1];
    map[2] = [0, 0, 0];

    // //Canvasで描写
    // var col = 3; //奇数:カラム(行)の数
    // var row = 3;　//列の数

    // var wallSize  = 10; //壁のサイズを10に設定
    // var wallColor = '#3261AB'; //壁の色を設定

    // var canvas = document.getElementById('mycanvas');
    // if(!canvas || canvas.getContent){
    //     return false;
    // }

    // var ctx = canvas.getContext('2d');

    // canvas.width = (col + 2) * wallSize;
    // canvas.hright = (row + 2) * wallSize;

    //上下の壁
    // for(var x = 0; x < col + 2; x++){
    //     drawWall(x, 0);
    //     drawWall(x, row+1);
    // }

    //左右の壁
    // for(var y = 0; y < row + 2; y++){
    //     drawWall(0,y);
    //     drawWall(col+1, y);
    // }

    //壁を描写
    // function drawWall(x, y){
    //     ctx.fillStyle = wallColor;
    //     ctx.fillRect(
    //         x * wallSize,
    //         y * wallSize,
    //         wallSize,
    //         wallSize,
    //     );
    // }

})();