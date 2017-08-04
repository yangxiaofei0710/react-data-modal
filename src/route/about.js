/**
 * Created by wb-yxf273267 on 2017/4/7.
 */
import React, { Component } from 'react';

class About extends Component{
    render (){
        return (
            <div>
                <h1>这是about {this.props.params.name} </h1>
            </div>
        );
    }
}
export default About;