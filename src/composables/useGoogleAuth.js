let authInstance = null;

export function initGoogleAuth() {
  return new Promise(resolve => {
    window.gapi.load('auth2', async () => {
      authInstance = await window.gapi.auth2.init({
        client_id: process.env.VUE_APP_GOOGLE_SIGNIN_CLIENT_ID
      });
      resolve();
    });
  });
}

export default function useGoogleAuth() {
  async function signIn() {
    const googleUser = await authInstance.signIn();
    return googleUser;
  }

  async function signOut() {
    await authInstance.signOut();
  }

  function getIdToken(googleUser) {
    return googleUser.getAuthResponse().id_token;
  }

  function getProfile(googleUser) {
    const profile = googleUser.getBasicProfile();

    return {
      name: profile.getName(),
      email: profile.getEmail()
    };
  }

  return {
    signIn,
    signOut,
    getIdToken,
    getProfile
  };
}
