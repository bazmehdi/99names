import React, {Component} from 'react';
import './Grid.scss';

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      grid: []
    }
  }

  handleClick(e) {
    const pageId = e.currentTarget.id
    console.log(pageId + ' clicked');
    this.props.history.push('/' + pageId, {id: pageId});
  }

  componentDidMount() {
    fetch('/grid')
      .then(res => res.json())
      .then(grid => this.setState({grid}, () => console.log('Data fetched..', grid)));
  }

  render() {
    return (

        <main>
          <div className="wrapper">
          {this.state.grid.map(data =>
            <div key={data.id} onClick={e => this.handleClick(e)} id={data.image_id} className="box" style={{backgroundImage: 'url(../../../' + data.path + ')'}}>
              <div className="overlay"></div>
              <h3>{data.name}</h3>
            </div>
          )}
          </div>
        </main>

    );
  }
}

export default Grid;