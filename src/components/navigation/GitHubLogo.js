import React from 'react';
import GitHubLogo from 'components/navigation/GitHubLogo.svg';
import StyledGitHubLogo from 'components/styles/StyledGitHubLogo';

export default () => {

  return (
    <a href='https://github.com/AmroNagdy/quant-mods'>
      <StyledGitHubLogo
        src={GitHubLogo}
        alt='GitHubLogo'
      />
    </a>
  );

};