import React, { Component } from 'react';
import axios from 'axios';
import brace from 'react-ace';
import AceEditor from "react-ace";

import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/mode/c_cpp';
import 'brace/theme/github';
import 'brace/ext/language_tools';

const IDE_HTML = () => {
    return (
        <div>
          
        </div>
    )};
const IDE = () =>{
class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      languageId: 70,
      currentLanguage: 'python',
      baseURL: 'http://127.0.0.1:5555',
      languageMap: {
        70: 'python',
        76: 'cpp',
        62: 'java',
      },
      requestBody: {
        source_code: 'print "hello in python simplecoding"',
        language_id: '70',
        number_of_runs: null,
        stdin: 'Judge0',
        expected_output: null,
        cpu_time_limit: null,
        cpu_extra_time: null,
        wall_time_limit: null,
        memory_limit: null,
        stack_limit: null,
        max_processes_and_or_threads: null,
        enable_per_process_and_thread_time_limit: null,
        enable_per_process_and_thread_memory_limit: null,
        max_file_size: null,
        enable_network: null,
      },
      token: null,
      response: null,
    };
  }

  waitFor3second() {
    return new Promise((resolve) =>
      setTimeout(() => resolve('result'), 3000),
    );
  }

  makeSubmission() {
    // submit the code
    /*
         */
    // set laoding = true
    this.setState({ isLoading: true });
    // integrate axios
    console.log('submit');
    console.log('html', document.getElementsByClassName('ace_content')[0].innerText);
    this.setState({
      requestBody: {
        ...this.state.requestBody,
        source_code: document.getElementsByClassName('ace_content')[0].innerText,
        language_id: this.state.languageId.toString(),
      },
    });
    axios
      .post(`${this.state.baseURL}/submissions`, this.state.requestBody)
      .then((result) => {
        // we should get the token here
        console.log('result', result);
        this.setState({ token: result.data.token });
        // wait for 3 second
        this.waitFor3second().then(() => {
          // get the repose from submimisson api
          axios
            .get(`${this.state.baseURL}/submissions/${this.state.token}`)
            .then((result) => {
              console.log('result', result);
              // loading complete
              this.setState({
                isLoading: false,
                response: result.data.stdout,
              });
            })
            .catch((err) => {
              this.setState({ isLoading: false });
              console.log('err', err);
            });
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  changeLanguage() {
    console.log('languageId', this.state.languageId);
    this.setState({
      requestBody: {
        ...this.state.requestBody,
        language_id: this.state.languageId.toString(),
      },
      currentLanguage: this.state.languageMap[this.state.languageId],
    })
  }
  }
}
export { IDE }

  