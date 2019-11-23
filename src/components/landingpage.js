import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%',  margin: 'auto'}}>
               <Grid className="landing-grid">
                   <Cell col={12}>
                       <img 
                        src="pic.jpg"
                        alt="pic"
                        className="pic-img"
                       />

                       <div className="banner-text">
                           <h1>Front End Developer</h1>

                           <hr />
                           <p>HTML/CSS | Bootstrap | Javascript | React | React Native | Redux </p>
                        <div className="social-links">

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/adeyi-esther-01a98497?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmC%2FYpd5HTDmriZjzbU6R1g%3D%3D" target="_blank" rel='noreferrer noopener'>
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/mhizsean" target="_blank" rel='noreferrer noopener'>
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* Freecodecamp */}
                            <a href="https://www.freecodecamp.org/mhizsean" target="_blank" rel='noreferrer noopener'>
                                <i className="fa fa-free-code-camp" aria-hidden="true" />
                            </a>



                             {/* Twitter */}
                             <a href="https://twitter.com/MhizSean" target="_blank" rel='noreferrer noopener'>
                                <i className="fa fa-twitter-square" aria-hidden="true" />
                            </a>

                            
                              {/* Instagram */}
                              <a href="https://www.instagram.com/mzz_sean/?hl=en" target="_blank" rel='noreferrer noopener'>
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>

                            

                        </div>
                       </div>
                   </Cell>
                </Grid> 
            </div>
        )
    }
}
export default LandingPage;