import React, { Component } from 'react';
import { Tabs, Tab,  Grid, Cell, Card, CardTitle, CardActions, Button, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
            this.state = { activeTab: 0}
           
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiuqrO2-YvjAhWoBWMBHcOQD8YQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fmedium.com%252F%2540alexmngn%252Fhow-to-better-organize-your-react-applications-2fd3ea1920f1%26psig%3DAOvVaw2qzYwpea1KzGyzNPhjlY6V%26ust%3D1561803408259963&psig=AOvVaw2qzYwpea1KzGyzNPhjlY6V&ust=1561803408259963) bottom right 15% no-repeat #46B6AC'}}>React Project</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                    <CardActions border>
                            <Button colored>GITHUB</Button>
                            <Button colored>BITBUCKET</Button>
                            <Button colored>CODEPEN</Button>
                    </CardActions>
                
                </Card>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiuqrO2-YvjAhWoBWMBHcOQD8YQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fmedium.com%252F%2540alexmngn%252Fhow-to-better-organize-your-react-applications-2fd3ea1920f1%26psig%3DAOvVaw2qzYwpea1KzGyzNPhjlY6V%26ust%3D1561803408259963&psig=AOvVaw2qzYwpea1KzGyzNPhjlY6V&ust=1561803408259963) bottom right 15% no-repeat #46B6AC'}}>React Native Project</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                    <CardActions border>
                            <Button colored>GITHUB</Button>
                            <Button colored>BITBUCKET</Button>
                            <Button colored>CODEPEN</Button>
                    </CardActions>
                
                </Card>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiuqrO2-YvjAhWoBWMBHcOQD8YQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fmedium.com%252F%2540alexmngn%252Fhow-to-better-organize-your-react-applications-2fd3ea1920f1%26psig%3DAOvVaw2qzYwpea1KzGyzNPhjlY6V%26ust%3D1561803408259963&psig=AOvVaw2qzYwpea1KzGyzNPhjlY6V&ust=1561803408259963) bottom right 15% no-repeat #46B6AC'}}>Angular Project</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                    <CardActions border>
                            <Button colored>GITHUB</Button>
                            <Button colored>BITBUCKET</Button>
                            <Button colored>CODEPEN</Button>
                    </CardActions>
                
                </Card>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">  
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React Js</Tab>
                    <Tab>React Native</Tab>
                    <Tab>Angular</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                </section>

              
                
            </div>
        )
    }
}
export default Projects;