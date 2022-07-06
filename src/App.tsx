import { Toaster } from "react-hot-toast";
import { DowloadPage } from "./routes/DownloadPage/DowloadPage";
import { UserDetail } from "./routes/UserDetail/UserDetail";

function App() {
  return (
    <div className="flex flex-col min-h-screen h-full md:h-screen max-h-full w-full overflow-y-auto">
      <UserDetail />
      <DowloadPage />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default App;
