/**
 * Created by wb-yxf273267 on 2017/4/7.
 */
import React , {Component} from "react";
import {Link} from 'react-router';

class Repos extends Component{
    render(){
        return(
            <div>
                <p>这是repos111</p>
                <Link to=""></Link>
                <Link to="/repos/111/about/000">跳转到reops222</Link>
                {this.props.children}
            </div>
        );
    }
}
export default Repos;