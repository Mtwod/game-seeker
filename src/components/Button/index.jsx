import './style.scss';

const Button = ({ title, linkTarget }) => (
  <a className="Button" href={linkTarget}>
    {title}
  </a>
);

export default Button;
