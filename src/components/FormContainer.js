import React, { Component } from "react";

class FormContainer extends Component {
  getTitleInput(e) {
    console.log("title", e.target.value);
  }

  getAuthorInput(e) {
    console.log("author", e.target.value);
  }

  render() {
    return (
      <div>
        <section className="form-container">
          <input
            type="text"
            placeholder="Enter Title..."
            onChange={this.getTitleInput}
          />
          <input
            type="text"
            placeholder="Enter Author..."
            onChange={this.getAuthorInput}
          />
          <label htmlFor="yes">Yes</label>
          <input type="radio" value="yes" id="yes" name="haveRead" />
          <label htmlFor="no">No</label>
          <input
            type="radio"
            value="no"
            id="no"
            name="haveRead"
            defaultChecked
          />
        </section>
      </div>
    );
  }
}

export default FormContainer;
