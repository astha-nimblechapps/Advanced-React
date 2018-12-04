import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error, {ErrorStyles} from './ErrorMessage';
import { Label, Input, Avatar, Button, Card } from '../lib/exim-component';

const ADD_ITEMS = gql`
  mutation ADD_ITEMS(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0,
    errorMessage:'',
   
  };
  handleChange = e => {
    //console.log(e.target.value)
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'demoastha');
    //https://res.cloudinary.com/dvo5mxjiw/image/upload/v1542695244/sample.jpg
    const res = await fetch('https://api.cloudinary.com/v1_1/dvo5mxjiw/image/upload', {
      method: 'POST',
      body: data,
    });
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
    });
  };

  renderStatus = async (e, createItem) => {
    e.preventDefault();
    if (!this.state.title || !this.state.price || !this.state.description || !this.state.image || !this.state.largeImage) {
      this.setState({ errorMessage: "All Fields are required.!!" });
    } else {
      const res = await createItem();              
             // console.log(res);
              Router.push({
                pathname: '/item',
                query: { id: res.data.createItem.id },
              });
      this.setState({ errorMessage:''});
    }
  };

  render() {
    return (
      <Mutation mutation={ADD_ITEMS} variables={this.state}>
        {(createItem, { loading, error }) => (
          <Card>
          <Form
            data-test="form"
            onSubmit={async e => {
             this.renderStatus(e,createItem)
            }}
          >
            {this.state.errorMessage ? (
                      <ErrorStyles>
                        <p data-test="graphql-error">
                          <strong>Shoot!</strong>
                          {this.state.errorMessage}
                        </p>
                      </ErrorStyles>
                    ) : (
                      <Error error={error} />
                    )}
               
            <fieldset disabled={loading} aria-busy={loading}>
            <h6 style={{marginTop: '8px', marginBottom: '8px'}}>Add Item</h6>
            <Label size="small">Image:</Label>
              
                <Input
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Upload an image"
                  required
                  onChange={this.uploadFile}
                />
                {this.state.image && (
                  <Avatar src={ this.state.image}></Avatar>
                  // <img width="100" src={this.state.image} alt="Upload Preview" />
                )}
             
             <Label size="small"> Title:</Label>
               
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  required
                  value={this.state.title}
                  onChange={this.handleChange}
                />
           

             <Label size="small">Price:</Label>
              
                <Input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Price"
                  required
                  value={this.state.price}
                  onChange={this.handleChange}
                />
            
              {/* <label htmlFor="color">
                Select Color
                    <select 
                    name="color"
                    value={this.state.color} 
                    onChange={this.handleChange} >
                    <option value="none">Please Select Color</option>
                  <option value="Red">Red</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                  </select>
              </label>
              <label htmlFor="size">
                Select Size
                    <select 
                    name="size"
                    value={this.state.size} 
                    onChange={this.handleChange} >
                    <option value="none">Please Select Size</option>
                  <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>
              </label> */}
           <Label size="small">Description:</Label>
                
                <Input
                type="text"
                  id="description"
                  name="description"
                  placeholder="Enter A Description"
                  required
                  value={this.state.description}
                  onChange={this.handleChange}
                />
           
              <Button type="submit" loader={loading}>Submit</Button>
            </fieldset>
          </Form>
          </Card>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;
export { ADD_ITEMS };
