const Methods = {
	init() {
        Methods.sendForm();
        
        if ( window.innerWidth <= 768) {
            Methods.structureMobile();
        }
	},
    
    sendForm() {

        try {
            const form = document.querySelector('#j-form-news');
            const btn = form.querySelector('#btn-newsletter');
            
            const userData = {
                email: document.querySelector("#email-newsletter")
            };
            
            form.addEventListener('submit', ev => {
                ev.preventDefault();
                btn.value = 'Enviando...';
                

                const headers = new Headers({
                    "Content-Type": "application/json",
                    "Accept": "application/vnd.vtex.ds.v10+json",
                });

                const data = {
                    'email': userData.email.value
                }
                
                fetch('/api/dataentities/NL/documents/?an=highmedtatix', {
                    method: "PATCH",
                    headers: headers,
                    body: JSON.stringify(data)
                }).then(res => {
                    console.log(res);
                    
                    userData.email.value = '';

                    btn.textContent = 'Enviado';
                    btn.style.pointerEvents = "none";

                }).catch(err => {
                    console.log(err);
                    btn.textContent = 'Tente novamente';
                })
            });
        } catch(e) {
            console.warn("Não existe newsletter nessa página.");
        }
		
    },
    
    structureMobile() {

        try {
            const btn = document.querySelector('#btn-newsletter');
            const fieldset = document.querySelector('#j-form-news fieldset');
    
            fieldset.appendChild(btn);
        } catch(e) {
            console.warn("Mobile -- Não existe newsletter nessa página.");
        }
    }
};

export default {
	init: Methods.init,
}