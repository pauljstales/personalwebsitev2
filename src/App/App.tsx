import './App.css';
import pjshero from '../assets/images/pjshero.jpg';
import { quotes } from '../Quotes';
import { useState } from 'react';

function App() {
    const [quote, setQuote] = useState(
        '"He has a level of passion that can’t be taught or externally inspired." - Tom Shawver, CTO at Booksio, 360 Media Direct'
    );
    return (
        <>
            <div className='hero'>
                <img src={pjshero} alt='' className='hero' />
                <blockquote>"P... JS. You were meant to write JavaScript."</blockquote>
            </div>
            <section className='section lookingforwork'>
                <h1>NOTICE</h1>
                <p>I am looking for work! Why should you hire me?</p>
                <button
                    onClick={() => {
                        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
                    }}
                >
                    Ask my Colleagues!
                </button>
                <p className='randomquote'>{quote}</p>
                <p>
                    But you can read it for yourself, on my{' '}
                    <a
                        target='_blank'
                        href='https://www.linkedin.com/in/paul-j-stales/details/recommendations/'
                        rel='noreferrer'
                    >
                        LinkedIn recommendations
                    </a>
                    .
                </p>
                <p>You can contact me on LinkedIn, or email me at my full name (no spaces) at gmail.</p>
            </section>

            <header className='section'>
                <h1>A History of p.js</h1>
                <p>
                    My original college major was mechanical engineering. While interesting and enjoyable, I took a
                    programming course and was fascinated. I knew early on I had to switch majors.{' '}
                </p>
                <p>
                    My first job was mostly Java. I saw a colleague filling in a form,{' '}
                    <em>and the rest of the screen updated, like magic</em>. It was AngularJS, and just as I knew I
                    needed to leave mechanical engineering for software, I had to leave Java for JavaScript.
                </p>
                <p>
                    Colleagues took notice of my passion for JavaScript and my growing contributions to various
                    projects. One of them noticed my full name and mused "P... JS. You were meant to write JavaScript."
                </p>
                <p>And so I did.</p>
            </header>
            <section className='section'>
                <h1>I am a Full-Stack Developer.</h1>
                <p>I love the entire world of software, from the edge of the web to the depths of the database.</p>
                <p>
                    I use <b>reactjs</b> for the frontend. I know CSS3 flexbox and grid, though these days I prefer to
                    use <b>TailwindCSS</b>.
                </p>
                <p>
                    I have years of experience in backend development in Java and the Spring ecosystem, that translated
                    well into <b>nodejs</b> and <b>expressjs</b>.
                </p>
                <p>
                    I know both <b>JavaScript</b> and <b>TypeScript</b>.
                </p>
                <p>
                    I have more experience with relational databases than NoSQL ones, but I can work just fine in
                    MongoDB and others.
                </p>
                <p>
                    I know enough <b>Amazon Web Services</b> to be dangerous, and wish to learn more.
                </p>
            </section>
            <section className='section'>
                <h1>My Goal in Software</h1>
                <p>Create software that has a positive impact on people's lives.</p>
                <p>What kind of positive impact? Software that</p>
                <ul>
                    <li>save people time</li>
                    <li>helps them achieve their goals</li>
                    <li>makes or saves them money</li>
                    <li>gives them a pleasant escape</li>
                </ul>
            </section>
            <section className='section'>
                <h1>What is it Like to Work with Me?</h1>
                <p>My colleagues would describe me as passionate, thorough, and clear.</p>
                <p>
                    But you can read it for yourself, on my{' '}
                    <a
                        target='_blank'
                        href='https://www.linkedin.com/in/paul-j-stales/details/recommendations/'
                        rel='noreferrer'
                    >
                        LinkedIn recommendations
                    </a>
                    .
                </p>
            </section>
            <section className='section'>
                <h1>Contact Me</h1>
                <ul>
                    <li>Email me at my full name (no spaces) at gmail!</li>
                    <li>
                        Connect or message me on{' '}
                        <a href='https://www.linkedin.com/in/paul-j-stales' target='_blank' rel='noopener noreferrer'>
                            LinkedIn
                        </a>
                        !
                    </li>
                    <li>
                        Tweet at me on{' '}
                        <a href='https://www.twitter.com/pauljstales' target='_blank' rel='noopener noreferrer'>
                            Twitter
                        </a>
                        !
                    </li>
                </ul>
            </section>
        </>
    );
}

export default App;
