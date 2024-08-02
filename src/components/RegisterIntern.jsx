import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import MyFooter from './MyFooter';
import Navbar from './Navbar';

// Utility function to generate a random password
const generatePassword = (length) => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

const RegisterIntern = ({ tracker }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [availability, setAvailability] = useState("");
  const [skills, setSkills] = useState("");
  const [verificationCode, setVerificationCode] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleEmailVerification = async () => {
    try {
      const password = generatePassword(8);
      setGeneratedPassword(password);
      // console.log(email, password);

      emailjs.send("service_79pef3p", "template_agck2dq", {
        to_email: email,
        password: password,
      }, '_E9P2OWOOR5xcUXI0')
        .then((response) => {
          console.log('Email sent successfully', response);
          Swal.fire({
            title: 'Email Sent',
            text: 'Check your email for the verification password.',
            icon: 'info',
            confirmButtonColor: '#3085d6',
          });
        }, (error) => {
          console.error('EmailJS Error:', error);
          Swal.fire({
            title: 'Error',
            text: 'Failed to send email. Please try again.',
            icon: 'error',
            confirmButtonColor: '#d33',
          });
        });

    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error',
        text: 'An unexpected error occurred. Please try again.',
        icon: 'error',
        confirmButtonColor: '#d33',
      });
    }
  };

  const verifyCode = async () => {
    try {
      if (verificationCode === generatedPassword) {
        setEmailVerified(true);
        Swal.fire({
          title: 'Verified',
          text: 'Email successfully verified.',
          icon: 'success',
          confirmButtonColor: '#3085d6',
        });
        setVerificationCode('');

      } else {
        throw new Error('Invalid verification code.');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
        confirmButtonColor: '#d33',
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailVerified) {
      Swal.fire({
        title: 'Error',
        text: 'Please verify your email first.',
        icon: 'error',
        confirmButtonColor: '#d33',
      });
      return;
    }

    const allData = {
      Name: name,
      Email: email,
      Phone: phone,
      Availability: availability,
      Skills: skills,
    };

    axios.post('https://sheet.best/api/sheets/b9a2cd14-2883-4654-8ee8-1df4c13b82a1', allData).then((response) => {

      alert("successfully registered");

      //for pop up
      Swal.fire({
        title: 'Success',
        text: 'you have successfully registered',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        footer: '<a href="/">Go to Home</a>'
      });

      setAvailability('');
      setAvailability('');
      setEmail('');
      setName('');
      setPhone('');
      setSkills('');
      setVerificationCode('');
      setEmailVerified(false);

    }).catch((error) => {
      console.log(error);
    })

  }


  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-orange-50 p-4">
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-8">Intern Registration</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <button type="button" className="mt-2 py-1 px-3 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={handleEmailVerification}>Verify Email</button>
            </div>
            {
              (emailVerified) ? <div className='inline-flex items-center'>
                <span><img className='collapse lg:visible h-[0rem] lg:h-[2rem]' src='/src/assets/success.png' /></span><p className='text-lime-600 font-semibold text-lg'> {email} is Successfully Verified</p>
              </div>
                : <div>
                  <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">Verification Code</label>
                  <input type="text" id="verificationCode" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
                  <button type="button" className="mt-2 py-1 px-3 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={verifyCode}>Submit Verification Code</button>
                </div>
            }
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability</label>
              <input type="text" id="availability" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={availability} onChange={(e) => setAvailability(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
              <textarea id="skills" rows="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={skills} onChange={(e) => setSkills(e.target.value)} required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <MyFooter />
    </>
  )
}

export default RegisterIntern