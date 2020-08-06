import React, { Component } from "react";

import CKEditor from "@ckeditor/ckeditor5-react";

// NOTE: Use the editor from source (not a build)!
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PresenceList from "@ckeditor/ckeditor5-real-time-collaboration/src/presencelist";

import "./App.css";
// const editorConfiguration = {
//   plugins: [Essentials, Bold, Italic, Paragraph, PresenceList],
//   toolbar: ["bold", "italic"],
//   cloudServices: {
//     tokenUrl:
//       "https://73743.cke-cs.com/token/dev/745bbaecff9327ec7e36fc9fe68d3f0d11a19edbd9f27056dcc3ac0e45c4",
//     uploadUrl: "https://73743.cke-cs.com/easyimage/upload/",
//     webSocketUrl: "wss://73743.cke-cs.com/ws",
//   },
//   presenceList: {
//     container: this.presenceListElementRef.current,
//   },
// };

class App extends Component {

  state = {
    isLayoutReady: false
  }

  componentDidMount() {
    // When the layout is ready you can switch the state and render the `<CKEditor />` component.
    this.setState({ isLayoutReady: true });
  }
  presenceListElementRef = React.createRef();

  render() {

    return (
      <div className="App">
        <h2>Using CKEditor 5 from source in React</h2>
        <div className="row-presence">
          <div ref={this.presenceListElementRef} className="presence"></div>
        </div>
        <CKEditor
          editor={ClassicEditor}
          config={{
            plugins: [Essentials, Bold, Italic, Paragraph, PresenceList],
            toolbar: ["bold", "italic"],
            cloudServices: {
              tokenUrl:
                "https://73743.cke-cs.com/token/dev/745bbaecff9327ec7e36fc9fe68d3f0d11a19edbd9f27056dcc3ac0e45c4",
              uploadUrl: "https://73743.cke-cs.com/easyimage/upload/",
              webSocketUrl: "wss://73743.cke-cs.com/ws",
            },
            presenceList: {
              container: this.presenceListElementRef.current,
            },
          }}
          data="<p>Hello from CKEditor 5!</p>"
          onInit={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    );
  }
}

export default App;
