import React from 'react'

export default function QuestionNode(props) {
  return (
    <div class="container-fluid fullScreen">
      <div class="row">
        <div class="col-12 halfHeight">
          <div class="flexCenter">
            <h1 class="display-2">{props.questionText}</h1>
          </div>
        </div>
        <div class="col-12 col-md-6 halfHeight lessSideMargin g-1">
          <button class="btn btn-danger onehunderedPercent fs-1" onClick={() => {props.answer(1)}}><h1 class="display-1"><b>{props.answer1}</b></h1></button>
        </div>
        <div class="col-12 col-md-6 halfHeight lessSideMargin g-1">
          <button class="btn btn-primary onehunderedPercent fs-1" onClick={() => {props.answer(2)}}><h1 class="display-1"><b>{props.answer2}</b></h1></button>
        </div>
      </div>
    </div>
  )
}
