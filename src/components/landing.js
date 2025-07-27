import "./landing.css";
function FormCheck() {
  return (
    <div>
      {/* <h2>main app</h2> */}
      <div className="Hero">
        <div className="form-container">
          <h2>welcome to e-hospital</h2>
          <form>
            <label for="name">Name</label>
            <input type="text" placeholder="username" required></input>
            <br></br>
            <label for="email">email</label>
            <input type="email" placeholder="Enter email"></input>
            <br></br>
            <label for="tell">phone number</label>
            <input type="tel" placeholder="e.g +2547123456789"></input>
            <br></br>
            <label for="text">reason for visit</label>
            <textarea id="text" placeholder="write your reason here"></textarea>
            <br></br>
            <input type="date" required></input>
            <label for="single-select" required>
              Depertment you wish to visit:
            </label>
            <select id="single-select" name="single-select">
              <option value="EA">Emergency and accident</option>
              <option value="MD">Medical department</option>
              <option value="PD">Pharmacy depertment</option>
              <option value="DP">Dietaty Depertment</option>
              <option value="MRI">MRI</option>
              <option value="specialist">other specialists</option>
            </select>
            <button className="btn">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default FormCheck;
