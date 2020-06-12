import React, { Component } from 'react';

//Cloud Database Import
import Firebase from './Firebase';

//CSS
import './css/firestart.css';

class Firestart extends Component{
    state = { 
        items : [],
        inputUserName : '',
        inputUserID : '',
        inputProductName : '',
        inputProductPrice : '',
        isEdit : false,
        id : ''
    };
    
    componentDidMount(){
        Firebase.firestore().collection(this.props.firebaseDB).onSnapshot(
            (snap)=>{
                this.setState({items: snap.docs.map(doc=>{
                    console.log(doc.data());
                    console.log(doc.id);
                    return {
                        id:doc.id,
                        data:doc.data()
                    }
                })
            })  
        });
    }
    changeUserName = (res)=>{
        this.setState({inputUserName : res.target.value}); 
    }

    changeUserID = (res)=>{
        this.setState({inputUserID : res.target.value}); 
    }

    changeProductName = (res)=>{
        this.setState({inputProductName : res.target.value});  
    }

    changeProductPrice = (res)=>{
        this.setState({inputProductPrice : res.target.value}); 
    }

    firestart = ()=>{
        const{inputUserName,inputUserID,inputProductName,inputProductPrice,isChange} = this.state;

        !isChange?
        Firebase.firestore().collection(this.props.firebaseDB).add({
            userName: inputUserName,
            userID: inputUserID,
            productName: inputProductName,
            productPrice: inputProductPrice
        }).then(()=>{
            console.log('GGs');
            this.setState({inputUserName: '',inputUserID: '',inputProductName: '',inputProductPrice: ''})     
        }): this.change()
    }

    search = (id)=>{
        const reference = Firebase.firestore().collection(this.props.firebaseDB).doc(id);
        reference.get().then((doc)=>{
            if (doc.exists) {
                this.setState({
                    inputUserName: doc.data().userName,
                    inputUserID: doc.data().userID,
                    inputProductName: doc.data().productName,
                    inputProductPrice: doc.data().productPrice,
                    isChange: true,
                    id: doc.id
                })
            } else {
                console.log('Document not found');
            }
        })
    }

    change = ()=>{
        const{id,inputUserName,inputUserID,inputProductName,inputProductPrice} = this.state;
        
        Firebase.firestore().collection(this.props.firebaseDB).doc(id).update({
            userName: inputUserName,
            userID: inputUserID,
            productName: inputProductName,
            productPrice: inputProductPrice
        }).then(()=>{
            console.log('Document updated !');
            this.setState({isChange: false, inputUserName: '',inputUserID: '',inputProductName: '',inputProductPrice: ''})
        })
    }

    delete = (id)=>{
        Firebase.firestore().collection(this.props.firebaseDB).doc(id).delete()
    }

    render() {
        const{inputUserName,inputUserID,inputProductName,inputProductPrice,items} = this.state;

        return (
            <div className = "cart">
                <div className = "cart__body">
                    <div className = "cart__input">
                        <div>
                            <label className = "cart__label--bold" htmlFor="user-name">User Name</label>
                            <input className = "cart__input--light" type="text" name="user-name" placeholder="Nome" value={inputUserName} onChange={this.changeUserName}/> 
                        </div>

                        <div>
                            <label className = "cart__label--bold" htmlFor="user-ID">User ID</label>
                            <input className = "cart__input--light" type="text" name="user-ID" placeholder="ID" value={inputUserID} onChange={this.changeUserID}/>   
                        </div>

                        <div>
                            <label className = "cart__label--bold" htmlFor="product-name">Product Name</label>
                            <input className = "cart__input--light" type="text" name="product-name" placeholder="Nome do Produto" value={inputProductName} onChange={this.changeProductName}/>                
                        </div>

                        <div>
                            <label className = "cart__label--bold" htmlFor="product-price">Product Price</label>
                            <input className = "cart__input--light" type="number" name="product-price" placeholder="Preço do Produto" value={inputProductPrice} onChange={this.changeProductPrice}/>       
                        </div>

                        <button className = "cart__button--extra-light" type="button" onClick={this.firestart}>{this.state.isChange?'Edit':'Insert'}</button>
                    </div>

                    <div className = "cart__listing">
                        <table className = "cart__table">
                            <thead className = "cart__table-head">
                                <tr className = "cart__table-row">
                                    <th className = "cart__table-header" scope="col">Order ID</th>
                                    <th className = "cart__table-header" scope="col">User Name</th>
                                    <th className = "cart__table-header" scope="col">User ID</th>
                                    <th className = "cart__table-header" scope="col">Product Name</th>
                                    <th className = "cart__table-header" scope="col">Product Price</th>
                                </tr>
                            </thead>
                            <tbody className = "cart__table-body">
                                {items !== undefined ?items.map( (item, key) =>(    
                                    <tr className = "cart__table-row" key={key}>
                                        <td className = "cart__table-data">{item.id}</td>
                                        <td className = "cart__table-data">{item.data.userName}</td>
                                        <td className = "cart__table-data">{item.data.userID}</td>
                                        <td className = "cart__table-data">{item.data.productName}</td>
                                        <td className = "cart__table-data">{item.data.productPrice}</td>
                                    </tr>
                                )) :null }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Firestart;