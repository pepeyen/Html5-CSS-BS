import React, { Component } from 'react';

//Image URL's
import img from "../../img/jsf.png";

//Components
import Navbar from '../../comp/navbar/Navbar.js';
import TechInfoBar from '../../comp/tech/TechInfoBar.js';
import TechCodeBlock  from '../../comp/tech/TechCodeBlock.js';
import PostFetcher from '../../comp/post-fetcher/PostFetcher';
import Footer from '../../comp/footer/Footer.js';


const info = `
JavaServer Faces (JSF) is a Java specification for building component-based user interfaces for web applications and was formalized as a standard through the Java Community Process being part of the Java Platform, Enterprise Edition. It is also a MVC web framework that simplifies construction of user interfaces (UI) for server-based applications by using reusable UI components in a page.
`
const code = `
package com.mkyong.common;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;

@ManagedBean
@SessionScoped
public class HelloBean implements Serializable {

	private static final long serialVersionUID = 1L;

	private String name;

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
`


class JsfPage extends Component{
    render() {
        return (
            <div className = "jsf-page">
                <Navbar language="java" />
                <TechInfoBar 
                    techUrl = {img} 
                    color = '#FBAC2A' 
                    info = {info}
                />
                <TechCodeBlock
                    code={code}
                    language="java"
                    plugins={["line-numbers"]}
                />
                <div className = "user-posts">
                    <PostFetcher postId = '42' />
                    <PostFetcher postId = '58' />
                </div>
                <Footer />
            </div>
        );
    }
}

export default JsfPage;