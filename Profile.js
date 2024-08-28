import{useState}from"react";
import photo from "./photo.jpg";
import "./Profile.css";
console.log(photo);
const Profile=()=>{
    function Personal(props){
       return( <>
       <h2>{props.Name}</h2>
       <hr/>
       <h3>Biodata</h3>
       <p>Name:{props.Name}</p><br/>
       <p>Age:{props.Age}</p><br/>
       <p>Education:{props.Education}</p><br/>
       <p>Occupation:{props.Occupation}</p><br/>
       <h3>Family Details</h3>
       <p>Fathername:{props.Fathername}</p><br/>
       <p>Mothername:{props.Mothername}</p><br/>
       <p>Fatheroccupation:{props.Fatheroccupation}</p><br/>
       <p>Motheroccpucation:{props.Motheroccpucation}</p><br/>
       <p>Brothername:{props.Brothername}</p><br/>
       <p>Sistername:{props.Sistername}</p><br/>
       <h3>Contact Details</h3>
       <p>Contactno:{props.Contactno}</p><br/>
       <p>Email:{props.Email}</p><br/>
       <p>Address:{props.Address}</p>
       </>
       );

    }
    function Personal1(){
        const name="Krishana";
        const age=19;
        const education="Bsc computerscience";
        const occupation="Student";
        const fathername="Rajesh";
        const mothername="Hema";
        const fatheroccupation="Senior officer";
        const motheroccupation="House wife";
        const brothername="Keerthi";
        const sistername="Anitha";
        const contactno=1000000000;
        const email="Krishana@gmail.com";
        const address="Madurai";
        return(<>
        <Personal Name={name}
        Age={age}
        Education={education}
        Occupation={occupation}
        Fathername={fathername}
        Mothername={mothername}
        Fatheroccupation={fatheroccupation}
        Motheroccpucation={motheroccupation}
        Brothername={brothername}
        Sistername={sistername}
        Contactno={contactno}
        Email={email}
        Address={address}/>
        <Personal1/>
        </>);
    }
    
    const [profile,setProfile]=useState({
        Name:"Krishana",
        Age:19,
        Education:"Bsc computerscience",
        Occupation:"Student",
        Fathername:"Rajesh",
        Mothername:"Hema",
        Fatheroccupation:"Senior officer",
        Motheroccpucation:"House wife",
        Brothername:"Keerthi",
        Sistername:"Anitha",
        Contactno:1000000000,
        Email:"Krishana@gmail.com",
        Address:"Madurai"
    });
    const updateProfile=()=>{
        setProfile(previousState=>{
            return{...previousState,Name:"Arjun",
                Age:19,Education:"BBA",Occupation:"Student",
                Fathername:"Karthick",Mothername:"Raji",
                Fatheroccupation:"Senior officer",Motheroccpucation:"House wife",
                Brothername:"Pranav",Sistername:"Sheela",
                Contactno:"1000000001",Email:"Arjun@gmail.com",
                Address:"Madurai"
            }
        });
    }
    return(<>

          <body>
        <div class="boxa">
           <div class="col-40">
              <h2>{profile.Name}</h2>
           </div>
           <div class="col-60">
              <img src={photo} alt="myphoto"/>
        </div>
        </div><br/>
       <hr/>
       <div class="boxb">
       <h3>Biodata</h3>
       <p>Name:{profile.Name}</p><br/>
       <p>Age:{profile.Age}</p><br/>
       <p>Education:{profile.Education}</p><br/>
       <p>Occupation:{profile.Occupation}</p>
       </div><br/>
       <div class="boxc">
       <h3>Family Details</h3>
       <p>Fathername:{profile.Fathername}</p><br/>
       <p>Mothername:{profile.Mothername}</p><br/>
       <p>Fatheroccupation:{profile.Fatheroccupation}</p><br/>
       <p>Motheroccpucation:{profile.Motheroccpucation}</p><br/>
       <p>Brothername:{profile.Brothername}</p><br/>
       <p>Sistername:{profile.Sistername}</p><br/>
       </div><br/>
       <div class="boxd">
       <h3>Contact Details</h3>
       <p>Contactno:{profile.Contactno}</p><br/>
       <p>Email:{profile.Email}</p><br/>
       <p>Address:{profile.Address}</p>
       </div><br/>
       <button type="button"onClick={updateProfile}>Arjun</button>
       </body>
    </>);
}
export default Profile;