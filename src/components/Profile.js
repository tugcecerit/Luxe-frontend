import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

function Profile({ fontSize }) {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <article className='column'>
        <p style={{ fontSize }}>{user?.nickname}</p>
      </article>
    )
  );
}

export default Profile;

