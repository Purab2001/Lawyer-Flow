import React from 'react';

const Blogs = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-100">
                            Frequently Asked Questions
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="70326c9b-4a0f-429b-9c76-792941e326d5"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">Common</span>
                        </span>{' '}
                        Legal Questions Answered by Our Experts
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Get answers to frequently asked legal questions from our experienced attorneys.
                        These insights will help you better understand your legal situation.
                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl sm:mx-auto">
                <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                How long does a typical legal consultation take?
                            </p>
                            <p className="text-gray-700">
                                Most initial consultations with our attorneys take between 30-60 minutes.
                                During this time, the lawyer will assess your case, explain your legal options,
                                and recommend next steps.
                                <br />
                                <br />
                                For complex cases, follow-up consultations may be recommended to thoroughly
                                review all relevant details and documentation.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What documents should I bring to my first appointment?
                            </p>
                            <p className="text-gray-700">
                                For your first meeting, please bring any relevant documents related to your case.
                                This may include contracts, correspondence, court papers, police reports,
                                medical records, or financial statements.
                                <br />
                                <br />
                                Having these documents ready will help your attorney better understand your situation
                                and provide more accurate advice during your consultation.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                How are your legal fees structured?
                            </p>
                            <p className="text-gray-700">
                                Our fee structures vary depending on the type of case and services required.
                                We offer hourly rates, flat fees for specific services, contingency fees for
                                certain cases, and retainer agreements for ongoing representation.
                                <br />
                                <br />
                                During your initial consultation, your attorney will explain the fee structure
                                applicable to your case in detail.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Can I speak directly with my attorney between appointments?
                            </p>
                            <p className="text-gray-700">
                                Yes, we believe in maintaining open lines of communication with our clients.
                                You can reach your attorney via phone, email, or our secure client portal.
                                <br />
                                <br />
                                Our attorneys aim to respond to all client communications within 24-48 business hours,
                                and urgent matters are prioritized accordingly.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                How long will my legal matter take to resolve?
                            </p>
                            <p className="text-gray-700">
                                The timeline for resolving legal matters varies greatly depending on the complexity of the case,
                                court schedules, opposing parties' cooperation, and many other factors.
                                <br />
                                <br />
                                During your consultation, your attorney will provide an estimated timeline based on their
                                experience with similar cases, while noting that legal proceedings can sometimes
                                experience unexpected delays.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What if I need legal assistance outside of business hours?
                            </p>
                            <p className="text-gray-700">
                                We understand that legal emergencies don't always happen during business hours.
                                For urgent matters, we provide an emergency contact number for existing clients.
                                <br />
                                <br />
                                Additionally, our online booking system allows you to schedule appointments
                                24/7 for the next available time slot with your preferred attorney.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;