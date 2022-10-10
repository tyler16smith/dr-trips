import React from 'react';
import { Button } from 'react-bootstrap';
import eggshell from './assets/eggshell.png';
import eggshell_left from './assets/eggshell_left.png';
import eggshell_right from './assets/eggshell_right.png';
import healthcare_worker from './assets/healthcare_worker.png';
import healthcare from './assets/healthcare.png';

export default function App() {

  function sendEmail(e) {
    console.log("Send email via EmailJS")
  }

  const styles = {
    container: {
        backgroundImage: `url(${eggshell})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
    }
};

  return (
    <div>

      <div id="top" className='lg:flex lg:justify-center bg-light-gray -mt-4'>
        <div className='flex justify-center items-center' style={styles.container}>
          <div>
            <div className='flex justify-center tracking-tight font-landingSans'>
              <p className='text-7xl font-black text-center leading-tight tracking-tighter'>We're <span className='text-bot-blue'>cracking open </span><br/>healthcare data</p>
            </div>
            <div className='flex justify-center mt-4'>
              <p className='lg:w-7/12 lg:my-8 place-self-center text-2xl mx-3 text-center'>We're opening the curtains to get you easily-accessible, transparent healthcare data.</p>
            </div>
            <div className='flex justify-center mt-5'>
              <a href='#contact'>
                <Button className='mx-2 lg:text-xl rounded-lg px-8 py-4 bg-bot-blue hover:bg-dark-bot-blue' style={{color: 'white'}}>Contact Today</Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='mb-32 mx-5'>
        <div className='lg:flex lg:justify-center lg:items-center lg:gap-24 lg:h-80 mb-16'>
          <div className='lg:flex lg:justify-center mb-5'>
            <img src={healthcare} alt="healthcare data" className='h-80 rounded-lg' />
          </div>
          <div className='my-3'>
            <p className='text-4xl tracking-tighter font-extrabold'>For Businesses</p>
            <p className='text-2xl text-dark-gray mt-5 w-96'>Leverage our data in your negotiations to help make better decisions.</p>
          </div>
        </div>
        <div className='lg:flex lg:justify-center lg:items-center lg:gap-24 lg:h-80'>
          <div className='my-3'>
            <p className='text-4xl tracking-tighter font-extrabold'>For Consumers</p>
            <p className='text-2xl text-dark-gray mt-5 w-96'>Know what the price should be <b>before</b> spending thousands of dollars.</p>
          </div>
          <div className='lg:flex lg:justify-center mb-5'>
            <img src={healthcare_worker} alt="healthcare worker" className='rounded-lg h-80' />
          </div>
        </div>
      </div>

      <div className='lg:p-5' id="contact">
        <div className='flex justify-center lg:mb-16 mx-2'>
          <div className='lg:m-5 px-5 py-5 bg-light-gray lg:w-1/2 rounded-xl'>
            <form className='text-centerpx-12 py-5' onSubmit={sendEmail}>
              <p className='flex justify-center text-4xl font-extrabold'>Contact our team</p>
              <div className='lg:flex lg:justify-center mt-5 mx-2'>
                <input placeholder='First Name' type="text" name="first_name" className='h-14 rounded-md border-light-gray-3 border-2 px-3 mt-3 lg:w-1/3 lg:mr-3 md:mr-3' />
                <input placeholder='Last Name' type="text" name="last_name" className='h-14 rounded-md border-light-gray-3 border-2 px-3 mt-3 lg:w-1/3 lg:mr-3 md:mr-3' />
              </div>
              <div className='lg:flex lg:justify-center mx-2'>
                <input placeholder='Phone' type="phone" name="phone" className='h-14 -px-1 rounded-md border-light-gray-3 border-2 px-3 mt-3 lg:w-1/3 lg:mr-3 md:mr-3' />
                <input placeholder='Email' type="email" name="email" className='h-14 -px-1 rounded-md border-light-gray-3 border-2 px-3 mt-3 lg:w-1/3 lg:mr-3 md:mr-3' />
              </div>
              <div className='lg:flex lg:justify-center'>
                <textarea placeholder='Message' type="text" name="message" className='h-24 pt-2 rounded-md border-light-gray-3 border-2 px-3 mt-3 lg:w-2/3 lg:mr-3 md:mr-3' />
              </div>
              <div className='lg:flex lg:justify-center mt-5'>
                <Button
                  type='submit'
                  variant='primary-secondary'
                  className='bg-bot-blue text-xl hover:bg-dark-bot-blue mt-3 h-14 w-64 rounded-md px-3 lg:mr-3 py-2'
                  style={{color: 'white'}}
                >
                    Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <hr className='border-gray' />
      <div className='text-center lg:mx-96'>
        <div className='lg:flex lg:justify-around pt-16 pb-12'>
          <div className='flex justify-center mb-5'>
            <img src={eggshell_left} alt="logo" className='h-32 rounded-lg' />
          </div>
          <div className='text-gray my-10'>
            <p className='font-bold mb-3'>Quick Links</p>
            <a href='#top' className='hover:text-bot-blue hover:no-underline'>
              <p className='mb-3'>Home</p>
            </a>
            <a href='#contact' className='hover:text-bot-blue hover:no-underline'>
              <p className='mb-3'>Contact</p>
            </a>
          </div>
          <div className='flex justify-center mb-5'>
            <img src={eggshell_right} alt="logo" className='h-32 rounded-lg' />
          </div>
        </div>
        <div className='flex justify-center mx-5 pb-2 text-gray'>
          <p>© 2022 InvestorBot, LLC. All rights reserved.</p>
        </div>
      </div>

    </div>
  )
}
