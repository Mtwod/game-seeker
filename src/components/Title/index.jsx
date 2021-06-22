import './style.scss';

const Title = ({ title, subtitle }) => (
  <div className="Title">
    <h1 className="Title__title">{title}</h1>
    <p className="Title__subtitle">{subtitle}</p>
  </div>
);

export default Title;
