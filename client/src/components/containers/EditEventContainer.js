import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editEvet, getEventById } from '../../actions';
import FormikForm from '../presentation/FormikForm';
import Spinner from '../../img/spinner.svg';
import { Container } from '../../styled-components/EditEventContainer.styled';

class EditEventContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialState: this.props.singleEvent[0]
    }
  }

  componentDidMount = () => {
    this.props.getEventById(this.props.match.params.id)
  }
  
  render() {
    return(
      <Container>
        {
          this.props.singleEvent[0] === undefined ? <img src={Spinner} alt="smile.png" /> : 
          <FormikForm 
            actionSubmit={this.props.editEvet} 
            location={this.props} flag={true} 
            initialState={this.props.singleEvent[0]} 
            title={'Edit Event'}
          />
        }
      </Container>
    )
  }
}

const mapSateToProps = state => ({
  singleEvent: Object.values(state.singleEvent)
});

export default connect(mapSateToProps,{editEvet, getEventById})(EditEventContainer);