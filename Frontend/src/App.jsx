import { RouterProvider } from "react-router-dom";
import { router } from "./routes/app_route.jsx";
import { AuthProvider } from "./feature/auth/auth_context.jsx";
import { InterviewProvider } from "./feature/interview/interview.context.jsx";

const App = () => {
  return (
    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router={router} />
      </InterviewProvider>
    </AuthProvider>
  );
};

export default App;
