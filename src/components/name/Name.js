import React, {Component} from 'react';
import './Name.scss';

class Name extends Component {
  constructor() {
    super();
    this.state = {
      names: []
    }
  }

  componentDidMount() {
    const id = this.props.location.state.id
    console.log('ID fetched..', id)
    fetch('/name/' + id)
      .then(res => res.json())
      .then(names => this.setState({names}, () => console.log('Data fetched..', names)));
  }

  render() {
    return (
        <main>
            {this.state.names.map(data =>
              <div key={data.page_id} className="name-wrapper">
                <div className="popup-grid box1">
                  <span>
                    <p className="name">{data.name}</p>
                    <p className="trans">{data.translation}</p>
                  </span>
                </div>
                <div className="popup-grid box2">
                  <p className="quote">{data.quote}</p>
                  <p>{data.desc}</p>
                </div>
                <div className="popup-grid box3" style={{backgroundImage: 'url(../../../' + data.ps_image + ')'}}></div>
                <div className="popup-grid box4" style={{backgroundImage: 'url(../../../' + data.photo1 + ')'}}>Photo1</div>
                <div className="popup-grid box5" style={{backgroundImage: 'url(../../../' + data.photo2 + ')'}}>Photo2</div>
                <div className="popup-grid box6" style={{backgroundImage: 'url(../../../' + data.photo3 + ')'}}>Photo3</div>
              </div>
            )}
        </main>
    );
  }
}

export default Name;