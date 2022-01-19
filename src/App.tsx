import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map(({ id, ...rest }) => (
          <Route key={id} {...rest} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
