import React from 'react'
import './skill.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skill = () => {
  return (
    <section id='skills'>
        <span className='skilltitle'> What I do</span>

        <span className="skilldiscription">I'm a skilled software developer, web and app designer passionate about crafting intuitive interfaces and exceptional user experiences. With a strong academic foundation and hands-on expertise, I create innovative, visually appealing digital solutions. I thrive on challenges, stay updated with industry trends, and ensure each project I tackle is functional and aesthetically impressive, leaving a lasting impact on users.</span>

        <div className="skillBars">
            <div className="skilllist">
                <img src={UIDesign} alt="UI Design" className="skillbarimg" />
                <div className="skillbartest">
                    <h2>UI/UX Design</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="tag"><i class="fa-brands fa-github fa-flip  fa-2x"></i> </div>
                <div className="tagback"></div>
            </div>
            <div className="skilllist">
                <img src={WebDesign} alt="Web Design" className="skillbarimg" />
                <div className="skillbartest">
                    <h2>Web Development</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="tag"><i class="fa-brands fa-github fa-flip  fa-2x"></i> </div>
                <div className="tagback"></div>
            </div>
            <div className="skilllist">
                <img src={AppDesign} alt="App Design" className="skillbarimg" />
                <div className="skillbartest">
                    <h2>App Development</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="tag">
                     <i className="fab fa-github fa-flip  fa-2x"></i>
                </div>

                <div className="tagback"></div>
            </div>
        </div>
    </section>
  )
}

export default Skill
