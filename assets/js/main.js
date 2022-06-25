"use strict";

function toast({ title = '', msg = '', type = 'info', duration = 3000 }) {
    const main = document.getElementById('container-toast');
    if (main) {
        const toast = document.createElement('div');
        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-triangle",
            error: "fas fa-exclamation-circle",
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast);
        }, duration + 600);

        toast.onclick = (e) => {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft .3s ease-in-out, faceOut .6s ease-in-out ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h4 class="toast__title">${title}</h4>
                <p class="toast__msg">${msg}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast);
        
    }
}

function showSuccessToast() {
    toast({
        title: "Thành Công",
        msg: "Bạn đã đăng ký thành công",
        type: "success",
        duration: 1000
    });
}

function showErrorToast() {
    toast({
        title: "Thất Bại",
        msg: "Bạn đã đăng ký thất bại",
        type: "error",
        duration: 3000
    });
}