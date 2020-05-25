import React from "react";

//Prism depedencies for code block
import Prism from "prismjs/components/prism-core";
import 'prismjs/components/prism-markup-templating';
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/components/prism-clike";

//Prism languagues
import "prismjs/components/prism-markup";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-java";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-php";


//CSS
import "./css/prism.css";

class TechCodeBlock extends React.Component {
  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 0)
  }
  render() {
    return (
      <pre className="line-numbers --shadow">
        <code className={`language-${this.props.language}`}>
          {this.props.code.trim()}
        </code>
      </pre>
    )
  }
}
export default TechCodeBlock;