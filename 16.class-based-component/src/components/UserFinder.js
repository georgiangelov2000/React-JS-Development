import React, { Fragment, Component } from "react";
import UsersContext from "../store/users-context";
import Users from "./Users";
import ErrorBoundary from "./ErrorBoundary";

import styled from "styled-components";

const Finder = styled.div`
  margin: 2rem auto;
  background-color: grey;
  padding: 1rem;
  border-radius: 12px;
  max-width: 40rem;
  text-align: center;

`;

const Input=styled.input`
  border-radius:10px;
  padding:10px 10px 10px 10px;
  border:none
`

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor(props) {
    super(props);

    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.setState({
      filteredUsers: this.context.users,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return (
      <Fragment>
        <Finder>
          <Input type="search" placeholder="Enter Name" onChange={this.searchChangeHandler.bind(this)} />
        </Finder>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}
export default UserFinder;

/*
const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div>
        <input type="search" onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};
*/
