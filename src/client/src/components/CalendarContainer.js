
class CalendarContainer extends React.Component {
    super(props){
        this.state = {
            isLoaded: false,
            error: null,
            items: [],

        }
    }
    componentDidMount(){
        fetch("").then(es => res.json())
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
    render(){
        if(error){
            return <div> error {this.state.error.message}</div>
        }
        if(!isLoaded){
            return <h1>Loading</h1>
        }else{
            return <h1>Sucess</h1>
        }

        }
    }
}
