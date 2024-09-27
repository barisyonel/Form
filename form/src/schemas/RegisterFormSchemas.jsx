import * as yup from 'yup';

export const registerFormShemas = yup.object().shape({
	email : yup.string().email("Geçerli  Email adresi giriniz ")
	.required("Email Adresi zorunlu"),

	age :yup.number().positive("Pozitif bir değer giriniz").integer("Tam sayı giriniz")
	.required("Yaş alanı zorunlu"),

	password : yup.string()
	.required("Şifre Alanı zorunlu"),

	confirmPassword : yup.string().required("Şifre tekrarı zorunlu")
	.oneOf([yup.ref('password', yup.password)]),
	
	term :yup.boolean().required("Lütfen kutucuğu onaylayınız")
})