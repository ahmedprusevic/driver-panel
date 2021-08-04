import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { withAuth } from '../components';
import api from '../services/api';

type QuestionProps = {
  questions: Question[];
};

const Questions = (props: QuestionProps) => {
  // @ts-ignore
  console.log('questions from component', props.props.questions);
  return <div></div>;
};

Questions.getInitialProps = async function getInitialProps() {
  const questions: Question[] | undefined = await api.getQuestions();
  // console.log('questions', questions);
  if (!questions) {
    return {
      notFound: true,
    };
  }

  return {
    props: { questions },
  };
};

export default withAuth(Questions);
