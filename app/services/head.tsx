import { FC } from 'react';
import HeadTag from '../../components/head-tag';
import { buildTitle } from '../../lib/build-title';

const Head: FC = () => {
  const title = buildTitle('Services');

  return <HeadTag title={title} />;
};

export default Head;
