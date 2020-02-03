'use strict';

//即時関数
(function(){
    //迷路のデータを配列で用意

    var Maze = function(col , row){  //プロパティを使用
        this.map = [];
        this.col = col; //奇数
        this.row = row;
        this.startX = 0;
        this.startY = 0;
        this.goalX = col - 1;
        this.goalY = row - 1;
        this.points = [
            [0, -1],
            [0, 1],
            [1, 0],
            [-1, 0] //左
        ];

        this.rand = function(n){
            return Math.floor(Math.random() * (n + 1));
        };

        this.init = function(){
            for(var x = 0; x < col; x++){
                this.map[x] = [];
                for(var y = 0; y < row; y++){
                    this.map[x][y] = 0;
                }
            }

            for(var x = 1; x < col; x += 2){
                for(var y = 1; y < row; y += 2){
                    this.map[x][y] = 1;
                }
            }
            for(var x = 1; x < col; x += 2){
                for(var y = 1; y < row; y += 2){
                    do{
                        if(x === 1){
                            //上下左右に倒す
                            var r = this.points[this.rand[3]];
                        }else{
                            //左以外に倒す
                            var r = this.points[this.rand[2]];
                        }
                    }while(this.map[x + r[0]][y + r[1]] === 1);
                    this.map[x + r[0]][y + r[1]] = 1;
                }
            }
        };

        var View = function(){
            this.wallSize = 10;
            this.wallColor = '#3261AB';
            this.routeColor = '#FF0088';
            this.canvas = document.getElementById('mycanvas');
            if(!this.canvas || !this.canvas.getContext){
                return false;
            }
            this.ctx = this.canvas.getContext('2d');
            this.draw = function(maze){
                this.canvas.width = (maze.col + 2 ) * this.wallSize;
                this.canvas.height = (maze.row + 2 ) * this.wallSize;
            
                //上下の壁
                for(var x = 0; x < maze.col + 2; x++){
                    this.drawWall(x, 0);
                    this.drawWall(x, maze.row + 1);
                }
            
            
                //左右の壁
                for(var y = 0; y < maze.row + 2; y++){
                    this.drawWall(0, y);
                    this.drawWall(maze.col + 1, y);
                }
            
                //迷路の内部
                for(var x = 0; x < maze.col; x++){
                    for(var y = 0; y < maze.row; y++){
                        if(maze.map[x][y] === 1){
                            this.drawWall(x + 1, y + 1);
                        }
                        if((x === maze.startX && y === maze.startY ) || (x === maze.goalX && y === maze.goalY)){
                            this.drawRoute(x + 1, y + 1);
                        }
                    }
                }
            };
                this.drawWall = function(x, y){
                    this.ctx.fillStyle = this.wallColor;
                    this.drawRect(x, y); 
                };
            
                this.drawRoute = function(x, y){
                    this.ctx.fillStyle = this.routeColor;
                    this.drawRect(x, y);
                };
            
                this.drawRect = function(x, y){
                    this.ctx.fillRect(
                        x * this.wallSize,
                        y * this.wallSize,
                        this.wallSize,
                        this.wallSize); //四角形であることの条件分岐
                };
        };

        this.draw = function(){
            var view = new view();
            view.draw(this);
        };
    }

    function reset(){
        var maze = new Maze(13, 13);
        maze.init(); //初期化
        maze.draw(); //描画
    }

    reset();

    document.getElementById('root').addEventListener('click', function() {
        reset();
    });

})();