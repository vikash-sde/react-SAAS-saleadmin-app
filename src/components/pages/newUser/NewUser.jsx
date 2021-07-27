import "./newUser.css";

function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="John" />
        </div>

        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="john2454" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="password" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="password" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              placeholder="New York | USA"
            />
            <label For="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              placeholder="New York | USA"
            />
            <label For="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="other"
              value="others"
              placeholder="New York | USA"
            />
            <label For="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
  );
}

export default NewUser;
