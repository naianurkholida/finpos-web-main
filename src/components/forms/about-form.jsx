import React from 'react';
import { useFormik } from 'formik';
import ErrorMsg from './error-msg';
import { aboutSchema } from '../../utils/validation-schema';

const AboutForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', msg: '' },
    validationSchema: aboutSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      resetForm()
    }
  })
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className=" col-12">
          <div className="input">
          <input type="number" min="0" max="5" onChange={handleChange}
              onBlur={handleBlur} placeholder="rate" id="rating" />
            {touched.rating && <ErrorMsg error={errors.rating} />}
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="input">
            <input value={values.name} onChange={handleChange}
              onBlur={handleBlur} type="text" placeholder="Nama" id="name" />
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="input">
            <input value={values.perusahaan} onChange={handleChange}
              onBlur={handleBlur} type="text" placeholder="Perusahaan" id="perusahaan" />
            {touched.perusahaan && <ErrorMsg error={errors.perusahaan} />}
          </div>
        </div>
        <div className="col-12">
          <div className="textarea">
            <textarea value={values.msg} onChange={handleChange} id="msg"
              onBlur={handleBlur} placeholder="Comment"></textarea>
            {touched.msg && <ErrorMsg error={errors.msg} />}
          </div>
        </div>
      </div>
      <input className="tp-btn-lg-yellow" type="submit" value="Kirim Komentar" />
    </form>
  );
};

export default AboutForm;