import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'

export default function AccordianContent(props) {
    const { thisKey, header, content } = props;
    
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

    return (
        <Accordion.Item eventKey={thisKey}>
            <Accordion.Header>
            <p className='bg-light-gray py-3 rounded-xl text-xl font-semibold' style={{width: isMobile ? '300px' : '700px'}}>{header}</p>
            </Accordion.Header>
            <Accordion.Body className='flex justify-center items-center text-xl bg-light-gray py-3 rounded-b-xl'>
            <p className='px-3' style={{width: isMobile ? '300px' : '700px'}}>{content}</p>
            </Accordion.Body>
        </Accordion.Item>
    )
}
