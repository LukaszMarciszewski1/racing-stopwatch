export class Time{
    constructor(nowTime){
     this.nowTime = document.querySelector(nowTime);
     this.getTime = this.getTime.bind(this)
    }
    getTime(){
        const time = new Date();
        const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
        const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
        const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
        this.nowTime.textContent = `${hours}:${minutes}:${seconds}`
    }
}