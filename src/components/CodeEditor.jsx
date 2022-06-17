import React from 'react';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import { useSelector } from 'react-redux';


const CodeEditor = ({ onChange,run }) => {
    const algo = useSelector(state=>state.array.algorithm);
    
    // console.log(run);
    
    return (
    <AceEditor 
      mode="javascript"
      theme="monokai"
      value={algo}
      onChange={run}
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
