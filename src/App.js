import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            homeLink:"Home",
            homeMounted:true
        }
    }
    onChangeHomeMounted(){
        this.setState({
            homeMounted:!this.state.homeMounted
        })
    }
    onGreet(age){
        alert(age);
    }
    onChangeLinkName(){
        this.setState({
            homeLink:"newLink"
        })
    }
    render() {
    const user={
        name:"anna",
        hobbies:["sports","swimming"]
    };
        let homeCmp=" ";
        if(this.state.homeMounted){
            homeCmp= (
                <Home
                    name={"max"}
                    initialAge={12}
                    user={user}
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName.bind(this)}
                    initialName={this.state.homeLink}
                />
            );
        }
  return (

      <div className="container">
          <div className="row">
              <div className="col-xs-1 col-xs-offset-11">
                 <Header homeLink={this.state.homeLink}/>
              </div>
          </div>
            <div className="row">
              <div className="col-xs-1 col-xs-offset-11">
                <h1>Hello!!</h1>
              </div>
            </div>
          <div className="row">
              <div className="col-xs-1 col-xs-offset-11">
                  {homeCmp}
                 <p>i am child1</p>
                      {/*<p>i am child2</p>*/}

              </div>
          </div>
          <hr/>
          <div className="row">
              <div className="col-xs-1 col-xs-offset-11">
                 <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)mount Home Component</button>
              </div>
          </div>
      </div>
  );
    }
}

export default App;
