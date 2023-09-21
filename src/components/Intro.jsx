import React from 'react'
import video from "../video/video.mp4"
import t1 from "../image/t1.png"
import t2 from "../image/t2.png"
import t3 from "../image/t3.png"
import t4 from "../image/t4.png"
import satyajit from '../image/SatyajitPattnaik.png'
import { ChartBarIcon, CircleStackIcon, PencilSquareIcon, DocumentChartBarIcon, MapIcon, DevicePhoneMobileIcon, CheckCircleIcon, } from '@heroicons/react/24/outline'
import classNames from 'classnames';
import certificate from "../image/certificate.jpeg"
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import logo from '../image/logo.png'

import {
    PresentationChartBarIcon,
    PresentationChartLineIcon,
    AcademicCapIcon,
    BanknotesIcon,
    NewspaperIcon,


    UsersIcon,
} from '@heroicons/react/24/outline'




function Intro() {
    const opts = {
        height: '600',
        width: '800',
    }
    const navigation = {
        solutions: [
            { name: 'Terms & Conditions', href: 'https://zepanalytics.com/cms/terms-conditions' },
            { name: 'Privacy Policy', href: 'https://zepanalytics.com/cms/privacy-policy' },
            { name: 'Cookie Policy', href: 'https://zepanalytics.com/cms/cookies-policy' },
            { name: 'Refund Policy', href: 'https://zepanalytics.com/cms/refund-policy' },
        ],
        support: [
            { name: 'About Us', href: 'https://zepanalytics.com/cms/about-us' },
            { name: 'Contact Us', href: 'https://zepanalytics.com/contact/create' },
            { name: 'FAQs', href: 'https://zepanalytics.com/cms/about-us' },

        ],
        company: [
            { name: 'Resources', href: 'https://zepanalytics.com/zep-resources' },
            { name: 'Blog', href: 'https://zepanalytics.com/blogs' },

        ],
        legal: [
            { name: 'Claim', href: '#' },
            { name: 'Privacy', href: '#' },
            { name: 'Terms', href: '#' },
        ],
    }
    const [nextMonthDate, setNextMonthDate] = useState(new Date());
    useEffect(() => {
        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        setNextMonthDate(nextMonth);
    }, []);
    const options = { month: 'short' };
    const nextMonthDateString = nextMonthDate.toLocaleDateString('en-US', options);
    const features = [
        {
            name: 'Data Visualization',
            description: 'Tableau offers a variety of chart types, including bar charts, line charts, scatter plots, maps, and many more. It also provides interactive dashboards and visualizations that allow users to explore data and gain insights quickly.',
            icon: ChartBarIcon,
        },
        {
            name: 'Data Exploration',
            description: 'Tableau allows users to explore data in depth by drilling into data points, filtering data, and creating hierarchies.',
            icon: CircleStackIcon,
        },
        {
            name: 'Data Modeling ',
            description: ' Tableau enables users to create and manage relationships between different data sources, define calculations, and create measures and KPIs.',
            icon: PencilSquareIcon,
        },
        {
            name: 'Data Preparation',
            description: 'Tableau includes a suite of data preparation tools that allow users to reshape and clean data for analysis.',
            icon: DocumentChartBarIcon,
        },
        {
            name: 'Collaboration',
            description: 'Tableau allows users to share and collaborate on reports and dashboards with colleagues and integrate with other tools like Slack, Salesforce, and Google Drive.',
            icon: MapIcon,
        },
        {
            name: 'Mobile Access',
            description: 'Tableau provides a mobile app that allows users to access reports and dashboards from their mobile devices.',
            icon: DevicePhoneMobileIcon,
        },
        {
            name: 'Natural Language Processing',
            description: 'Tableau includes natural language processing capabilities that allow users to ask questions in natural language and receive answers in the form of visualizations.',
            icon: UsersIcon,
        },
        {
            name: 'Real-time data',
            description: 'Tableau can connect to real-time data sources like Amazon Kinesis, Apache Kafka, and Tableau Server extracts and display real-time data in visualizations.',
            icon: PresentationChartLineIcon,
        },
    ]
    // bones
    const actions = [
        {
            title: 'Worth Rs 6,500',
            href: '#',
            icon: PresentationChartBarIcon,
            iconForeground: 'text-teal-700',
            iconBackground: 'bg-teal-50',
            description: "10,000+ Excel   customizable PPT templates for stunning presentations in no time with tableau."
        },
        {
            title: 'Worth Rs 5,500',
            href: '#',
            icon: AcademicCapIcon,
            iconForeground: 'text-purple-700',
            iconBackground: 'bg-purple-50',
            description: "tableau Interview Guide"
        },
        {
            title: `Join our Community and get 24/7 Support`,
            href: '#',
            icon: UsersIcon,
            iconForeground: 'text-sky-700',
            iconBackground: 'bg-sky-50',
            description: "Worth far beyond what money can't quantify. "
        },
        {
            title: '1 Month Internship Certificate',
            href: '#',
            icon: NewspaperIcon,
            iconForeground: 'text-yellow-700',
            iconBackground: 'bg-yellow-50',
            description: " Money fades into insignificance when compared to the profound worth of skills,"
        },
        // {
        //     title: 'Submit an expense',
        //     href: '#',
        //     icon: ReceiptRefundIcon,
        //     iconForeground: 'text-rose-700',
        //     iconBackground: 'bg-rose-50',
        // },
        // {
        //     title: 'Training',
        //     href: '#',
        //     icon: AcademicCapIcon,
        //     iconForeground: 'text-indigo-700',
        //     iconBackground: 'bg-indigo-50',
        // },
    ]
    //faq
    const faqs = [
        {
            question: "When does the workshop start?",
            answer:
                "The workshop will be for 2 days: Saturday 7-10 PM (21th Oct) & Sunday 7-10 PM (22 Oct)",
        },
        {
            question: "Timings of the workshop?",
            answer:
                "Day 1 – Saturday 7-10 PM Day 2 – Sunday 7-10 PM ",
        },
        {
            question: "Will I get recordings if I miss out on a live session?",
            answer:
                "You will receive recordings of both Days , Day 1 (Saturday) session & Day 2 (Sunday) session. ",
        },
        {
            question: "Is there a specific device requirement?",
            answer: "You will require a Windows Laptop/PC to attend the workshop. "

        },
        {
            question: "Are there any pre-requisites to attend this workshop?",
            answer: "You just need an interest in the world of data to learn. No prior knowledge about any software is required."

        },
        {
            question: "I made the payment but didn’t receive any update",
            answer: "Please email us at contact@zepanalytics.com in & our support team will get back to you as soon as possible."

        },
        // More questions...
    ]
    return (
        <div>
            <div className='bg-gradient-to-r from-slate-900 via-black to-slate-900 text-white pt-12 flex flex-col items-center w-full'>
                {/* section */}
                <h1 className='sm:text-4xl sm:w-2/3 font-medium w-full text-lg  [&>span]:underline [&>span]:text-transparent [&>span]:bg-clip-text [&>span]:drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.5)]'>
                    Become a <span className='bg-gradient-to-b from-sky-400 to-indigo-900'>Tableau Expert</span> and Harness the Potential of Advanced Data Analysis and Visualization Techniques Employed by <span className='bg-gradient-to-b from-sky-400 to-indigo-900'>Leading Business Intelligence Professionals</span>.
                    Learn How to <span className='bg-gradient-to-b from-sky-400 to-indigo-900'>Save Up to 2 Hours Daily</span>, Regardless of Your Prior Knowledge,<span className='bg-gradient-to-b from-sky-400 to-indigo-900'> All in Just 6 Hours.</span>
                </h1>

                <video src={video} width={800} height={600} className='rounded-3xl p-3 mt-4' autoPlay controls  ></video>



                <button className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-cyan-600 to-indigo-900 font-semibold text-white drop-shadow-lg  text sm:text-4xl p-4 rounded-xl px-8 mt-4 text-xl'>
                    <span className='drop-shadow-xl'> Become a Tableau Expert Now!! <br /> <span className='sm:text-lg text-sm '>【 cost less then a pizza 🍕】</span></span>
                </button>
                <div >
                    <div class="flex sm:flex-row flex-col justify-between sm:text-xl  text-left text-sm items-center my-8 ">

                        <div className=' flex  items-start justify-between flex-col  font-bold  [&>div>h1]:ml-4  '>
                            <div className='flex flex-row items-center justify-between my-4'>

                                <CheckCircleIcon width={45} height={45} /><h1>Master data analysis and save time with Tableau.</h1>
                            </div>
                            <div className='flex flex-row items-center justify-between my-4'>

                                <CheckCircleIcon width={45} height={45} /><h1>Reduce your daily workload by 2 hours using Tableau.</h1>
                            </div>
                            <div className='flex flex-row items-center justify-between my-4'>

                                <CheckCircleIcon width={45} height={45} />  <h1> Elevate your resume with our Tableau certification <br className='sm:hidden block' /> and become a Tableau specialist. </h1>
                            </div>
                        </div>

                        <div className='flex  items-start flex-col justify-between  font-bold ml-4 [&>div>h1]:ml-4 '>
                            <div className='flex flex-row items-center justify-stretch my-4'>
                                <CheckCircleIcon width={45} height={45} className='' />
                                <h1>Attract high-paying job opportunities as a Tableau developer,<br className='sm:hidden block' />  one of the top skills in 2023.</h1>
                            </div>
                            <div className='flex flex-row items-center justify-stretch my-4'>

                                <CheckCircleIcon width={45} height={45} /><h1>Conquer real-world data challenges with Tableau  <br className='sm:hidden block' /> and excel in problem-solving.</h1>
                            </div>
                            <div className='flex flex-row items-center justify-stretch my-4'>

                                <CheckCircleIcon width={45} height={45} /><h1>Join us to revolutionize your career with Tableau.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section */}
                <div className='sm:text-3xl text-xl mt-12 bg-gradient-to-r from-blue-400 to-emerald-400 text-white p-8 flex w-screen justify-center font-semibold'>
                    <h1 className='drop-shadow-md'>Workshop is on 21 & 22 {nextMonthDateString} from 7 to 10 PM.<br />
                        ***Be Quick! Last few seats are remaining for this batch!***</h1>
                </div>
                {/* section */}
                <div className='bg-slate-50 w-screen text-black flex  flex-col items-center justify-center p-8'>
                    <div className='sm:w-5/6 w-full  '>

                        <h1 className='sm:text-4xl text-2xl font-bold  sm:p-8'>Please Check All Boxes Where Your Answer Is YES!</h1>
                        <div class="flex sm:flex-row justify-between items-start flex-col w-full">
                            <div className='flex  items-start flex-col sm:text-xl text-base font-bold w-full text-left'>
                                <div className='flex flex-row justify-start items-center my-2'>

                                    <input type="checkbox" className='mr-4 h-5 w-5' /> <label htmlFor="">I've been using Tableau daily but haven't quite mastered it.</label>
                                </div>
                                <div className='flex flex-row justify-start items-center my-2 '>


                                    <input type="checkbox" className='mr-4 h-5 w-5' /> <label htmlFor="">I aspire to open up new job prospects, but my limited Tableau knowledge is a barrier.<br className='sm:block hidden ' /> knowledge is holding me back.</label>
                                </div>
                                <div className='flex flex-row justify-start items-center my-2'>


                                    <input type="checkbox" className='mr-4 h-5 w-5' />
                                    <label htmlFor="">Advanced Tableau techniques appear daunting, and I'm seeking a mentor to provide guidance. </label>
                                </div>
                            </div>
                            <div className='flex  items-start flex-col sm:text-xl text-base font-bold w-full text-left'>
                                <div className='flex flex-row justify-start items-center my-2'>


                                    <input type="checkbox" className='mr-4 h-5 w-5' />
                                    <label htmlFor="">My goal is to dazzle my manager and peers with compelling Tableau reports.</label>

                                </div>
                                <div className='flex flex-row justify-start items-center my-2'>


                                    <input type="checkbox" className='mr-4 h-5 w-5' />
                                    <label htmlFor="">I'm determined to enhance my productivity in Tableau and reclaim more than 2 hours each day.</label>

                                </div>
                                <div className='flex flex-row justify-start items-center my-2'>


                                    <input type="checkbox" className='mr-4 h-5 w-5' />
                                    <label htmlFor="">I want to leverage the potential of advanced Tableau formulas to streamline my professional tasks.</label>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-xl mt-12  text-black  flex w-full justify-center font-extrabold '>
                        <h1>If you checked ANY of the boxes above, then you’re invited to join the tableau course 😀</h1>
                    </div>

                    <button className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-cyan-600 to-indigo-900 font-semibold text-white drop-shadow-lg  text sm:text-4xl p-4 rounded-xl px-8 mt-4 text-xl'>
                        <span className='drop-shadow-xl'> Become a Tableau Expert Now!! <br /> <span className='sm:text-lg text-sm '>【 cost less then a pizza 🍕】</span></span>
                    </button>
                    <div className='sm:text-xl text-sm mt-12  text-black  flex w-screen justify-center font-extrabold'>
                        <h1>Register before 15 Oct, 2023 to unlock bonuses worth Rs 12,000</h1>
                    </div>
                </div>
                {/* testimonials */}
                <div className='bg-white w-screen text-black flex  flex-col items-center justify-center p-8'>
                    <div className='sm:text-4xl text-2xl sm:w-3/5 font-extrabold '>
                        <h1>More than 10,000 students have choosen Zep Analytics and have received great job offers!!</h1>
                    </div>
                    <div class="grid sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8">
                        <div>
                            <img src={t1} alt="" className='h-auto max-w-full rounded-lg' />
                        </div>
                        <div>
                            <img src={t2} alt="" className='"h-auto max-w-full rounded-lg"' />
                        </div>
                        <div>
                            <img src={t3} alt="" className='"h-auto max-w-full rounded-lg"' />
                        </div>
                        <div>
                            <img src={t4} alt="" className='"h-auto max-w-full rounded-lg"' />
                        </div>

                    </div>
                    <button className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-cyan-600 to-indigo-900 font-semibold text-white drop-shadow-lg  text sm:text-4xl p-4 rounded-xl px-8 mt-4 text-xl'>
                        <span className='drop-shadow-xl'> Become a Tableau Expert Now!! <br /> <span className='sm:text-lg text-sm '>【 cost less then a pizza 🍕】</span></span>
                    </button>
                    <div className='sm:text-5xl text-3xl  sm:w-3/5 font-extrabold  mt-24'>
                        <h1>What will you learn in this Masterclass?</h1>
                    </div>

                    <div className="bg-white py-24 sm:pt-32 " >
                        <div className="w-full px-6 lg:px-8 drop-shadow-lg">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-6xl lg:grid-cols-2   ">

                                <dl className="col-span-2 grid grid-cols-1 gap-x-32 gap-y-16 sm:grid-cols-2 ">
                                    {features.map((feature) => (
                                        <div className=' flex flex-col justify-center items-center text-base font-semibold leading-7 text-gray-900 ' key={feature.name}>

                                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-700">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </div>
                                            {feature.name}

                                            <p className="mt-1 text-base leading-7 text-gray-600 sm:text-center text-justify">{feature.description}</p>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>


                    <button className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-cyan-600 to-indigo-900 font-semibold text-white drop-shadow-lg  text sm:text-4xl p-4 rounded-xl px-8 mt-4 text-xl'>
                        <span className='drop-shadow-xl'> Become a Tableau Expert Now!! <br /> <span className='sm:text-lg text-sm '>【 cost less then a pizza 🍕】</span></span>
                    </button>
                    <div className='text-xl mt-12  text-black  flex w-screen justify-center font-extrabold'>
                        <h1>Register before 15 Oct, 2023 to unlock bonuses worth Rs 12,000</h1>
                    </div>


                    <div className='sn:text-5xl text-3xl mt-12 bg-gradient-to-r from-blue-400 to-emerald-400 text-white p-8 flex w-screen justify-center font-semibold'>

                        <h1 className='drop-shadow-md'>Register before midnight of 15 Oct 2023 <br />
                            <span className='sm:text-2xl text-lg'>To Unlock All Bonuses worth Rs 12,000</span>
                        </h1>

                    </div>
                </div>
                {/* Bonus */}
                <div className='bg-white w-screen text-black flex  flex-col items-center justify-center p-8'>
                    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-300 shadow  sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                        {actions.map((action, actionIdx) => (
                            <div
                                key={action.title}
                                className={classNames(
                                    actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                                    actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                                    actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                                    actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                                    'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                                )}
                            >
                                <div>
                                    <h1 className='text-blue-300 bg-blue-800 drop-shadow-md p-2 w-2/12 rounded-md'>Bonus</h1>
                                    <span
                                        className={classNames(
                                            action.iconBackground,
                                            action.iconForeground,
                                            'rounded-lg inline-flex p-3 ring-4 ring-white'
                                        )}
                                    >
                                        <action.icon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-lg font-medium">
                                        <a className="focus:outline-none">
                                            {/* Extend touch target to entire panel */}
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {action.title}
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {action.description}
                                    </p>
                                </div>
                                <span
                                    className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                                    aria-hidden="true"
                                >
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                    </svg>
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* certificate */}
                    <div className='bg-gray-900 w-screen text-white flex  flex-col items-center justify-center p-8'>
                        <div className='sm:text-5xl text-3xl mt-4  text-yellow-300 sm:p-8 p-2 flex w-screen justify-center font-semibold'>
                            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400'>Become a Certified Tableau Developer</h1>
                        </div>
                        <div className='sm:text-xl text-base mt-4 p-2 text-white  flex w-screen justify-center font-extrabold'>
                            <h1>Yes! You will be certified by a Tableau Trainer which brings a lot of credibility to your certificate & your resume.   </h1>
                        </div>
                        <div className='p-4'>
                            <img src={certificate} alt="" height={400} width={1000} />
                        </div>
                        <button className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-cyan-600 to-indigo-900 font-semibold text-white drop-shadow-lg  text sm:text-4xl p-4 rounded-xl px-8 mt-4 text-xl'>
                            <span className='drop-shadow-xl'> Become a Tableau Expert Now!! <br /> <span className='sm:text-lg text-sm '>【 cost less then a pizza 🍕】</span></span>
                        </button>
                        <div className='sm:text-xl text-base mt-4  text-white  flex w-screen justify-center font-extrabold mb-4'>
                            <h1>Register before 15 Oct, 2023 to unlock bonuses worth Rs 12,000</h1>
                        </div>

                    </div>
                    {/* Mentor */}
                    <div className="relative isolate bg-white">
                        <h1 className='font-bold sm:text-5xl text-4xl mt-12 ' > Know your mentor</h1>
                        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-12">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">

                                <h1 className="sm:mt-10  max-w-lg text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    Satyajit Pattnaik
                                </h1>
                                <p className="mt-6 sm:text-lg text-sm leading-8 text-gray-600 text-left">
                                    Certified Data Scientist & Tensorflow Certified Developer <br />
                                    Number of students trained so far: 10000+ <br />
                                    Average Trainer Score: 9+ <br />

                                </p>
                                <p className='mt-6 sm:text-lg text-sm leading-8 text-gray-600 text-left'>

                                    12+ years experience working in Data Analytics and Data Sciences across different industry verticals including telecom, cyber security, insurance, e-commerce etc.
                                    <br />
                                    Expertised on BI tech stack including Power BI & Tableau.
                                    Analytic experience includes ETL, descriptive and predictive data analysis, data visualization​, Machine Learning & Deep Learning
                                    <br />
                                    Conducted various training sessions on Data Science, Analytics, ML & AI, as well as attended various International conferences as keynote speaker & guest on Data Science, ML & AI in various universities across APAC Region.
                                    <br />
                                    Over 8+ years of training & teaching experience into Data Science & Analytics
                                    <br />
                                    Owner of more than 20+ data communities over the globe, and runs a small YouTube channel on my name having 38,000+ subscribers
                                </p>

                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href="https://www.linkedin.com/in/satyajitpattnaik/"
                                        className="rounded-md bg-blue-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Linkedin
                                    </a>
                                    <a href="https://www.linkedin.com/in/satyajitpattnaik/" className="text-base font-semibold leading-7 text-gray-900">
                                        Learn more <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">

                                <foreignObject
                                    width={316}
                                    height={684}
                                    transform="translate(24 24)"
                                    clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                                >
                                    <img src={satyajit} alt="" className='rounded-lg' />
                                </foreignObject>

                            </div>
                        </div >
                    </div>
                    <button className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-cyan-600 to-indigo-900 font-semibold text-white drop-shadow-lg  text sm:text-4xl p-4 rounded-xl px-8 mt-4 text-xl'>
                        <span className='drop-shadow-xl'> Become a Tableau Expert Now!! <br /> <span className='sm:text-lg text-sm '>【 cost less then a pizza 🍕】</span></span>
                    </button>
                    <div className='text-xl mt-12  text-black  flex w-screen justify-center font-extrabold mb-4'>
                        <h1>Register before 15 Oct, 2023 to unlock bonuses worth Rs 12,000</h1>
                    </div>
                    {/* FAQ  */}

                    <div className="bg-slate-100 w-screen">
                        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-24 lg:px-8">
                            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                                <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                                <p className='text-sm p-4'>I have tried my best to answer all the frequently asked questions. If you still have more questions,
                                    please write to us at contact@zepanalytics.com (Give us 8 working hours to respond back). My awesome support team will get back to you.</p>
                                <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                                    {faqs.map((faq) => (
                                        <Disclosure as="div" key={faq.question} className="pt-6">
                                            {({ open }) => (
                                                <>
                                                    <dt>
                                                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                            <span className="text-xl font-semibold leading-7">{faq.question}</span>
                                                            <span className="ml-6 flex h-7 items-center">
                                                                {open ? (
                                                                    <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                                ) : (
                                                                    <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </dt>
                                                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>


                </div>
                <footer className="bg-gray-900  w-screen" aria-labelledby="footer-heading">
                    <h2 id="footer-heading" className="sr-only">
                        Footer
                    </h2>
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                            <img
                                className="h-7"
                                src={logo}
                                alt="Company name"
                            />
                            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-sm font-semibold leading-6 text-white">Terms</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            {navigation.solutions.map((item) => (
                                                <li key={item.name}>
                                                    <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-10 md:mt-0">
                                        <h3 className="text-sm font-semibold leading-6 text-white">About</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            {navigation.support.map((item) => (
                                                <li key={item.name}>
                                                    <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-sm font-semibold leading-6 text-white">Important Links</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            {navigation.company.map((item) => (
                                                <li key={item.name}>
                                                    <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div >

        </div>
    )
}

export default Intro