import React from 'react';
import { useFormik } from 'formik';
import { loginSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import Link from 'next/link';
import Package from '../../../src/data/option-package.js'
import useFirebase from '../../hooks/use-firebase';



const LoginForm = () => {
  // use firebase 
  const {loginWithEmailPassword,resetPassword} = useFirebase();
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      loginWithEmailPassword(values.email,values.password)
      resetForm()
    }
  })

  // handleResetPass
  const handleResetPass = (email) => {
    resetPassword(email);
  }



  return (
    <form onSubmit={handleSubmit}>
      <div className="tp-mail">
  <select
    value={values.paket}
    onChange={handleChange}
    onBlur={handleBlur}
    id="yourName"
  >
    <option value="" hidden selected>pilih paket</option>
    {Package.map((items)=>(
      <option value={items.id}>{items.name}</option>
    ))}
  </select>
</div>

      <div className="tp-mail">
        <input onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Nama Lengkap" id="Nama_client" />
      </div>
      <div className="tp-mail">
        <input onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="email" id="email" />
        {/* {touched.email && <ErrorMsg error={errors.email} />} */}
      </div>
      <div className="tp-mail">
        <input onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Nomor Whatsapp " id="Whatsapp" />
      </div>
      <div className="tp-mail">
        <input onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Nama Usaha" id="nama-usaha" />
      </div>
      <div className="tp-mail">
        <input onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder='Jenis Usaha' id="messages" />
      </div>
      
      <div className="tp-login-button">
        <button className="tp-btn-yellow w-100" type="submit">Order Now</button>
      </div>
    </form>
  );
};

export default LoginForm;