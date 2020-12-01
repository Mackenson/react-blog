import React from "react";
import {
  Button,
  Icon,
  Paper
} from "@material-ui/core";
import './blog.css'
import TitleField from '../../components/TitleField'

class Blog extends React.Component {
  constructor(props: any) {
  super(props);
}
handleClear() {
  this.setState ({


  })
}

handleFormSubmit(event: any) {
  this.setState({ });
  this.handleClear()
}

render(){
    let content = <form id="campaign-form" onSubmit={this.handleFormSubmit}>
          <div>
            <TitleField
              label="Title"
            />
            <br />
          </div>
          <div   className="btn">
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={this.handleFormSubmit}>
              Submit Form
            </Button>
          </div>
        </form>
    return (
      <React.Fragment>
        <Paper style={{ width: "800px", padding: "8px", margin: "15% auto" }}>
        {content}
        </Paper>
      </React.Fragment>
    )
  }
}

export default Blog;
