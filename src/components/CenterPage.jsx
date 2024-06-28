import React from 'react'
import "./centerpage.css"
import { CiLocationOn } from 'react-icons/ci'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { MdOutlineEdit } from 'react-icons/md'
const CenterPage = () => {
  return (
    <div className="center-page">
        <div className='left'>

            <div className='title'>
              <h1>Senior Product Designer</h1>
                <h4><img src='Ellipse 11.png' alt='nothing'></img> posted 2 days ago </h4>
              <div className='open'>
                <img src='Dot.png' alt='nothing'></img>
                <h5>open</h5>
              </div>
            </div>


            <div className='loc'>
              <h3><CiLocationOn size={22} className='icon' />Delware, USA</h3>
              <h4><img src='Ellipse 11.png' alt='nothing'></img> <img src='coins-stacked-03.png' alt='nothing'></img> $300k-$400k</h4>
            </div>


            <div className='skills'>
              <div className='required'>
                <h5>Skills Required</h5>
                <div className='same'><img src='image 1.png' alt='nothing'></img>Figma</div>
                <div className='same'><img src='image 2.png' alt='nothing'></img>Adobe Iluustrator</div>
                <div className='same'><img src='image 6.png' alt='nothing'></img>Adobe XD</div>
              </div>
                
                <div className='language'>
                    <h5>Preferred Language</h5> 
                    <h4>English</h4>

                </div>
                <div className='type'>
                    <h5>Type</h5>
                    <h4>Full time</h4>

                </div>
                <div className='experience'>
                    <h5>Years of Experience</h5>
                    <h4>3+ Years of Experience</h4>

                </div>
            </div>

            <div className='about'>
                <h4>About the job</h4>
                    
                <p>
                1. Handle the UI/UX research design<br></br>
                2. Work on researching on latest web applications designs & <br></br>trends<br></br>
                3. Work on conceptualizing and visualizing<br></br>
                4. Work on creating graphics content and other graphic related <br></br>works<br></br>
                Benefits:
                <ul><li>Health insurance</li>
                <li>Provident Fund</li></ul>
                Schedule:
                <ul><li>Day shift</li></ul>
                Supplemental pay types:
                <ul><li> Performance bonus...</li></ul>
                </p>

            </div>
            <div className='Line'></div>

            <div className='info'>

                <div className='heading'>
                <img src='Rectangle 43.png' alt='nothing'></img>
                <h3>Atlassian</h3>
                <button>Follow</button>
                </div>
                <div className='comp'>
                    <div className='left-comp'>
                        <div>
                            <h4>Company size</h4>
                            <h3>1k-2k Employees</h3>
                        </div>
                        <div>
                            <h4>Sector</h4>
                            <h3>information Technology, Infrastructure</h3>
                        </div>
                        <div>
                            <h4>Founded In</h4>
                            <h3>2019</h3>
                        </div>
                    </div>
                
                    <div className='right-comp'>
                        <div>
                            <h4>Type</h4>
                            <h3>Private</h3>
                        </div>
                        <div>
                            <h4>Funding</h4>
                            <h3>Bootstrapped</h3>
                        </div>
                        <div>
                            <h4>Founded By</h4>
                            <h3>Scott Farquhar, Mike Cannon-Brookes</h3>
                        </div>
                    </div>
                </div>
            
              
            </div>




            {/* // this is the end of left comp */}
        </div>




          <div className='right'>
            <div className='buttons'>
              <button><RiDeleteBin6Line className='button-icon' size={19}/>Delete job</button>
              <button><MdOutlineEdit className='button-icon' size={19}/>Edit job</button>
            </div>

            <div>
              <div className='details'>
                <h4><img src='users-01.png' alt='nothing'></img>
                Applicants</h4>
                <h3>400</h3>
              </div>
              <div className='details'>
                <h4><img src='user-check-01.png' alt='nothing'></img>Matches</h4>
                <h3>100</h3>
              </div>
              <div className='details'>
                <h4><img src='message-square-01.png' alt='nothing'></img>Messages</h4>
                <h3>147</h3>
              </div>
              <div className='details'>
                <h4><img src='eye.png' alt='nothing'></img>Views</h4>
                <h3>800</h3>
              </div>
            </div>

            <div className='box-name'>
              <h3>"A quote from a Atlassian."</h3>
              <div className='img-info'>
                <img src='Avatar.png' alt='nothing'></img>
                <div>
                  <h4>Name</h4>
                  <p>Description</p>
                </div>
              </div>
            </div>
          </div>





        </div>
  )
}

export default CenterPage