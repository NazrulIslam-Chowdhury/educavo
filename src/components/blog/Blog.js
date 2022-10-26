import React from 'react';


const Blog = () => {
    return (
        <div className='grid grid-cols-1 space-y-28 mt-5 mx-5'>
            <div tabIndex={0} className="collapse collapse-arrow border text-gray-300  border-base-300 bg-gradient-to-tr from-slate-500 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Q1: What is cors?
                </div>
                <div className="collapse-content">
                    <p>Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.[1]

                        A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.[2] Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.[3] It allows for more freedom and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin requests.

                        The specification for CORS is included as part of the WHATWG's Fetch Living Standard.[4] This specification describes how CORS is currently implemented in browsers.[5] An earlier specification was published as a W3C Recommendation.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 text-gray-300  bg-gradient-to-tr from-slate-500 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Q2: Why are you using firebase?What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p>Firebase is a set of hosting services for any type of application (Android, iOS, Javascript, Node.js, Java, Unity, PHP, C++ ...). It offers NoSQL and real-time hosting of databases, content, social authentication (Google, Facebook, Twitter and Github), and notifications, or services, such as a real-time communication server and thats why why i use firebase.

                        Other options of authentications are : <br />
                        1.Password-based authentication. <br />
                        2.Passwords are the most common methods of authentication. <br />
                        3.Multi-factor authentication. <br />
                        4.Certificate-based authentication. <br />
                        5.Biometric . <br />
                        6.Token-based authentication.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 text-gray-300 bg-gradient-to-tr from-slate-500 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Q3: How does the private route works?
                </div>
                <div className="collapse-content">
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border text-gray-300  border-base-300 bg-gradient-to-tr from-slate-500 rounded-box mb-5">
                <div className="collapse-title text-xl font-medium">
                    Q4: What is Node? How does the Node works?
                </div>
                <div className="collapse-content">
                    <p>1.Node.js is an open source server environment. <br />
                        2.Node.js is free. <br />
                        3.Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.). <br />
                        4.Node.js uses JavaScript on the server. <br />It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;