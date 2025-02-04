import { Authenticator } from "@aws-amplify/ui-react";

const Login = () => (
  <Authenticator>
    {({ signOut, user }) => (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Welcome, {user?.signInDetails?.loginId}!</h1>
        <button onClick={signOut} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Sign Out
        </button>
      </main>
    )}
  </Authenticator>
);

export default Login;

