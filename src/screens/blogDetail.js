import React from 'react';
import {connect} from 'react-redux';
import './blogDetail.css'

const BlogDetail = (props) => {
    const newIndex = props.match.params.index;
    const value =  props.list[newIndex]

    return(
       <div className="main_div">
            <div className="main_style">
                <div className="title_style">
                <h1>Title : {value.title}</h1>
                </div>

                <div className="category_style">
                <h3>category : {value.category}</h3>

                </div>
                
                <div className="content_style">
                    <p>{value.content}</p>
                </div>
     
            </div>
         </div>

    )
}

const mapStateToProps = (state) =>{
    return{
        list:state.list
    }
}
export default connect(mapStateToProps)(BlogDetail);