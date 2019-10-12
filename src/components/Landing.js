import React, { useState, Fragment } from 'react'

const Landing = () => {
    const [landingState] = useState({
        title: 'FILMATORI',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati similique fugiat, quisquam quas quia aspernatur perferendis tempora dolore. Numquam praesentium velit exercitationem. Laboriosam sit dolor suscipit repellendus quia iusto!'
    });

    const { title, desc } = landingState;

    return (
        <Fragment>
            <div className='landing-image'></div>
            <h1 className="landing-text landing-head brand-color">{title}</h1>
            <h4 className="landing-text landing-desc">{desc}</h4>
        </Fragment>
    )
}

export default Landing;
