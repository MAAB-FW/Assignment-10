import React from "react"

const ContactUs = () => {
    return (
        <div className="my-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p className="mt-3 md:w-2/3 mx-auto">
                    Got a technical issue? Want to send feedback about a beta feature?&#160;
                    {/* Need details about our Business plan? */}
                    Let us know.
                </p>
            </div>
            <section className="mt-16 bg-base-100 ">
                <div className=" px-4 mx-auto ">
                    {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        Contact Us
                    </h2>
                    <p className="">
                        Got a technical issue? Want to send feedback about a beta feature?&#160;
                        Need details about our Business plan?
                        Let us know.
                    </p> */}
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-gray-300">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-[#f9fafb] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:/bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@flowbite.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium dark:text-gray-300">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-[#f9fafb] rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:/bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Let us know how we can help you"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-gray-400">
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-[#f9fafb] rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:/bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a comment..."
                            ></textarea>
                        </div>
                        <button type="submit" className="btn text-white btn-info">
                            Send message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
