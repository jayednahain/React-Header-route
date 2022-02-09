import { Link, NavLink } from "react-router-dom";

const Contact=(props)=> {
    console.log(props);
    // setTimeout(()=>{
    //     props.history.goBack(1)
    // },2000)

    // const name_list = ["Nahian","Jayed","Robin","Karim"]
    // name_list.forEach((value,index) => {
    //     return {}
    // })

    return (

        
        
            <div className="ui raised very padded text container segment" style={{marginTop:'50px'}}>
                <h1 className="ui haeder">Contact</h1>
                <hr></hr>
                <br></br>
                <div className="ui raised very padded text container segment">
                    <h3><Link to="/Nahian">Nahian</Link></h3>
                </div>
                <div className="ui raised very padded text container segment">
                    <h3><Link to="/Jamshed">Jamshed</Link></h3>
                </div>
                <div className="ui raised very padded text container segment">
                    <h3><Link to="/Jayed">Jayed</Link></h3>
                </div>

            </div>
        
        
     );
}

export default Contact ;