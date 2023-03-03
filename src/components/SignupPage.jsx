import React, { useState } from 'react';

function SignupPage() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    nationality: 'en',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const isEmailValid = (email) => {
    return formValues.email === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPasswordStrong = (password) => {
    return formValues.password === '' ||  password.length >= 8;
  };

  return (
    <div>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          style={{ borderColor: isEmailValid(formValues.email) ? 'green' : 'red' }}
        />
        {isEmailValid(formValues.email) ? <p style={{color:'green'}}>valid email</p> : <p style={{color:'red'}}>invalid email</p>}
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          style={{ borderColor: isPasswordStrong(formValues.password) ? 'green' : 'red' }}
        />
        {isPasswordStrong(formValues.password) ? <p style={{color:'green'}}>valid password</p> : <p style={{color:'red'}}>weak password</p>}
      </label>
      <br />
      <label>
        Nationality:
        <select name="nationality" value={formValues.nationality} onChange={handleChange}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </label>
      <br />
      <p>
        {formValues.nationality === 'en' && 'Hello'}
        {formValues.nationality === 'de' && 'Hallo'}
        {formValues.nationality === 'fr' && 'Bonjour'}
      </p>
      <p>Your email is {formValues.email}</p>
    </div>
  );
}

export default SignupPage;
