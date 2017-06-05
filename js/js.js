//小鸟
function Bird(option) {
    this.ctx = option.ctx,
        this.img = option.img,
        this.birdW = this.img.width / 3,
        this.birdH = this.img.height,
        this.index = 0,
        //初始速度
        this.v = 0,
        // 加速度
        this.a = 0.0003;
    this.lastTime = new Date()
    this.x = 100,
        this.y = 100
    // console.log(this.birdW);
    // console.log(this.birdH);
}
Bird.prototype = {
    constructor: Bird,
    draw: function () {


        // 计算时间
        var newTime = new Date();
        var t = newTime - this.lastTime;
        this.lastTime = newTime;


        this.v = this.v + this.a * t;
        var s = this.v * t + this.a * t * t / 2;
        this.y += s;
        this.ctx.save();
        this.ctx.translate(this.x + this.birdW / 2, this.y + this.birdH / 2)
        var angle = 60 / 0.38 * this.v;
        this.ctx.rotate(convertAngle(angle))

        this.ctx.drawImage(this.img, this.birdW * this.index, 0, this.birdW, this.birdH, -this.birdW / 2, -this.birdH / 2, this.birdW, this.birdH);


        this.ctx.restore();
        this.index++;
        if (this.index == 3) {
            this.index = 0;
        }
    }
}


// 天空
function Sky(option) {
    this.ctx = option.ctx,
        this.img = option.img,
        this.x1 = 0,
        this.x2 = this.img.width,
        this.speed = 2
    this.count = 0
}
Sky.prototype = {
    constructor: Sky,
    draw: function () {
        this.ctx.drawImage(this.img, this.x1, 0);
        this.ctx.drawImage(this.img, this.x2, 0);
        this.x1 -= this.speed;
        this.x2 -= this.speed;
        if (( parseInt( this.x1)+200)%240 == 0) {
            this.count++
        };
      

        if (this.x1 < -this.img.width) {
            this.x1 += 2 * this.img.width;
        }
        if (this.x2 < -this.img.width) {
            this.x2 += 2 * this.img.width;
        }
    }
}


//陆地
function Land(option) {
    this.ctx = option.ctx,
        this.img = option.img,
        this.x = option.x,
        this.y = canvas.height - this.img.height,
        this.speed = 2


}
Land.prototype = {
    constructor: Land,
    draw: function () {
        this.x -= this.speed;
        this.ctx.drawImage(this.img, this.x, this.y);

        if (this.x < -this.img.width) {
            this.x += this.img.width * 4;
        }
    }
}


// 管道

function Pioe(option) {
    this.ctx = option.ctx,
        this.img = option.upimg,
        this.dowmimg = option.dowmimg,
        this.x = option.x,
        this.y = -(150 + Math.floor(Math.random() * 150)),
        this.y1 = this.y + this.img.height + 120
    this.speed = 2


}
Pioe.prototype = {
    constructor: Pioe,
    draw: function () {
        //在路径上绘制一个与管道一样大小的矩形区域,为了做小鸟与管道撞击判断
        this.ctx.rect(this.x, this.y, this.img.width, this.img.height);
        this.ctx.rect(this.x, this.y1, this.dowmimg.width, this.dowmimg.height);
        // this.ctx.stroke();




        this.x -= this.speed;
        this.ctx.drawImage(this.img, this.x, this.y);
        this.ctx.drawImage(this.dowmimg, this.x, this.y1);
        if (this.x < -this.img.width) {
            this.x += 200 * 5;
            //管道出去之后,下次再使用的时候,坐标需要重新产生
            this.y = -(150 + Math.floor(Math.random() * 150)),
                this.y1 = this.y + this.img.height + 120
        }
    }
}