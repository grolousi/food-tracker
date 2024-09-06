import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: Home,
});

function Home() {
  return (
    <>
      <div>
        <h1>Food Intake Tracker</h1>
        <Link to="/">Home</Link>
        <Link to="/food-log">Food Log</Link>

        <Link to="/meals">Meals</Link>

        <Link to="/add-food">Add Food</Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
