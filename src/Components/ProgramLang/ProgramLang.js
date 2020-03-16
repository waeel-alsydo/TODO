import React, { Component } from 'react';
import './ProgramLang.css';

export default class AddProgramLan extends Component {
    //-------------------------------//
    state = {
        ProgramLang: [
            {Lang: "Java"},
            {Lang: "Java Script"},
            {Lang: "PHP"}
        ],
        value: '',
    }
    //-------------------------------//
    ProgramLan =()=> {
        return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Program Language</th>
                        <th></th>
                    </tr> 
                        {this.state.ProgramLang.map((item, e) =>
                    <tr key={e}><td>{item.Lang}</td>
                        <td><button onClick={()=>{this.Remove(e)}}>Remove</button></td>
                    </tr>
                        )}
                </tbody>
            </table><hr/>
            <div className="add">
                <p>Add more program language</p>
                <input type="text" value={this.state.value} onChange={this.updateNewLang}/>
                <button onClick={this.AddProgramLang}>Add</button>
            </div>
            
        </div>
        )
    }
    //-------------------------------//
    Remove =(e)=> {
        const ProgramLang = [...this.state.ProgramLang];
        ProgramLang.splice(e, 1);
        this.setState({
            ProgramLang
        });
    }
    //-------------------------------//
    updateNewLang =(e)=> {
        this.setState({
            value: e.target.value
        })
    }
    //-------------------------------//
    AddProgramLang =()=> {
        const ProgramLang = [...this.state.ProgramLang];
        ProgramLang.push({
            Lang: this.state.value,
        });
        this.setState({
            ProgramLang,
            value: ''
        })
    }
    //-------------------------------//
    render() {
        return (
            <div>
                <this.ProgramLan/>
            </div>
        )
    }
}
