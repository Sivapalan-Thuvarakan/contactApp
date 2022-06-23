import React from "react";

class AddContact extends React.Component{

    render(){
        return <div className="ui main">
                        <h1>Add Contact</h1>
                        <div className="ui form">
                            <div className="ui field"> 
                                    <label>Name</label>
                                    <input type="text" name="name" placeholder="Enter name"/>
                            </div>
                            <div className="ui field"> 
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Enter email"/>
                            </div>
                            <button className="ui button blue">Add</button>
                        </div>
               </div>
    }

}
export default AddContact;