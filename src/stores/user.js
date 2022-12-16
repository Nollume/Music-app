import { defineStore } from "pinia";
import { auth, usersCollection } from "@/includes/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut as signUserOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const useUserStore = defineStore("user", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      await setDoc(doc(usersCollection, userCred.user.uid), {
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
        youare: values.youare,
      });

      await updateProfile(userCred.user, { displayName: values.name });
      this.userLoggedIn = true;
    },
    async authenticate(values) {
      await signInWithEmailAndPassword(auth, values.email, values.password);

      this.userLoggedIn = true;
    },
    async signOut() {
      await signUserOut(auth);

      this.userLoggedIn = false;
    },
  },
});

export default useUserStore;
