import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { isTemplateMiddle } from 'typescript';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom';

import BlogForm from '../components/blogForm';

import "./blogList.css";
class BlogList extends React.Component{


    handleEdit = (index) => {
        this.props.updateIndex(index)
    }
    handleDelete = (index) => {
        this.props.deleteBlog(index)
    }
    handleCallback = (value) => {

        console.log(value)
    }
    render(){
        return(
            <div>
                <h2 className="heading_1">Start Blogging Today</h2>
                <h3 className="heading_2">Let your words travel the world.</h3>
                <div className="table_content_logout" ><button  className="table_delete_button"><Link to={{ pathname:"/login"}} className = "link_style_logout">LOGOUT</Link></button></div>
            <BlogForm />
            <hr />
            <div className="table_div">

                    {
                        this.props.list.map((item,index)=>{
                            return <div key={index}>
                                <ul>
                                    <div className="list_style">
                                        <Link to={{ pathname:`/blog-detail/${index}`,state:index}} className = "link_style">{item.title}</Link>
                                        <div className="button_style">
                                            <div className="table_content" ><button onClick={()=>this.handleEdit(index)} className="table_edit_button">Edit</button></div>
                                            <div className="table_content" ><button onClick={()=>this.handleDelete(index)}className="table_delete_button">Delete</button></div>
                                        </div>
                                    </div>
                                    
                                </ul>
                                {/* <td><div onClick={()=>this.handleCallback(item.index)}>{item.title}</div></td>
                                <td className="table_title">{item.title}</td>
                                <td className="table_category">{item.category}</td>
                                <td className="table_content">{item.content}</td> */}
                                
                            </div>
                        })
                    }

            </div>
            </div>
        )
    }
} 

const mapStateToProps = (state) =>{
    return{
        list:state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteBlog:actions.deleteBlog,
        updateIndex:actions.updateIndex,

    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(BlogList);