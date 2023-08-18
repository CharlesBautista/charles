import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2FCharlesBautista%3Ffbclid%3DIwAR1kZWqrfHaxN6YbDdvXHs6vI5OnZcTYy0K5FZxLsCqvssowsokA74KbYfM&h=AT0exGPCN11UdEidr-Uf5YI3iOB_y34XwX3tR2UF7BdwUz0FJb-PbV95muOLjp9Sk1JqQmzwXeNqVkGEvlc1m6MxJKweLaTH5PEM25Y1HSxtMYFYsm9WUUJ4G9Vy0M6i3d9QjA">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/drey0920bautista?mibextid=ZbWKwL">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F_andreyyy9%2F%3Ffbclid%3DIwAR11ZYn4Uf0Xzs5otnNSABRQNONJgK2ms8Y741rWdvZR7aey836JqM4Mqe4&h=AT0exGPCN11UdEidr-Uf5YI3iOB_y34XwX3tR2UF7BdwUz0FJb-PbV95muOLjp9Sk1JqQmzwXeNqVkGEvlc1m6MxJKweLaTH5PEM25Y1HSxtMYFYsm9WUUJ4G9Vy0M6i3d9QjA">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;