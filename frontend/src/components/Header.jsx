import logo from "./asserts/logo.png";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img scr={logo} alt="logo" className="mr-2" />
            <div>ProjectMgmt</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
