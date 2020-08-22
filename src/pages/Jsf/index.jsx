import React from 'react';

//Image URL's
import img from "../../assets/jsf.png";

//Components
import Navbar from '../../components/Navbar';
import TechInfoBar from '../../components/Tech/TechInfoBar';
import TechCodeBlock  from '../../components/Tech/TechCodeBlock';
import PostFetcher from '../../components/Posts';
import Footer from '../../components/Footer';


function Jsf() {
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
    return (
        <React.Fragment>
            <Navbar language="java" />
            <main>
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
                <PostFetcher 
                    postMinRange={42} 
                    postMaxRange={48}
                /> 
                </div>
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default Jsf;