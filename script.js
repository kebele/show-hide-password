const password = document.getElementById('giris');
const ikon = document.getElementById('ikon');

gosterGizle = () => {
	if(password.type == 'password'){
		password.setAttribute('type', 'text');
		ikon.classList.add('fa-eye-slash');
	} else {
		ikon.classList.remove('fa-eye-slash');
		password.setAttribute('type', 'password')
	}
};

ikon.addEventListener('click', gosterGizle);