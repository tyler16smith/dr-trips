import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import kids from './assets/kids.png';
import teachers from './assets/teachers.png';
import emailjs from 'emailjs-com';
import AccordianContent from './AccordianContent';

export default function AgentLandingPage() {

  const [showMore, setShowMore] = useState(false);
  
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

  const FAQs = [
    {
      "question": "Where will I be staying?",
      "answer": "We will be using your deposits to rent a few homes in the neighborhood where the Faro center is located. There will be two different houses for men and for women. If any married couples come, we will do our best to keep you in the same house if organization permits. ",
      "thisKey": "01"
    },
    {
      "question": "Who will I be staying with?",
      "answer": "You will be staying with the other volunteers. There will be two different houses for men and for women. If any married couples come, we will do our best to keep you in the same house if organization permits. ",
      "thisKey": "02"
    },
    {
      "question": "How safe is it?",
      "answer": "Moderately. Recommend not wandering around alone. Recommend not going out at night. ",
      "thisKey": "03"
    },
    {
      "question": "Will there be electricity?",
      "answer": "Mostly. The electricity there goes in and out a lot, but overall you should have electricity.",
      "thisKey": "04"
    },
    {
      "question": "Laundry?",
      "answer": "There will be manual washer machines at the homes that you may use once a week.",
      "thisKey": "05"
    },
    {
      "question": "Will there be running water?",
      "answer": "Mostly. The running water goes in and out a lot, but overall you should have running water.",
      "thisKey": "06"
    },
    {
      "question": "Will I have a flushing toilet?",
      "answer": "Yes",
      "thisKey": "07"
    },
    {
      "question": "Food sources?",
      "answer": "There are a few local restaurants that are fun and safe to eat at. There are also several grocery stores that you can go to and so you can cook for yourself. ",
      "thisKey": "08"
    },
    {
      "question": "Will I be able to call home?",
      "answer": "Yes! Hotspot? Wifi box? At the center? Over cell data using facebook messenger.",
      "thisKey": "09"
    },
    {
      "question": "Will I be able to buy toiletries if needed?",
      "answer": "Yes! Sirena is a very reliable large supermarket (more than just food).",
      "thisKey": "10"
    }, 
    {
      "question": "Getting clean drinking water?",
      "answer": "Yes! You will need to buy the bottled jugs, but yes.",
      "thisKey": "11"
    },
    {
      "question": "Will there be internet?",
      "answer": "The Faro Center has wifi as long as the electricity is working. You may use it as you please.",
      "thisKey": "12"
    },
    {
      "question": "How much free time will I have?",
      "answer": "At least a couple days per week and a few hours each day. Ideally we would like you to be very engaged in the assignments and work that needs to be done, however, you may also take free time as needed.",
      "thisKey": "13"
    },
    {
      "question": "What am I allowed to do with my free time?",
      "answer": "Rest, call home, see tourist sites, go to the beaches, etc.",
      "thisKey": "14"
    },
    {
      "question": "What are the best ways to get around?",
      "answer": "Uber is very reliable. The bus system is also good for longer rides - Faro Center Director can give you instructions. Guagua (large charter bus) that has more stops - cheaper. ",
      "thisKey": "15"
    },
    {
      "question": "Do I need to speak Spanish to come?",
      "answer": "No. Very helpful though.",
      "thisKey": "16"
    },
    {
      "question": "Will a translator be involved?",
      "answer": "Yes, at the school.",
      "thisKey": "17"
    },
    {
      "question": "Do I need to bring Dominican Pesos?",
      "answer": "No, we recommend using the ATMs down there for the best exchange rate. (not at the airport).",
      "thisKey": "18"
    },
    {
      "question": "What is the recommended time to stay?",
      "answer": "6 weeks or longer for best experience and impact. There are shorter trip options available if you cannot make 6 weeks work.",
      "thisKey": "19"
    },
    {
      "question": "What if I need to have a different arrival/departure date?",
      "answer": "We can accommodate this. We highly recommend following our outlined trip schedules. Please reach out through our “contact us” page to discuss further. ",
      "thisKey": "20"
    },
    {
      "question": "What will a basic day look like?",
      "answer": "The main goal is to help the Faro school center to become more self-sufficient. Daily you will likely spend most of your time at the school. Morning school hours are from 9am-12pm. Afternoon school hours are from 2pm-5pm. Adult classes in the evening vary.  You are not required or expected to be at the school for all of those hours. Just depending on your assignment and the needs to fulfill your assignment.",
      "thisKey": "21"
    }
  ]
  
  // if mobile
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
        <div className='bg-light-gray pt-3 pb-20'>
          <div className='flex justify-between items-center lg:mx-20 pt-4 mb-4'>
            <p className='text-3xl font-extrabold tracking-tight'>🌴DR Trips</p>
            <a href="https://forms.gle/AQ4fv3vkMVr5GjL28" target="__blank" className='flex justify-center hover:no-underline'>
              <button style={{borderWidth: '1px'}} className='px-7 py-2.5 text-xl border-[#378805] font-bold text-[#378805] hover:text-[#fff] hover:bg-[#378805] font-semibold rounded-xl'>Sign up</button>
            </a>
          </div>

          <div className='flex justify-center items-center'>
            <div className={`lg:pt-32 pt-28 pb-16 mx-3 ${isMobile ? 'w-header' : 'w-[700px]'}`}>  
              <div>
                <p className={`font-black text-center tracking-tighter leading-tight lg:mx-5 ${isMobile ? 'text-5xl' : 'text-6xl'}`}><span className='text-[#378805]'>Be</span> the change</p>
              </div>
              <div className='flex justify-center mb-5 lg:mx-5'>
                <p className='lg:text-2xl text-xl mt-6 text-center lg:leading-10 leading-8'>We're helping 300+ students in the Dominican Republic get an education <span className='font-semibold'>and you can help us</span>.</p>
              </div>
              <a href="https://forms.gle/AQ4fv3vkMVr5GjL28" target="__blank" className='flex justify-center mt-10 my-4 hover:no-underline'>
                <button className='px-8 py-3 text-xl bg-[#378805] hover:bg-[#2A6804] text-white font-semibold rounded-xl'>Volunteer form</button>
              </a>
            </div>
          </div>

          <div className='py-3 mx-2 mb-12'>
            <div className='flex justify-center'>
              <iframe style={{ width: '800px', height: isMobile ? '300px' : '800px' }} className='rounded-xl lg:shadow-xl shadow-gray cursor-pointer' src="https://www.youtube.com/embed/23FRB6Em4-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>

        </div>

        <div className='flex justify-center items-center'>
          <div className='lg:flex lg:justify-center lg:items-center lg:gap-20 lg:py-32 pt-28 mx-3'>
            <div className={isMobile ? 'mt-5' : ''} style={{width: isMobile ? '100%' : '500px'}}>
              <p className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-extrabold tracking-tight`}>Our <span className='text-[#378805]'>Mission</span></p>
              <p className='lg:text-2xl text-xl mt-6 lg:leading-10 leading-8 mt-4'>Teach the rising generation proper curriculum by supplementing their education in health, spanish, english, math, science, music, and computers.</p>
            </div>
            <div className={isMobile ? 'my-5' : ''}>
              <img src={kids} alt="stop_switching" className='rounded-xl' style={{width: isMobile ? '100%' : '600px'}} />
            </div>
          </div>
        </div>
        
        <div className='flex justify-center gap-20'>
          <img src={teachers} alt="stop_switching" className={isMobile ? 'hidden' : 'rounded-xl'} style={{width: isMobile ? '100%' : '600px'}} />
          <div className='flex justify-start items-center'>
            <div className='lg:flex lg:justify-center lg:items-center lg:gap-20 mx-3'>
              <div className={isMobile ? 'mt-5' : ''} style={{width: isMobile ? '100%' : '500px'}}>
                <p className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-extrabold tracking-tight`}>Trip <span className='text-[#378805]'>Overview</span></p>
                <p className='lg:text-2xl text-xl mt-6 lg:leading-10 leading-8 mt-4'>&#x2022; 2-16 weeks</p>
                <p className='lg:text-2xl text-xl mt-6 lg:leading-10 leading-8 mt-0.5'>&#x2022; $250/week + $500 admin expenses</p>
                <p className='lg:text-2xl text-xl mt-6 lg:leading-10 leading-8 mt-0.5'>&#x2022; Teach students</p>
                <p className='lg:text-2xl text-xl mt-6 lg:leading-10 leading-8 mt-0.5'>&#x2022; Teach teachers</p>
                <p className='lg:text-2xl text-xl mt-6 lg:leading-10 leading-8 mt-0.5'>&#x2022; Build curriculum</p>
                <p className='lg:text-2xl text-xl mt-6 lg:leading-10 leading-8 mt-0.5'>&#x2022; Beach trip</p>
              </div>
              <img src={teachers} alt="stop_switching" className={isMobile ? 'rounded-xl mt-5' : 'hidden'} style={{width: isMobile ? '100%' : '600px'}} />
            </div>
          </div>
        </div>

        <div id="how-it-works" className='pt-24 lg:pb-44 pb-24'>
          <p className={`text-center lg:text-4xl text-3xl font-extrabold tracking-tight mt-5 ${isMobile ? 'mb-16' : 'mb-32'}`}>What will I be doing?</p>
          <div className={isMobile ? 'mx-5' : ''}>
            <div className={`lg:flex lg:justify-center lg:items-center lg:gap-32 mt-16`}>
              <div>
                <div className='flex justify-start items-center gap-4'>
                  <p className='ml-2 lg:text-5xl mt-2 text-4xl text-[#378805] font-extrabold'>01</p>
                  <p
                    style={{width: isMobile ? '200px' : '300px'}}
                    className='bg-[#a3eb76]-0 py-2 mt-2 bg-[#e9ffdb] font-bold lg:text-3xl text-2xl rounded-xl text-center shadow-md shadow-light-gray-3'
                  >
                    Build curriculum
                  </p>
                </div>
                <p className='lg:text-2xl text-xl mt-6 lg:leading-10 leading-8' style={{width: isMobile ? '100%' : '500px'}}>Build curriculum in areas like health, science, math, music, english, spanish, business, and technology.</p>
              </div>
            </div>
            <div className={`lg:flex lg:justify-center lg:items-center lg:gap-32 mt-16`}>
              <div>
              <div className='flex justify-start items-center gap-4'>
                  <p className='ml-2 lg:text-5xl mt-2 text-4xl text-[#378805] font-extrabold'>02</p>
                  <p
                    style={{width: isMobile ? '200px' : '300px'}}
                    className='bg-[#a3eb76]-0 py-2 mt-2 bg-[#e9ffdb] font-bold lg:text-3xl text-2xl rounded-xl text-center shadow-md shadow-light-gray-3'
                  >
                    Teach students
                  </p>
                </div>
                <p className='lg:text-2xl text-xl mt-6 lg:leading-10 leading-8' style={{width: isMobile ? '100%' : '500px'}}>Help teach students throughout your stay in the DR</p>
              </div>
            </div>
          </div>
        </div>

        <div id="how-it-works" className='pb-20'>
          <p className={`text-center lg:text-4xl text-3xl font-extrabold tracking-tight my-5 mx-3`}>Frequently Asked Questions</p>
          <Accordion className='flex flex-col gap-4 justify-center items-center'>
            {FAQs.map(function (faq, index) {
              return (index < (showMore ? FAQs.length : 5)) ? (
                <AccordianContent
                  thisKey={faq.thisKey}
                  header={faq.question}
                  content={faq.answer}
                />
              ) : (
                ''
              )
            })}
          </Accordion>
          <div className='flex justify-center items-center mt-6'>
            <p onClick={() => setShowMore(!showMore)} className='font-bold text-xl text-[#378805] cursor-pointer underline'>Show {showMore ? 'less' : 'more'}</p>
          </div>
        </div>
        
        <div id="how-it-works" className='py-24 flex justify-center items-center'>
            <form className='text-center p-5' onSubmit={sendEmail}>
              <p className={`text-center lg:text-5xl text-4xl font-extrabold tracking-tight`}>Got questions?</p>
              <div className='lg:flex lg:justify-center mt-8 mx-2'>
                  <input placeholder='Name' name="name" type="text" className='h-14 rounded-md border-light-gray-3 border-2 px-3 mt-3 lg:mr-3 md:mr-3' style={{width: isMobile ? '100%' : '300px'}} />
                  <input placeholder='Email' type="text" name="email" className='h-14 rounded-md border-light-gray-3 border-2 px-3 mt-3 lg:mr-3 md:mr-3' style={{width: isMobile ? '100%' : '300px'}} />
              </div>
              <div className='lg:flex lg:justify-center'>
                  <textarea placeholder='Message' type="text" name="message" className='h-32 pt-2 rounded-md border-light-gray-3 border-2 px-3 mt-3 lg:mr-3 md:mr-3' style={{width: isMobile ? '100%' : '612px'}} />
              </div>
              <div className='lg:flex lg:justify-center mt-3'>
                  <button
                      type='submit'
                      variant='primary-secondary'
                      className='bg-[#378805] text-xl hover:bg-[#2A6804] h-14 w-64 rounded-md px-3 lg:mr-3 py-2'
                      style={{color: 'white', width: isMobile ? '100%' : '612px'}}
                  >
                      Send message
                  </button>
              </div>
          </form>
        </div>

      </div>

      <div className={`flex justify-center items-center pb-16 ${isMobile ? 'px-3' : ''}`} id="beta">
        <div className='lg:px-5 px-3 py-8 -mt-20 bg-[#a3eb76]-0 lg:w-8/12 rounded-xl shadow shadow-light-gray-3 bg-light-gray'>
          <div className='lg:flex lg:justify-between lg:mr-12'>
            <div className={isMobile ? '' : 'ml-3'}>
              <p className='lg:text-4xl text-3xl text-black tracking-tight font-extrabold mb-2 text-center-mobile'>Join the crew</p>
              <p className='font-gray text-xl text-center-mobile'>Help us develop curriculum, teach students, and build the program.</p>
            </div>
            <a href="https://forms.gle/AQ4fv3vkMVr5GjL28" target="__blank" className='flex justify-center items-center hover:no-underline'>
              <button
                style={{width: isMobile ? '100%' : ''}}
                className={`px-5 h-14 text-xl text-white bg-[#378805] hover:bg-[#2A6804] font-semibold rounded-xl ${isMobile ? 'mt-4 -mb-2' : ''}`}
              >
                Sign up
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <hr className='border-light-gray-4' />
      <div className='flex flex-col justify-center items-center text-center py-20 bg-light-gray'>
        <p className='text-3xl font-extrabold tracking-tight -ml-4'>🌴DR Trips</p>
        <div className='flex justify-center mx-2 pb-3 text-light-gray-4 mt-3'>
          <p>© 2023 DR Trips. All rights reserved.</p>
        </div>
      </div>

    </div>
  )
}
