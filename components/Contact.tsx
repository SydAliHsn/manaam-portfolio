import React from 'react';

const Contact = (props: {}): JSX.Element => {
    return <section id='contact'
        data-aos="fade-up"
        data-aos-duration="1000"
    >
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 font-rubik text-4xl tracking-tight font-extrabold text-center text-white">Contact Me</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Would love to discuss any potential opportunities or collaborations. Also would love to guide or help anyone in need :)</p>
            <form onSubmit={e => e.preventDefault()} className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                    <input type="email" id="email" className="shadow-sm text-sm rounded-lg focus:border-primary border-2 outline-none block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white shadow-sm-light" placeholder="name@gmail.com" required />
                </div>

                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                    <input type="text" id="subject" className="outline-none block p-3 w-full text-sm rounded-lg shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-primary border-2 shadow-sm-light" placeholder="Let us know how we can help you" required />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">Your message</label>
                    <textarea id="message" className="outline-none min-h-[10rem] block p-2.5 w-full text-sm rounded-lg shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-primary border-2" placeholder="Leave a comment..."></textarea>
                </div>

                <button
                    className="hover:bg-primary border-2 border-primary px-6 py-2 rounded-full hover:scale-105 transition-all font-bold font-rubik text-gray-100 inline-block mt-10"
                >
                    Send Message
                </button>
            </form>
        </div>
    </section>
};

export default Contact;