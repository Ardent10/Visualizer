import React from 'react';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';


const CodeEditor = ({ value, onChange }) => {
    // value = "This is testing the algorithms part" 
    // console.log(value);
    
    return (
    <AceEditor 
      mode="javascript"
      theme="monokai"
      value={value}
      onChange={onChange}
      width="35%"
      height="79vh"
      showPrintMargin
      showGutter
      highlightActiveLine
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

export default CodeEditor;
