import React,{Component} from 'react'
import { Link } from 'react-router-dom';

class Reciever extends Component{
    constructor(props){
        super(props)
        this.state={
            Name: this.props.name,
            fruit: ''
        }
        this.changeNeed = this.changeNeed.bind(this)
    }

    changeNeed(e){
        var temp = e.target.value
        console.log(typeof temp)
        var key = e.target.checked
        this.setState({
            temp: key
        })
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <h3>Please Finish setting up your account</h3>
                <h5>Categories</h5>
                <form>
                    <div className="switch">
                        Canned Fruit  
                        <label>
                        Low Need
                        <input type="checkbox" value='fruit' onChange={this.changeNeed} />
                        <span className="lever"></span>
                        High Need
                        </label>
                    </div>
                    < br/>
                    <div className="switch">
                        Canned Veggies  
                        <label>
                        Low Need
                        <input type="checkbox" value='fruit' onChange={this.changeNeed} />
                        <span className="lever"></span>
                        High Need
                        </label>
                    </div>
                    < br/>
                    <div className="switch">
                        Noodles 
                        <label>
                        Low Need
                        <input type="checkbox" value='fruit' onChange={this.changeNeed} />
                        <span className="lever"></span>
                        High Need
                        </label>
                    </div>
                    < br/>
                    <div className="switch">
                        Rice
                        <label>
                        Low Need
                        <input type="checkbox" value='fruit' onChange={this.changeNeed} />
                        <span className="lever"></span>
                        High Need
                        </label>
                    </div>
                    <br />
                    <br />
                    <Link className='btn' to='/'>Submit</Link>
                </form>
            </div>
        )
    }
}
export default Reciever