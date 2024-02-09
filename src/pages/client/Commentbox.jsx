const Commentbox = () => {
  return (
    <div className="comment-box">
      <div className="top d-flex">
        <p>Is it a Rejection Message?</p>
        <div className="yes">
          <input type="radio" name="reject" id="reject" /> Yes
        </div>
        <div className="no">
          <input type="radio" name="reject" id="reject" /> No
        </div>
      </div>
      <br />
      <br />
      <div className="bottom">
        <p>Comment : </p>
        <br />
        <textarea name="comment" rows={10} cols={40} />
      </div>
        <button className="btn">Submit</button>
    </div>
  );
};

export default Commentbox;
