import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className='w-full h-32 flex justify-evenly items-center bg-green-900 text-white'>
        <div>
          <p>About</p>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <p>Help</p>
          <ul>
            <li>Payment</li>
            <li>Shipping</li>
            <li>Cancellation</li>
          </ul>
        </div>
        <div>
          <p>Consumer Policy</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>Terms and Condition</li>
          </ul>
        </div>
        <div>
          <p>Social</p>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <p className='w-full py-1 text-white text-center bg-red-600'>
        Clothing, Best apparels online store
      </p>
    </footer>
  );
};

export default Footer;
