import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData_P } from "../../action/space-action";
import { Loading } from '../../common';
import CountriesItem from './CountriesItem';
import Filter from './filter';

const m = ({ countries }) => ({ countries });


@connect(m, { fetchData_P })
export default class Space extends Component {

  componentDidMount() {
    console.log("did mount called")
    this.props.fetchData_P(this.state);
  }

  constructor(props) {
    super(props);
    this.state = {
      year: '',
      launch:'',
      land:''
    }
  }

  yearSelected(event) {
    console.log(event.target.value)
    this.setState({year:event.target.value}, () => {
      this.props.fetchData_P(this.state);
    })
  }

  launchSuccessSelected(event) {
    console.log(event.target.value)
    this.setState({launch:event.target.value}, () => {
      this.props.fetchData_P(this.state);
    })

  }

  landSuccessSelected(event) {
    console.log(event.target.value)
    this.setState({land:event.target.value}, () => {
      this.props.fetchData_P(this.state);
    })
  }


  render() {
    const { countries: { isFetching, data } } = this.props;

    console.log(this.props.countries.data);

    if(data) {
    return(
      <div className="container">
        <h2>SpaceX Launch Programs</h2>
        <div className="space-container">
          <div className="space-left">
            <Filter yearSelected={this.yearSelected.bind(this)} launchSuccessSelected={this.landSuccessSelected.bind(this)} landSuccessSelected={this.landSuccessSelected.bind(this)}/>
            </div>
          <div className="space-right">
          {data.map((item, i) => {
            if(isFetching) {
              return <Loading />
            }
            return <CountriesItem key={i} {...item} />
          })}
          </div>
        </div>
      </div>
    );}
    else return <Loading />
  }
};