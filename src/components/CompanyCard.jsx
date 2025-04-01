export default function CompanyCard(props) {
  const basePath = import.meta.env.BASE_URL;
    return (
      <div className="card" onClick={props.onClick}>
        <button className="modal-btn"></button>
        <div
          className="c-card-img"
          style={{ backgroundImage: `url(${props.cardImage})` }}
        ></div>
        <div className="card-info-container">
          <div className="card-info">
            <span className="card-name">{props.name}</span>
            <span className="card-title">{props.title}</span>
          </div>
          <div className="p-btn-container">
            <button className="plus-btn">
              <img src={`${basePath}images/p-btn-icon.svg`}  alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  