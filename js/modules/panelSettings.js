export class PanelSettings{
    constructor(open, close, container, popup, accept){
        this.openBtn = document.querySelector(open);
        this.closeBtn = document.querySelector(close);
        this.container = document.querySelector(container)
        this.infoPopup = document.querySelector(popup)
        this.acceptPopup = document.querySelector(accept)
        this.openPanel()
        this.closePanel()
        this.popupClose()
    }
    openPanel(){
        this.openBtn.addEventListener('click', ()=>{
            this.container.classList.add('settings-container--active')
        })
    }
    closePanel(){
        this.closeBtn.addEventListener('click', ()=>{
            this.container.classList.remove('settings-container--active')
        })
    }
    openPopup(){
        this.infoPopup.classList.add('info-popup--active')
    }
    popupClose(){
        this.acceptPopup.addEventListener('click', ()=> this.infoPopup.classList.remove('info-popup--active'))
    }
}