import React from 'react';
import { useFormik } from 'formik';
import { registerFormShemas } from '../schemas/RegisterFormSchemas';

function RegisterForm() {

  const submit = (values, actions) => {
    console.log(values);
    setTimeout (() => {
      actions.resetForm(); // Formu başarıyla gönderdikten sonra sıfırlar
    },2000)
  };

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
      term: false  // Checkbox için boolean değeri
    },
    validationSchema: registerFormShemas,
    onSubmit: submit
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='inputDiv'>
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email Giriniz"
            value={values.email}
            onChange={handleChange}
            onBlur={handleChange} // Dokunma kontrolü için
          />
          {errors.email && touched.email && <p className='input-error'>{errors.email}</p>}
        </div>

        <div className='inputDiv'>
          <label>Yaş</label>
          <input
            type="number"
            id="age"
            placeholder="Yaşınızı Giriniz"
            value={values.age}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.age && touched.age && <p className='input-error'>{errors.age}</p>}
        </div>

        <div className='inputDiv'>
          <label>Şifre</label>
          <input
            type="password"
            id="password"
            placeholder="Şifrenizi Giriniz"
            value={values.password}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.password && touched.password && <p className='input-error'>{errors.password}</p>}
        </div>

        <div className='inputDiv'>
          <label>Şifrenizi Tekrar Girin</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Şifre Tekrarı"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.confirmPassword && touched.confirmPassword && <p className='input-error'>{errors.confirmPassword}</p>}
        </div>

        <div className='inputDiv'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              id="term"
              checked={values.term}
              onChange={handleChange}
              onBlur={handleChange}
            />
            <label htmlFor="term" style={{ marginLeft: '8px' }}>
              Kullanıcı sözleşmesini kabul ediyorum
            </label>
          </div>
          {errors.term && touched.term && <p className='input-error'>{errors.term}</p>}
        </div>

        <button type="submit" className="saveButton">Kaydet</button>
      </form>
    </div>
  );
}

export default RegisterForm;
