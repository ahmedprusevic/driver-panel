import axios, { AxiosResponse } from 'axios';
import { NextPageContext } from 'next';
import React from 'react';
import { withAuth } from '../components';
import api from '../services/api';

type QuestionProps = {
  questions: Question[];
};

const Questions = ({ questions }: QuestionProps) => {
  console.log('questions from component', questions);
  return <div></div>;
};

export async function getInitialProps(ctx: NextPageContext) {
  const questions: Question[] | undefined = await api.getQuestions();
  if (!questions) {
    return {
      notFound: true,
    };
  }

  return {
    props: { questions },
  };
}

export default withAuth(Questions);
