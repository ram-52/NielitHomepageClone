import React from 'react';
import india_logo from '../assets/images/india-gov-logo.jpg';
import mygov from '../assets/images/mygov.jpg';
import deity from '../assets/images/deity.jpg';
import cqw from '../assets/images/cqw_logo.gif';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#07507b' }} className='text-white'>
            <div className='max-w-[1150px] mx-auto'>
                <div className='py-2'>
                    <div className='sm:flex sm:flex-wrap sm:justify-start 2xl:justify-between'>
                        <div className='p-4 '>
                            <h5 className='mb-4 font-bold'>Explore NIELIT</h5>
                            <a href='https://nielit.gov.in/content/acts-rules' target='_blank' className='block'>Act and Rules</a>
                            <a href='https://nielit.gov.in/sites/default/files/headquarter/pdf/20230727_Amended_DOP.pdf' target='_blank' className='block'>Delegation of Powers</a>
                            <a href='https://nielit.gov.in/content/recognition-0' target='_blank' className='block'>Recognition</a>
                            <a href='https://nielit.gov.in/opportunities' target='_blank' className='block'>Opportunities</a>
                            <a href='https://nielit.gov.in/content/annual-report-3' target='_blank' className='block'>Annual Report</a>
                            <a href='https://nielit.gov.in/content/mou-industry-academic-institutions-universities' target='_blank' className='block'>MoUs</a>
                            <a href='https://nielit.gov.in/content/right-information-1' target='_blank' className='block'>RTI</a>
                            <a href='https://nielit.gov.in/node/2362' target='_blank' className='block'>Vigilance</a>
                        </div>
                        <div className='p-4 '>
                            <h5 className='mb-4 font-bold'>Website Policies</h5>
                            <a href='https://nielit.gov.in/calicut/content/covid-compliance' target='_blank' className='block'>COVID Compliance</a>
                            <a href='https://nielit.gov.in/sitemap_nielit' target='_blank' className='block'>Sitemap</a>
                            <a href='https://nielit.gov.in/node/3562' target='_blank' className='block'>Disclaimer</a>
                            <a href='https://nielit.gov.in/node/3563' target='_blank' className='block'>Privacy Policy</a>
                            <a href='https://nielit.gov.in/citizen-charter' target='_blank' className='block'>Citizen Charter</a>
                            <a href='https://nielit.gov.in/content/policies-and-guidelines' target='_blank' className='block'>Website Policies</a>
                            <a href='https://nielit.gov.in/node/3561' target='_blank' className='block'>Terms and Conditions</a>
                            <a href='https://nielit.gov.in/content/help-4' target='_blank' className='block'>Help</a>
                        </div>
                        <div className='p-4'>
                            <h5 className='mb-4 font-bold'>Useful Links</h5>
                            <a href='https://www.meity.gov.in/' target="_blank" className='block'>meity.gov.in</a>
                            <a href='https://india.gov.in/' target="_blank" className='block'>india.gov.in</a>
                            <a href='https://www.mygov.in/' target="_blank" className='block'>mygov.in</a>
                            <a href='https://rtionline.gov.in/' target="_blank" className='block'>rtionline.gov.in</a>
                            <a href='https://esdm-skill.deity.gov.in/' target="_blank" className='block'>esdm-skill.deity.gov.in</a>
                            <a href='https://pgportal.gov.in/' target="_blank" className='block'>pgportal.gov.in</a>
                            <a href='https://email.gov.in/' target="_blank" className='block'>email.gov.in</a>
                            <a href='https://nielit.gov.in/content/downloads-37' target="_blank" className='block'>Downloads</a>
                        </div>
                        <div className='p-4 '>
                            <h5 className='mb-4 font-bold'>Online Services</h5>
                            <a href='https://student.nielit.gov.in/' target='_blank' className='block'>Registration</a>
                            <a href='https://certificate.nielit.gov.in/' target='_blank' className='block'>e-Certificate</a>
                            <a href='https://onlineaccr.nielit.gov.in/' target='_blank' className='block'>Accreditation</a>
                            <a href='https://dlcaccr.nielit.gov.in/' target='_blank' className='block'>CCC/BCC Facilitation</a>
                            <a href='https://ieeexplore.ieee.org/Xplore/home.jsp' target='_blank' className='block'>IEEE e-Resources</a>
                            <a href='https://student.nielit.gov.in/' target='_blank' className='block'>Examination</a>
                            <a href='https://placement.nielit.gov.in/' target='_blank' className='block'>Placement Portal</a>
                        </div>
                        <div className='p-4 '>
                            <h5 className='mb-4 font-bold'>Contact Us</h5>
                            <p>NIELIT Bhawan</p>
                            <p>Plot No. 3, PSP Pocket, Sector-8,</p>
                            <p>Dwarka, New Delhi-110077,</p>
                            <p>Board No.: 011-44446777</p>
                            <p>Call Centre No: 011-44446771 [Mon-Sat,9AM-5:30PM]</p>
                            <p>Email:- contact[at]nielit[dot]gov[dot]in</p>
                            <div className='flex flex-wrap gap-2 mt-6'>
                                <img className='cursor-pointer' src={india_logo} alt='could not load image'/>
                                <img className='cursor-pointer' src={mygov}/>
                                <img className='cursor-pointer' src={deity}/>
                                <img className='cursor-pointer' src={cqw}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer