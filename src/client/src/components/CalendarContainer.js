
import { Calendar, Badge } from 'antd';
import "./../App.css";
import React from "react";
import { thistle } from 'color-name';

class CalendarContainer extends React.Component {
    super(props){
       
    }
    state = {
        isLoaded: false,
        error: null,
        items: [],
    }
    componentDidMount(){
        fetch("").then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            },  
            (error) =>{
                this.setState({
                isLoaded:true,
                error,
                });
            }
        )
    }
dateCellRender(value) {
        return (
          <ul className="events">
              <li key={1}>
                <Badge status={"test123"} text={"test123"} />
                </li>
          </ul>
        );
      }
    render(){
        //if(this.state.error){
          //  return <div> error {this.state.error.message}</div>
        //}
        if(this.state.isLoaded){
            return <Calendar dataCellRender={dataCellRender(value)}/>
        }else{
            return <Calendar />
        }

    }
}
export default CalendarContainer;