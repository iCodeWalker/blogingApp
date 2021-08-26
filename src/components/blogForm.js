import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';

import './blogForm.css';


class BlogForm extends React.Component{
    state={
        ...this.returnStateObj()
    }

    returnStateObj(){
        if(this.props.currentIndex === -1)
            return{ 
                title:'',
                category:'',
                content:''
            }
        else{
            return this.props.list[this.props.currentIndex]
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.currentIndex !== this.props.currentIndex || prevProps.list.length !== this.props.list.length )
        this.setState({
            ...this.returnStateObj()
        })
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.props.currentIndex === -1){
            this.props.createBlog(this.state)
        }else{
            this.props.updateBLOG(this.state)
        }
    }
    render(){

        return(
            <form onSubmit={this.handleSubmit} autoComplete="off"> 
                
                <div className="form_group">
                    <input name="title" placeholder="Title for Blog" value={this.state.title} onChange={this.handleInputChange}
                    type="text" class="form__input" id="name" required="" 
                    />
                </div>
                
                
                <div className="form_group">
                    <input name="category" placeholder="Category for Blog" value={this.state.category} onChange={this.handleInputChange}
                    type="text" class="form__input" id="name" required="" 
                    />
                </div>
                
               <div className="form_group">
                    <input name="content" placeholder="Content for Blog" value={this.state.content} onChange={this.handleInputChange}
                    type="text" class="form__input" id="name" required="" 
                    />
                </div>
                <button type="submit" className="button">Submit</button>

            </form>
        )
    }
} 

const mapStateToProps = (state) =>{
    return{
        list:state.list,
        currentIndex:state.currentIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createBlog:actions.createBlog,
        updateBLOG:actions.updateBLOG,
        
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(BlogForm);