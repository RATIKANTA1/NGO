import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import MyFooter from "./MyFooter"
import Navbar from "./Navbar"
import image from "/src/assets/donationb.jpg"
const DonatePage2 = () => {

  const HandleClick = async () => {

    try {

      await axios.post('http://localhost:8000/order', data).then(res => {

        console.log(res.data)
        if (res.data.success === true) {
          window.location.href = res.data.data.instrumentResponse.redirectInfo.url

        }

      }).catch(err => {
        console.log(err)
      })

    } catch (error) {
      console.log(error)
    }
  }

  //new idea
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};

    // Validate phone number length (10 digits)
    if (formData.phone.length !== 10) {
      formErrors.phone = "Phone number must be exactly 10 digits.";
    }

    // Validate amount (not exceeding 1,000,000)
    if (parseInt(formData.amount) > 1000000) {
      formErrors.amount = "Amount should not exceed 1,000,000.";
    }

    // Validate email length (not exceeding 35 characters)
    if (formData.email.length > 35) {
      formErrors.email = "Email should not exceed 35 characters.";
    }

    return formErrors;
  };

  let data = {
    name: formData.name,
    amount: formData.amount,
    number: formData.phone,
    MID: 'MID' + Date.now(),
    transactionId: 'T' + Date.now()
  }





  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      // Form is valid, submit the data
      console.log("Form submitted:", formData);
      // Reset form or do any additional processing here

      HandleClick();

    } else {
      // Set errors to display
      setErrors(formErrors);
    }
  };



  return (
    <>


      <Navbar />
      <div className="min-h-screen bg-gradient-to-r bg-gray-100 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl">
          <h2 className="md:text-4xl text-3xl font-semibold text-center text-gray-800 mb-8">
            Help Us Safeguard the Earth: Your Donation Makes a Difference
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 shadow-lg shadow-black">
            {/* Image Section */}
            <div className="hidden lg:flex flex-col  p-3">
              <img
                src={image}
                alt="Environmental Safety"
                className="rounded-xl shadow-lg w-full h-fit"
              />
              <p className='text-justify mt-6'>Environmental safety focuses on protecting the planet from pollution and harmful practices, ensuring a healthy ecosystem. It's essential for preserving natural resources and safeguarding the environment for future generations.</p>
              <span className='text-end mt-3'> ~KSHITIKSHA FOUNDATION</span>
            </div>

            {/* Form Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 w-full">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-lg font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-300"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-lg font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-300"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone Number Input */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 text-lg font-medium mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-300"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Amount Input */}
                <div>
                  <label
                    htmlFor="amount"
                    className="block text-gray-700 text-lg font-medium mb-1"
                  >
                    Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    className="w-full px-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-300"
                    placeholder="Enter amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                  />
                  {errors.amount && (
                    <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 focus:bg-indigo-700 transition-colors duration-300 font-semibold shadow-md"
                >
                  Proceed
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <MyFooter />
    </>
  )
}

export default DonatePage2
