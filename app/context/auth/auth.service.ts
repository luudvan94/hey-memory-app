import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

interface AuthService {
  loginWithGoogle: () => Promise<FirebaseAuthTypes.UserCredential | undefined>;
  logout: () => Promise<void>;
}

class FirebaseAuthService implements AuthService {
  loginWithGoogle = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true
      });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (_) {}
  };

  logout = async () => {
    await auth().signOut();
  };
}

export { AuthService, FirebaseAuthService };
