import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dr_og from './assets/dr_og.jpg';
import emailjs from 'emailjs-com';

export default function AgentLandingPage() {

  const notifyMessageSent = (msg) => toast.success(<p>{msg}</p>, {
    toastId: 'messageSent',
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
  
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  const isMobile = width <= 768;

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_yj69lqb", 'dr_website', e.target, "JN_JwlFXMsr9Xk_-9")
    notifyMessageSent("Message sent successfully.");
  }


  return (
    <div>
      <ToastContainer />
      <div
        className='-mt-4 pb-32'
        // style={{
        //   backgroundImage: `url(${map_bg})`,
        //   backgroundPosition: 'center',
        //   backgroundSize: 'cover'
        // }}
      >
        <div className='bg-light-gray py-3'>
          <div className='flex justify-between items-center lg:mx-16 mx-3 pt-4 mb-4'>
            <p className='text-3xl font-extrabold tracking-tight'>🌴DR Trips</p>
            <a href="https://forms.gle/AQ4fv3vkMVr5GjL28" target="__blank" className='flex justify-center hover:no-underline'>
              <button style={{borderWidth: '1px'}} className='px-5 py-3 text-xl text-bot-blue bg-light-bot-blue-0 hover:bg-light-bot-blue font-semibold rounded-xl'>Sign up</button>
            </a>
          </div>
          <hr className='border-light-gray-4' />

          <div className='flex justify-center items-center'>
            <div className={`lg:pt-32 pt-28 pb-16 mx-3 ${isMobile ? 'w-header' : 'w-[700px]'}`}>  
              <div>
                <p className={`font-black text-center tracking-tighter leading-tight lg:mx-5 ${isMobile ? 'text-5xl' : 'text-6xl'}`}><span className='text-bot-blue'>Be</span> the change</p>
              </div>
              <div className='flex justify-center mb-5 lg:mx-5'>
                <p className='lg:text-2xl text-xl mt-6 text-center lg:leading-10 leading-8'>We're helping 300+ students in the Dominican Republic get an education <span className='font-semibold'>and you can help us</span>.</p>
              </div>
              <a href="https://forms.gle/AQ4fv3vkMVr5GjL28" target="__blank" className='flex justify-center mt-10 my-4 hover:no-underline'>
                <button className='px-10 py-4 text-xl bg-bot-blue hover:bg-dark-bot-blue text-white font-semibold rounded-xl'>Volunteer form</button>
              </a>
            </div>
          </div>

          {/* <div className='py-3 mx-2'>
            <div className='flex justify-center'>
              <iframe style={{ width: '1000px', height: isMobile ? '300px' : '500px' }} className='rounded-xl lg:shadow-xl shadow-gray cursor-pointer' src="https://www.youtube.com/embed/fLFw1Jjp01I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div> */}

        </div>

        <div className='flex justify-center items-center'>
          <div className='lg:flex lg:justify-center lg:items-center lg:gap-20 lg:py-32 pt-28 mx-3'>
            <div className={isMobile ? 'mt-5' : ''} style={{width: isMobile ? '100%' : '500px'}}>
              <p className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-extrabold tracking-tight`}>Our <span className='text-bot-blue'>Mission</span></p>
              <p className='text-xl mt-4'>Teach the rising generation proper cirriculum by supplementing their education in health, spanish, english, math, science, music, and computers.</p>
            </div>
            <div className={isMobile ? 'my-5' : ''}>
              <img src={dr_og} alt="stop_switching" className='rounded-xl' style={{width: isMobile ? '100%' : '600px'}} />
            </div>
          </div>
        </div>
        
        <div className='flex justify-center gap-10'>
          <img src={dr_og} alt="stop_switching" className={isMobile ? 'hidden' : 'rounded-xl'} style={{width: isMobile ? '100%' : '600px'}} />
          <div className='flex justify-start items-center'>
            <div className='lg:flex lg:justify-center lg:items-center lg:gap-20 lg:py-32 pt-20 mx-3'>
              <div className={isMobile ? 'mt-5' : ''} style={{width: isMobile ? '100%' : '500px'}}>
                <p className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-extrabold tracking-tight`}>Trip <span className='text-bot-blue'>Details</span></p>
                <p className='text-xl mt-4'>Trip details go here...</p>
              </div>
              <img src={dr_og} alt="stop_switching" className={isMobile ? 'rounded-xl mt-5' : 'hidden'} style={{width: isMobile ? '100%' : '600px'}} />
            </div>
          </div>
        </div>

        <div id="how-it-works" className='pt-24 lg:pb-44 pb-24'>
          <p className={`text-center lg:text-4xl text-3xl font-extrabold tracking-tight ${isMobile ? 'mt-5 mb-16' : 'mb-32'}`}>What will I be doing?</p>
          <div className={isMobile ? 'mx-5' : ''}>
            <div className={`lg:flex lg:justify-center lg:items-center lg:gap-32 mt-16`}>
              <div>
                <div className='flex justify-start items-center gap-4'>
                  <p className='ml-2 lg:text-5xl mt-2 text-4xl text-bot-blue font-extrabold'>01</p>
                  <p
                    style={{width: isMobile ? '200px' : '300px'}}
                    className='bg-light-bot-blue-0 py-2 mt-2 text-bot-blue font-bold lg:text-3xl text-2xl rounded-xl text-center shadow-md shadow-light-gray-3'
                  >
                    Build cirriculum
                  </p>
                </div>
                <p className='ml-2 text-xl mt-3 lg:w-96 leading-8'>Build cirriculum in areas like health, science, math, music, english, spanish, business, and technology.</p>
              </div>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-center lg:gap-32 mt-16`}>
              <div>
              <div className='flex justify-start items-center gap-4'>
                  <p className='ml-2 lg:text-5xl mt-2 text-4xl text-bot-blue font-extrabold'>02</p>
                  <p
                    style={{width: isMobile ? '200px' : '300px'}}
                    className='bg-light-bot-blue-0 py-2 mt-2 text-bot-blue font-bold lg:text-3xl text-2xl rounded-xl text-center shadow-md shadow-light-gray-3'
                  >
                    Teach students
                  </p>
                </div>
                <p className='ml-2 text-xl mt-3 lg:w-96 leading-8'>Help teach students throughout your stay in the DR</p>
              </div>
            </div>
          </div>
        </div>

        <div id="how-it-works" className='pb-20'>
          <p className={`text-center lg:text-4xl text-3xl font-extrabold tracking-tight my-5`}>Frequently Asked Questions</p>
          <Accordion className='flex justify-center items-center'>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p className='bg-light-gray py-3 rounded-xl text-xl font-semibold' style={{width: isMobile ? '300px' : '500px'}}>Question 1</p>
              </Accordion.Header>
              <Accordion.Body className='flex justify-center items-center text-xl bg-light-gray py-3 rounded-b-xl'>
                <p>Answer 1</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        
        <div id="how-it-works" className='py-24 flex justify-center items-center'>
            <form className='text-center p-5' onSubmit={sendEmail}>
              <p className={`text-center lg:text-4xl text-3xl font-extrabold tracking-tight`}>Contact us</p>
              <div className='lg:flex lg:justify-center mt-8 mx-2'>
                  <input placeholder='Name' name="name" type="text" className='h-14 rounded-md border-light-gray-3 border-2 px-3 mt-3 lg:mr-3 md:mr-3' style={{width: isMobile ? '100%' : '300px'}} />
                  <input placeholder='Email' type="text" name="email" className='h-14 rounded-md border-light-gray-3 border-2 px-3 mt-3 lg:mr-3 md:mr-3' style={{width: isMobile ? '100%' : '300px'}} />
              </div>
              <div className='lg:flex lg:justify-center'>
                  <textarea placeholder='Message' type="text" name="message" className='h-32 pt-2 rounded-md border-light-gray-3 border-2 px-3 mt-3 lg:mr-3 md:mr-3' style={{width: isMobile ? '100%' : '612px'}} />
              </div>
              <div className='lg:flex lg:justify-center mt-5'>
                  <button
                      type='submit'
                      variant='primary-secondary'
                      className='bg-bot-blue text-xl hover:bg-dark-bot-blue h-14 w-64 rounded-md px-3 lg:mr-3 py-2'
                      style={{color: 'white', width: isMobile ? '100%' : '612px'}}
                  >
                      Send message
                  </button>
              </div>
          </form>
        </div>

      </div>

      <div className={`flex justify-center items-center pb-16 ${isMobile ? 'px-3' : ''}`} id="beta">
        <div className='lg:px-5 px-3 py-8 -mt-20 bg-light-bot-blue-0 lg:w-8/12 rounded-xl shadow shadow-light-gray-3'>
          <div className='lg:flex lg:justify-between lg:mr-12'>
            <div className={isMobile ? '' : 'ml-3'}>
              <p className='lg:text-4xl text-3xl text-black tracking-tight font-extrabold mb-2 text-center-mobile'>Join the crew</p>
              <p className='font-gray text-xl text-center-mobile'>Help us develop cirriculum, teach students, and build the program.</p>
            </div>
            <a href="https://forms.gle/AQ4fv3vkMVr5GjL28" target="__blank" className='flex justify-center hover:no-underline'>
              <button
                style={{width: isMobile ? '100%' : ''}}
                className={`px-5 py-3 text-xl text-white bg-bot-blue hover:bg-dark-bot-blue font-semibold rounded-xl ${isMobile ? 'mt-4 -mb-2' : ''}`}
              >
                Sign up
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <hr className='border-light-gray-4' />
      <div className='flex flex-col justify-center items-center text-center my-20'>
        <p className='text-3xl font-extrabold tracking-tight -ml-4'>🌴DR Trips</p>
        <div className='flex justify-center mx-2 pb-3 text-light-gray-4 mt-3'>
          <p>© 2023 DR Trips. All rights reserved.</p>
        </div>
      </div>

    </div>
  )
}
