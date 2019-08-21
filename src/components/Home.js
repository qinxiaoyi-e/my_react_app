import React,{Component} from "react";
import PropTypes from 'prop-types';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            age:props.initialAge,
            status:0,
            homeLink:props.initialName
        }
        setTimeout(()=>{
            this.setState({
                status:1
            })
        },3000)
        console.log("Contructor")
    }

    onMakeOlder(){
        console.log(this);
        this.setState({
            age:this.state.age+3
        })
    }
    handleGreet(){
        this.props.greet(this.state.age)
    }
    onChangeLink(){
        this.props.changeLink(this.state.homeLink)
    }
    onHandleChange(event){
        this.setState({
            homeLink:event.target.value
        })
    }
    // 组件生命周期
    componentWillMount(){
        console.log("Component will mount")
    }
    componentDidMount(){
        console.log("Component did mount")
    }
    componentWillReceiveProps(nextProps){
        console.log('Component will receive props',nextProps)
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('Component should update',nextProps,nextState);
        if(nextState.status===1){
            return false;
        }
        return true;
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('Component will update',nextProps,nextState,nextContext)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component did update',prevProps,prevState,snapshot)
    }
    componentWillUnmount() {
        console.log('Component will unmount')
    }

    render(){
    console.log(this.props);
    console.log("render");
    return(
        <div className="container">
            <div className="row">
                <div className="col-xs-1 col-xs-offset-11">
                    <div>your name is {this.props.name},your age is {this.state.age}</div>
                    <p>Status:{this.state.status}</p>
                    <button className="btn btn-primary" onClick={()=>{this.onMakeOlder()}}>Make me older</button>
                    <hr />
                    <button className="btn btn-primary" onClick={this.handleGreet.bind(this)}>hello</button>
                    <hr/>
                    <input type="" defaultValue={this.props.initialName} value={this.state.initialName} onChange={(event)=>this.onHandleChange(event)}/>
                    <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change</button>
                    <div>
                        <h4>hobies</h4>
                        <ul>
                            {this.props.user.hobbies.map((hobby,i)=><li key={i}>{hobby}</li>)}
                        </ul>
                    </div>
                    <div>{this.props.children}</div>
                </div>
            </div>
        </div>
    );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age:PropTypes.number,
    user:PropTypes.object,
    children: PropTypes.element.isRequired,
    greet:PropTypes.func,
    initialName:PropTypes.string
};
