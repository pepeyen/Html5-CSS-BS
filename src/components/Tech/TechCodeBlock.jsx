import React, {useEffect} from "react";

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

function TechCodeBlock(props) {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  });
  
  return (
    <div className = "tech-code-block">
      <div className="tech-code-block__title--bold">Examples</div>
      <pre className="line-numbers --shadow">
        <code className={`language-${props.language}`}>
          {props.code.trim()}
        </code>
      </pre>
    </div>
  )
}
export default TechCodeBlock;