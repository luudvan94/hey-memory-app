import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

interface AuthService {
  loginWithGoogle: () => Promise<FirebaseAuthTypes.UserCredential>;
}

class FirebaseAuthService implements AuthService {
  loginWithGoogle = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };
}

export { AuthService, FirebaseAuthService };
