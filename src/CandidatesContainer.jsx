import React from "react";

import CandidateNames from "./CandidateNames";

const list1=["Kunal","Ovais","Raju","Vijay","Rahul"];
const list2=["Santosh","Jay","Sahil","Hardik"];
const list3=["Ajay","Nirali","Amruta","Tushar"];


class CandidatesContainer extends  React.Component{
    constructor(props){
        super(props);
        this.state={

            CandidateNames:list1,
            
            //  CandidateNames:["Jiyana","Hetvi","Priya","Pushti","Rahul"]
        };
        this.changelist1=this.changelist1.bind(this);
        this.changelist2=this.changelist2.bind(this);
        
    }
        changelist1(){
            this.setState({CandidateNames:list2});
         }
        changelist2(){
            this.setState({CandidateNames:list3});
         }
    
    render(){
    return<>
        <CandidateNames CandidateNames={this.state.CandidateNames}/>
        <button onClick={this.changelist1}>Update list1</button>
        <button onClick={this.changelist2}>Update list2</button>
         </>
    }
        
}

export default CandidatesContainer;