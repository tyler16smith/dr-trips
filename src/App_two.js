import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import dr from './assets/dr.jpg';

export default function App() {

  const [scroll, setScroll] = useState(false);

  function sendEmail(e) {
    console.log("Send email via EmailJS");
  }

  const styles = {
    container: {
        backgroundImage: `url(${dr})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
    }
  };


  return (
    <div onScroll={() => setScroll(true)}>

      {/* Nav bar */}
      <div style={styles.container}>
        <div id="top" className={(scroll) ? 'tracking-wide pt-8 text-xl' : 'tracking-wide pt-8 text-xl'} style={{width: '100vw'}}>
          <div className='flex justify-around mb-5 text-white'>
            <a href="#top">Home</a>
            <div className='flex justify-center gap-5'>
              <a href="#about" className='py-2 px-5 rounded-md hover:bg-gray'>About</a>
              <a href="#team" className='py-2 px-5 rounded-md hover:bg-gray'>Apply</a>
              <a href="#contact" className='py-2 px-5 rounded-md hover:bg-gray'>Contact</a>
            </div>
          </div>
          {/* <hr className={(scroll) ? 'border-2 border' : 'hidden'} style={{width: '100vw'}} /> */}
        </div>

        <div className='lg:flex lg:justify-center text-white' style={{height: '90vh'}}>
          <div className='flex justify-center items-center'>
            <div>
              <div className='flex justify-center tracking-tight font-landingSans'>
                <div className='text-7xl font-black text-center leading-tight tracking-tighter'>
                  <p>Making an impact in</p>
                  <p className='rounded-xl px-5 mt-2 bg-bot-blue'>3rd world education</p>
                </div>
              </div>
              <div className='flex justify-center mt-4'>
                <p className='lg:w-1/2 lg:my-8 place-self-center text-2xl mx-3 text-center'>We're helping 300+ students in the Dominican Republic get an education <span className='underline'>and you can help us</span>.</p>
              </div>
              <div className='flex justify-center mt-5'>
                <a href='#about'>
                  <Button className='mx-2 lg:text-xl rounded-lg px-8 py-4 bg-bot-blue hover:bg-dark-bot-blue' style={{color: 'white'}}>Read more</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-32 bg-light-gray' id='about'>
        <div className='mx-5'>
          <p className='flex justify-center text-5xl tracking-tighter font-extrabold'>About us</p>
          <div className='mt-24 lg:flex lg:justify-center lg:items-center lg:gap-24 lg:h-80 mb-16'>
            <div className='lg:flex lg:justify-center mb-5'>
              <img src={dr} alt="healthcare data" className='h-80 rounded-lg' />
            </div>
            <div className='my-3'>
              <p className='text-4xl tracking-tighter font-extrabold'>Our Mission</p>
              <p className='text-2xl text-dark-gray mt-5 w-96'>We hope to increase the teach the rising generation proper cirriculum by supplementing their education with cirriculum in health, spanish, english, math, science, music, and computers.</p>
            </div>
          </div>
          <div className='lg:flex lg:justify-center lg:items-center lg:gap-24 lg:h-80'>
            <div className='my-3'>
              <p className='text-4xl tracking-tighter font-extrabold'>Our Story</p>
              <p className='text-2xl text-dark-gray mt-5 w-96'>Four years ago, we bought a complex in the center of the slums.</p>
            </div>
            <div className='lg:flex lg:justify-center mb-5'>
              <img src={dr} alt="healthcare worker" className='rounded-lg h-80' />
            </div>
          </div>
        </div>
      </div>

      <div className='my-24' id='team'>
        <p className='flex justify-center text-5xl tracking-tighter font-extrabold'>Meet the Team</p>
        <div className='lg:flex justify-center gap-32 mt-16 mx-5'>
          <div>
            <div className='flex justify-center mt-5'>
              <img src={dr} alt="scott peterson" className='rounded-lg h-80' />
            </div>
            <div className='flex justify-center'>
              <p className='text-2xl text-dark-gray text-center mt-5' style={{width: '500px'}}>Introduction here.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:p-5 mt-16 bg-light-gray' id="contact">
        <div className='flex justify-center lg:mb-16 mx-2'>
          <div className='lg:m-5 px-5 py-5 bg-light-gray lg:w-1/2 rounded-xl'>
            <form className='text-center p-5' onSubmit={sendEmail}>
              <p className='flex justify-center text-5xl font-extrabold tracking-tighter'>Contact us</p>
              <div className='lg:flex lg:justify-center mt-12 mx-2'>
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
          </div>
          <div className='text-gray my-10'>
            <p className='font-bold mb-3 text-lg'>Quick Links</p>
            <a href='#top' className='hover:text-bot-blue hover:no-underline'>
              <p className='mb-3'>About</p>
            </a>
            <a href='#top' className='hover:text-bot-blue hover:no-underline'>
              <p className='mb-3'>Apply</p>
            </a>
            <a href='#contact' className='hover:text-bot-blue hover:no-underline'>
              <p className='mb-3'>Contact</p>
            </a>
          </div>
          <div className='flex justify-center mb-5'>
          </div>
        </div>
        <div className='flex justify-center mx-5 pb-2 text-gray'>
          <p>© 2022 DR Trips. All rights reserved.</p>
        </div>
      </div>

    </div>
  )
}
