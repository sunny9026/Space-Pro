import React, { Component, PureComponent } from 'react';



class Filter extends PureComponent {

    render() {
        const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
        return (
            <div>
            <h5>Filters</h5>
            <center>
            <div>
            <h6>Launch Year</h6><hr></hr> {
              years.map((item, i ) => <button key={i} type="text" value={item} className="btn" onClick={this.props.yearSelected}>{item}</button>)
            }
            </div>
            <h6>Successful Launch</h6><hr></hr>
            <button value={true} type="text" className="btn" onClick={this.props.launchSuccessSelected}>True</button>
            <button value={false} type="text" className="btn" onClick={this.props.launchSuccessSelected}>False</button>
            <h6>Successful Landing</h6><hr></hr>
            <button value={true} type="text" className="btn" onClick={this.props.landSuccessSelected}>True</button>
            <button value={false} type="text" className="btn" onClick={this.props.landSuccessSelected}>False</button>
            </center>
            </div>
        );
    }
}

export default Filter;