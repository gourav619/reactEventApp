import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root";
import { HomePage } from "./pages/HomePage";
import { EventsPage } from "./pages/EventsPage";
import { NewEventPage, action } from "./pages/NewEventPage";
import { EditEventPage } from "./pages/EditEventPage";
import { EventRootLayout } from "./pages/EventRootLayout";
import { loader } from "./pages/EventsPage";
import { Error } from "./pages/Error";
import {
  EventDetailPage,
  loader as EventDetailLoader,
  action as DeleteAction,
} from "./pages/EventDetailPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: "events",
          element: <EventRootLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: loader,
            },
            {
              path: ":id",
              id: "event-detail",
              loader: EventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: DeleteAction,
                },
                { path: "edit", element: <EditEventPage /> },
              ],
            },
            { path: "new", element: <NewEventPage />, action: action },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
