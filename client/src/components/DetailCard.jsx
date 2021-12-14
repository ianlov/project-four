import '../assets/css/detailcard.css';

import { Link } from "react-router-dom";

const DetailCard = (props) => {
  return (
    <div 
      className={props.show ? "detail-card-open" : "detail-card"} 
      id={props.focus.what_type}
      onClick={() => props.setShow(!props.show)}
    >
      <h2>{props.focus.name}</h2>
      {props.show ? 
        <div className="detail-card__description-container">
          <img src={props.focus.img_url} alt={props.focus.name} />
          <p>{props.focus.description}</p>
          {props.focus.what_type === 'transition' ? 
            <Link 
              to={`/position/${props.focus.finish_id}`}
              className="detail-card__description-container__link" 
            >
              <p>Next Position</p>
            </Link>
          : null}
          <Link 
            to="/edit"
            className="link-to-edit" 
          ><p>Edit</p></Link>
        </div>
      : null }
    </div>
  )
}

export default DetailCard;