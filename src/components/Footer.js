import React from 'react'
import './Footer.css'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import footerlogo from '../footerlogo.svg'
import Facebook from '../icons/Facebook.svg'
import Instagram from '../icons/Instagram.svg'
import Linkedin from '../icons/Linkedin.svg'
import Twitter from '../icons/Twitter.svg'
import Call from '../icons/Iconly/Bold/Call.svg'
import Location from '../icons/Iconly/Bold/Location.svg'



function Footer() {
    return (
        <div className='footer'>
            <Box>
                <Container maxWidth="lg" className="footercenter">
                
                    <Grid container spacing={3} className="footertop">
                        <Grid item xs={6}>
                            <div>
                                <img src={footerlogo} alt='footerlogo' />
                                <p className="pfooter">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Sit tellus volutpat<br />  sollicitudin mi.</p>
                                <div className="socialicons">
                                <Grid item xs={3}>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <img src={Facebook} alt="Facebook" />
                                    </a>
                                </Grid>

                                <Grid item xs={3}>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <img src={Instagram} alt="Instagram" />
                                    </a>
                                </Grid>

                                <Grid item xs={3}>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <img src={Linkedin} alt="Linkedin" />
                                    </a>
                                </Grid>

                                <Grid item xs={3}>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <img src={Twitter} alt="Twitter" />
                                    </a>
                                </Grid>
                                </div>
                                <a href="mailto:hello@schoolaxis.com" className="atag">hello@schoolaxis.com</a>
                            </div>
                        </Grid>

                        <Grid item xs={3}>
                            <div className="footercompany">
                                <h4 className="footerh4">Company</h4>
                                <p><a href="" className="atag">About Us</a></p>
                                <p><a href="" className="atag">Blog</a></p>
                                <p><a href="" className="atag">Privacy Policy</a></p>
                                <p><a href="" className="atag">Cookies</a></p>
                                <p><a href="" className="atag">Terms of Services</a></p>
                            </div>
                        </Grid>

                        <Grid item xs={3}>
                            <div className="footercompany">
                                <h4 className="footerh4">Contact</h4>
                                <p><img src={Location} alt="Location" /><span> </span>131, Badamosi Eleniyan Street, Bellview BLVD, Denver CL, USA.</p>
                                <p><img src={Call} alt="Phone" /><span> </span><a className="atag" href="tel:+16612871645" rel="noopener noreferrer">+16612871645</a></p>
                                <p><img src={Call} alt="Phone" /><span> </span><a className="atag" href="tel:+2348098670986" rel="noopener noreferrer">+2348098670986</a></p>
                            </div>
                        </Grid>

                    </Grid>

                    <Grid item xs={12} className="footerbottom">
                        <hr className="footerhr" />
                    </Grid>

                    <Grid item xs={12} className="footerbottom">
                        <p className="footercredit">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis leo etiam sodales nec nunc magna pulvinar. Pellentesque at et, sed est. Diam nulla amet diam elit non faucibus nunc augue nulla.</p>
                    </Grid>

                </Container>
            </Box>
            
        </div>
    )
}

export default Footer
