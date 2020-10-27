import './App.css';
import Logo from './melogo.png';
import React from 'react';
import ME from './me.jpg';
import Ccsc from './Club_Offical.png';
import Bdsc from './bdsc.png';
import Csea from './csea.png';
import './hover.css';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD26_LJZR3vC9ymVUhfNizDi_EgFS05l18",
  authDomain: "contactportfolio-8f3bc.firebaseapp.com",
  databaseURL: "https://contactportfolio-8f3bc.firebaseio.com",
  projectId: "contactportfolio-8f3bc",
  storageBucket: "contactportfolio-8f3bc.appspot.com",
  messagingSenderId: "214999606193",
  appId: "1:214999606193:web:51ee4c076707d107dc1390"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



var Ref = firebase.database().ref('Messages');

function SaveSubmit(name,email,message){
    var newSubmit = Ref.push();
    newSubmit.set({
        name : name,
        email : email,
        message : message,
    });
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
       statement : true,
       name: "",
       email: "",
       message:"",
       visible:true
    }
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggle(){
    this.setState({
      statement: !this.state.statement
    })
  }

  handleSubmit(e) {
     e.preventDefault();
    var N = this.state.name;
    var E = this.state.email;
    var M = this.state.message;
    SaveSubmit(N,E,M);
    this.setState({
      visible:false
    })
    alert("Sent!");
  }

handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}


render(){
  
    return (
      <div className="App">
       <nav className="navbar fixed-top navbar-expand-lg " style={{background:"white"}}>
        <a className="navbar-brand" href="http://devanshgoswami.tech"><img src={Logo} alt="Devansh" height="50" width="35"></img></a>
       
       <div className="d-block d-lg-none" onClick={this.toggle}>
        <p style={{border:"none",background:"none",fontSize:"20px",fontWeight:"500",color:"#16175e"}} >{this.state.statement?<span className="fa fa-ellipsis-h fa-2x pt-3"></span>:<span className="fa fa-ellipsis-v fa-2x pt-3"></span>}</p>
       </div>
        <div className={this.state.statement?'collapse navbar-collapse':'collapse navbar-collapse show'} id="navbarNav">
          <ol className="navbar-nav ml-auto mt-2">
            <li className="nav-item active">
              <a className="nav-link mx-3 hvr-float" onClick={this.toggle} href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3 hvr-float" onClick={this.toggle} href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3 hvr-float" onClick={this.toggle} href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3 hvr-float" onClick={this.toggle} href="#contact">Contact </a>
            </li>
          </ol>
        </div>
      </nav>
     
     <div className="icon-bar">
        <a href="https://github.com/DevanshGoswami" target = "_blank" rel = "noopener noreferrer" style={{textDecoration:"none"}} ><i className="fa fa-github hvr-float"></i></a>
        <a href="https://www.linkedin.com/in/devansh-goswami-74590a187/" target = "_blank" rel = "noopener noreferrer" style={{textDecoration:"none"}} ><i className="fa fa-linkedin hvr-float"></i></a>
        <a href="mailto:devansh51100@gmail.com" target = "_blank" rel = "noopener noreferrer" style={{textDecoration:"none"}} ><i className="fa fa-envelope hvr-float"></i></a>
        <a href="https://www.instagram.com/_devaaaaaaansh_/" target = "_blank" rel = "noopener noreferrer" style={{textDecoration:"none"}} ><i className="fa fa-instagram hvr-float"></i></a>
     </div>

     <div className="container"style={{marginTop:"58px"}}>
       <div className="jumbotron mb-3 mx-2" style={{background:'none'}}>
           <div className="row">
           <div className="col-12 col-lg-4 d-block d-lg-none">
               <div className="card rounded-circle">
                 <img className="card-img-top rounded-circle" alt="me" src={ME}></img>
               </div>
            </div>
           
            <div className="col-12 col-lg-8 ">
                <div className=" mt-3">
                <h1 className="heading text-center text-lg-left" style={{fontSize:"50px"}}>
                  <span style={{color:"#16175e"}}>Devansh</span> <span style={{color:"#393a3b"}}>Goswami</span>
                </h1>
                <br></br>
                <p style={{fontSize:"20px",fontWeight:"400"}}>
                  Hi, I am a Web/Mobile Application Developer {'&'} a UI/UX Designer.<br/>
                  <span>I use my expertise in both design and development to build beautifuIll stuff.<br/>
                   </span>
                </p>
                <div className="mt-5">
               
                <a target = "_blank" rel = "noopener noreferrer" href="https://drive.google.com/file/d/19Xzul6uZkY2BIVB1kopF0UkzQBPjRjRu/view?usp=sharing" className="px-3 py-3 hvr-pulse-grow" style={{fontSize:"20px",textDecoration:"none",color:"black",border:"dashed",borderColor:"grey",borderRadius:"30px"}}> <img src="https://static.thenounproject.com/png/543772-200.png" alt="resume" height="30px" width="30px"></img> Résumé</a>
                </div>
                </div>
             </div>
             <div className="col-12 col-lg-4 d-none d-lg-block">
               <div className="card rounded-circle">
                 <img className="card-img-top rounded-circle" alt="me" src={ME}></img>
               </div>
            </div>
           </div>
       </div>
       <hr ></hr>

       <section className="mt-5 mx-4" id="about" >
            <div className=" mb-5">
               <h1 className="heading" style={{color:"#393a3b",fontSize:"50px"}}><span style={{color:"#16175e"}}>A</span>bout m<span style={{color:"#16175e"}}>e</span></h1>
            </div>
      <p  style={{fontSize:"18px",fontWeight:"400"}}>
        A CSE Undergrad, currently studying in SRM IST, constantly chasing his dreams {'&'} exploring his love for development, design and technology.<br></br> 
        Likes creating beautifull websites and apps with minimalistic design, using snappy backend technologies. 
     
      <br/>An Exceptional Orator, a decent singer and a lead guitarist.<br/>
      Has been put under various roles of management and leadership, throughout his school and college life and has been successfull in keeping his responsibilities.</p>
      <p  style={{fontWeight:"400",fontSize:"18px"}}>A few technologies, I have been using lately :</p>
       <div className='row ' style={{fontWeight:"400",fontSize:"18px"}}>
       
         <div className="col-12 col-lg-6">
            <ul>
              <li>JavaScript ES6+ (React, JQuery, Node.js, Express).</li>
              <li>Firebase, MySQL, MongoDB.</li>
              <li>React-Native/Ionic.</li>
            </ul>
         </div>
         <div className="col-12 col-lg-6">
            <ul>
              <li>Python (Flask/Django).</li>
              <li>SARIMAX Statistical Model for Time Series Analyisis.</li>
              <li>Adobe Illustrator/Photoshop/XD.</li>
            </ul>
           </div>
       </div>
       </section>
       <hr ></hr>
       <section className="mt-5 mx-4" id="experience" >
            <div className=" mb-5">
               <h1 className="heading" style={{color:"#393a3b",fontSize:"50px"}}><span style={{color:"#16175e"}}>W</span>ork E<span style={{color:"#16175e"}}>x</span></h1>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item mb-3" style={{fontSize:"18px",fontWeight:"400"}}>
               
               <div className="row" >
             
                 <div className="col-12 col-lg-9">
                 <div> <p style={{fontSize:"22px",fontWeight:"700"}}>President {'&'} Founder,<br></br> CodeChef SRM Chapter.</p></div>
               <p className="lead">Sep 2019 - Present</p>
                 <p >
                CodeChef SRM is a non-profital technical student's chapter under the alliance of CodeChef, a product of Unacademy.<br></br>
                 Our main motive is to spread and promote competitive coding on our campus.<br></br>
                  We organize various events like Coding and Debugging competition to give students the correct exposure required to become better programmers.
                </p>
                <p>
                  As the President and Campus Chapter Leader, it is my responsibility to provide overall leadership and direction to the club and coordinate club activities through a board of directors.
                </p>
                 </div>
                 <div className="col-12 col-lg-3 text-center my-3 ">
                    <img src={Ccsc} height="250" width="250" alt="logo_ccsc"></img>
                 </div>
               </div>
              </li>
              <li className="list-group-item mb-3" style={{fontSize:"18px",fontWeight:"400"}}>
               
               <div className="row" >
             
                 <div className="col-12 col-lg-9">
                 <div> <p style={{fontSize:"22px",fontWeight:"700"}}>Software Development Intern,<br></br> Omnipresent Tech.</p></div>
               <p className="lead">Aug 2020 - Present</p>
                 <p >
                 Omnipresent Robot Tech is India's leading robotics, industrial UAV/drone and video analytics solutions provider.
                </p>
                <p>
                As a Software Development Intern, it is my job to prepare dashboards and deploy computer vision models for the company's projects.
                </p>
                 </div>
                 <div className="col-12 col-lg-3 text-center my-3 ">
                    <img src="http://www.omnipresenttech.com/img/logo.png" height="50" width="250" alt="logo_ccsc"></img>
                 </div>
               </div>
              </li>
              <li className="list-group-item mb-3" style={{fontSize:"18px",fontWeight:"400"}}>
               
               <div className="row" >
             
                 <div className="col-12 col-lg-9">
                 <div> <p style={{fontSize:"22px",fontWeight:"700"}}>Research Intern,<br></br> IIIT Alahabad.</p></div>
               <p className="lead">May 2020 - Sep 2020</p>
                 <p >
                Under Dr. Shirshu Verma, I practiced Time Series Analyisis of Stocks and Climate Data Sets using the SARIMAX Statistical Model with Python.
                </p>
                <p>
                This internship helped me gain competence in the field of data analytics by making me confident in using the statsmodel library in python.
                </p>
                 </div>
                 <div className="col-12 col-lg-3 text-center my-3 ">
                    <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png" height="250" width="250" alt="logo_ccsc"></img>
                 </div>
               </div>
              </li>
              <li className="list-group-item mb-3" style={{fontSize:"18px",fontWeight:"400"}}>
                
               <div className="row" >
                 <div className="col-12 col-lg-9">
                 <p style={{fontSize:"22px",fontWeight:"700"}}>Web Developer {'&'} Management Team Member,<br></br> Data Scince Community SRM.</p>
                <p className="lead">Feb 2019 - Present</p>
                 <p >
                 A technology-driven Data Science-based student-led innovation community at SRM IST.<br></br>
                Our aim is to foster development and entrepreneurial skills among students and work as a community that inspires thousands.
                </p>
                <p>
                  As a senior Web Developer, its my job to deploy the ML/DL Models created by the community and also manage its events as a part of the management team.
                </p>
                 </div>
                 <div className="col-12 col-lg-3 text-center my-3 ">
                    <img src={Bdsc} height="250" width="250" alt="logo_ccsc"></img>
                 </div>
               </div>
              </li>
              <li className="list-group-item mb-3" style={{fontSize:"18px",fontWeight:"400"}}>
               
               <div className="row" >
                 <div className="col-12 col-lg-9">
                 <p style={{fontSize:"22px",fontWeight:"700"}}>Technial Team Member,<br></br> CSE Association SRM.</p>
                <p className="lead">Aug 2018 - Apr 2019</p>
                 <p >
                 An association which inculcates in upbringing the CSE department and also setting up new ideas for the moral and intellectual growth of the students.
                </p>
                <p>
                 As a member of the technical team, it was my duty to assist the team to conduct technical events for the association.
                </p>
                 </div>
                 <div className="col-12 col-lg-3 text-center my-3 my-lg-1">
                    <img src={Csea} height="250" width="250" alt="logo_ccsc"></img>
                 </div>
               </div>
              </li>
              <li className="list-group-item mb-3" style={{fontSize:"18px",fontWeight:"400"}}>
               <div className="row" >
                 <div className="col-12 col-lg-9">
                 <p style={{fontSize:"22px",fontWeight:"700"}}>Technial Team Member,<br></br> Directorate of Student Affairs SRM.</p>
                <p className="lead">Jan 2019 - May 2019</p>
                 <p >
                 A student body meant for everything cultural in campus, the directorate comprises of multiple domains, clubs and houses, guided by the Director and staff members.
                </p>
                <p>
                 As a member of the technical team, it was my duty to design poster and holders for it's various events.
                </p>
                 </div>
                 <div className="col-12 col-lg-3 text-center my-3 my-lg-1">
                    <img src="data:image/png;base64,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" height="250" width="250" alt="logo_ccsc"></img>
                 </div>
               </div>
              </li>
              
            </ul>
       </section>
       <hr></hr>
       <section className="mt-5 mx-4" id="education">
            <div className=" mb-5">
               <h1 className="heading" style={{color:"#393a3b",fontSize:"50px"}}><span style={{color:"#16175e"}}>Ed</span>ucati<span style={{color:"#16175e"}}>on</span></h1>
            </div>
            <div className="row" style={{fontSize:"18px",fontWeight:"400"}}>
              <div className="col-12 col-lg-6">
              <p style={{fontSize:"22px",fontWeight:"500"}}><span style={{fontWeight:"700"}}>Bachelor of Technology</span><br></br><div><span className="lead">2018 - 2022</span></div>
              SRM IST Kattankulathur, Tamilnadu.</p>
            
              <ul>
                <li>Computer Science and Technology</li>
                <li>CGPA - 9.5</li>
              </ul>
              </div>
              <div className="col-12 col-lg-6">
              <p style={{fontSize:"22px",fontWeight:"500"}}><span style={{fontWeight:"700"}}>Senior Secondary School Certification</span><br></br> <div><span className="lead">2011 - 2018</span></div>
              Rabindranath World School Gurgaon, Haryana.</p>
             
               <ul>
               <li>CBSE - 94.4% Aggregate</li>
               <li>Head Boy {'&'} Best Debator</li>
               </ul>
              </div>
            </div>
       </section>
       <hr></hr>
       <section className="mt-5 mx-4 card px-5 py-3" id="contact">
            <div className=" mb-5">
               <h1 className="heading text-center" style={{color:"#393a3b",fontSize:"50px"}}><span style={{color:"#16175e"}}>R</span>each O<span style={{color:"#16175e"}}>ut</span></h1>
            </div>
            <form onSubmit={this.handleSubmit} style={{fontSize:"20px",fontWeight:"400"}}>
                <div className='row'>
                <div className="form-group col-12 col-lg-6">
                   <label  htmlFor="name"><span style={{fontWeight:"500"}}>Name</span></label>
                 <input type="text" onChange = {this.handleChange} required id="name" name="name" className="form-control"/>   
                 </div>
                 <div className="form-group col-12 col-lg-6">
                   <label  htmlFor="email"><span style={{fontWeight:"500"}}>Email</span></label>
                 <input type="email" onChange = {this.handleChange} required id="email" name="email" className="form-control"/>   
                 </div>
                </div>
                 <div className="form-group">
                   <label  htmlFor="message"><span style={{fontWeight:"500"}}>Message</span></label>
                 <textarea onChange = {this.handleChange} required id="message" name="message" className="form-control"/>   
                 </div>
               <div className="text-center mt-5">
              {this.state.visible?
               <button className="hvr-pulse-grow" type="submit" style={{border:"dashed",background:"none",borderColor:"grey",borderRadius:"30px"}}><span className="px-5 py-3"><img src="data:image/png;base64,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" className="mr-2" alt="send" height="30px" width="30px"></img>Send</span></button>
              :<p>
               Your Message has been sent!!<br></br>
               I will get back to you as soon as I see your message. 
              </p>}
               </div>
               </form>
           
       </section>
       <hr></hr>
       <section className="my-5 mx-4">
          <div className="text-center">
            Made with <span className="fa fa-heart" style={{color:"#16175e"}}></span> by Devansh.
          </div>
       </section>
     </div>
    
      </div>
    );
  }
}



export default App;
