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
                <h1>History of p.js</h1>
                <p>
                    My original college major was mechanical engineering. While interesting and enjoyable, I took a
                    programming course and was fascinated. I knew early on I had to switch majors. My first job was
                    mostly Java. I saw a colleague filling in a form,{' '}
                    <em>and the rest of the screen updated, like magic</em>. It was AngularJS, and just as I knew I
                    needed to leave mechanical engineering for software, I had to leave Java for JavaScript.
                </p>
                <p>
                    Colleagues took notice of my passion for JavaScript and my growing contributions to various
                    projects. One of them noticed my full name and mused "
                    <em>P... JS. You were meant to write JavaScript.</em>" And so I did.
                </p>
            </header>
            <section className='section'>
                <h1>Full Stack Dev</h1>
                <p>I love the entire world of software, from the edge of the web to the depths of the database.</p>
                <ul>
                    <li>
                        Frontend: I use <b>reactjs</b> for the frontend. I know CSS3 flexbox and grid, though these days
                        I prefer to use <b>TailwindCSS</b>
                    </li>
                    <li>
                        Backend: I use <b>nodejs</b> and <b>express</b> these days, but I was Java/Spring for several
                        years (not anymore!)
                    </li>
                    <li>
                        Persistence: I am more familiar with relational databases such as <b>PostgreSQL</b> than NoSQL
                        ones, but I can get around in <b>MongoDB</b>
                    </li>
                    <li>
                        Cloud: I know enough of the <b>Amazon Web Services (AWS)</b> to be dangerous, and I cannot wait
                        to learn more
                    </li>
                </ul>
            </section>
            <section className='section'>
                <h1>My Goal</h1>
                <p>Create software that has a positive impact on people's lives:</p>
                <ul>
                    <li>saving time on tasks</li>
                    <li>achieving their goals</li>
                    <li>making/saving money</li>
                    <li>enjoying a pleasant escape</li>
                </ul>
            </section>
            <section className='section'>
                <h1>Working with Me</h1>
                <p>
                    My colleagues would describe me as passionate, thorough, and clear. <br />
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
            <footer className='section'>
                <hr />
                <small>p.js 2023, v2, new website in the works!</small>
            </footer>
        </>
    );
}

export default App;
