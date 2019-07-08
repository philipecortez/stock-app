import React, { Component } from "react"

class StocksList extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      searchText: "",
    }
  }

  handleChange(event) {
    this.setState({searchText: event.target.value})
  }

  render() {
    return(
      <div className="app">
        <header>
          <ul className="top-buttons">
            <li><a className="login">Log in</a></li>
            <li><a className="signup">Sign up</a></li>
          </ul>
        </header>
        <main>
          <h1 className="logo">Stocks Fan</h1>

          <form >
            <input
              className="search-field"
              type="text"
              placeholder="Find a Stock..."
              value={this.state.searchText}
              onChange={this.handleChange}
            />
          </form>

          <p className="app-desctription">
            Find all the data you need to pick up stocks based on fundamental analysis.
          </p>
        </main>
        <section className="learn-more">
          <a>
            <p>Learn more</p>
          </a>
        </section>
        <section>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat magna augue, et egestas ante accumsan at. In aliquet nec libero at pulvinar. Pellentesque fringilla sit amet mauris vitae laoreet. Morbi non faucibus ipsum. Nulla ac mi hendrerit, placerat metus vel, ullamcorper velit. Fusce sollicitudin, velit sed viverra pharetra, risus ipsum tincidunt sapien, eu faucibus lorem tortor id diam. Donec scelerisque malesuada enim nec vulputate. Nunc semper vulputate ornare. Etiam pretium commodo condimentum. Nam nunc urna, iaculis eu lectus quis, sollicitudin molestie nisl. Mauris tincidunt condimentum sapien at vestibulum. Donec tincidunt tincidunt tellus, eget lobortis magna sodales interdum.
          </p>
        </section>
      </div>
    )
  }
}

export default StocksList
