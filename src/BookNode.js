import React from 'react'

export default function QuestionNode(props) {
  return (
    <div class="container-fluid fullscreen text-center">
      <div class="row">
          <div class="col-12 col-md-6">
              <h1 class="display-1 mb-0"><b>{props.bookTitle}</b></h1>
              <h6 class="display-6 mb-5">By: {props.bookAuthor}</h6>
              <p style={{"width":"65%", "margin-left":"17.5%"}}>{props.bookDesc}</p>
              <button class="btn btn-lg btn-primary mb-5" onClick={() => {props.resetFunc()}}>Start Over</button>
          </div>
          <div class="col-12 col-md-6">
              <div style={{"height":"100vh"}}>
                  <img class="rounded img-fluid d-block m-auto img-thumbnail" src={props.bookImg} alt="book cover" />
              </div>
          </div>
      </div>
    </div>
  );
}