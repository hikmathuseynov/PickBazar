import Main from "./main/page";
import User from "./user/page";


export default function App() {
  const isLogged = false;

  if (isLogged) {
    return <User />
  } else {
    return <Main />
  }
}
