import '../stylesheets/UserList.scss';
import UserItems from './UserItems';

const UserList = (props) => {
  const x = props.datas.map((eachItem) => {
    return (
      <li key={eachItem.id} className="users__list-item">
        <UserItems datitos={eachItem} handleGender2={props.handleGender1} />{' '}
      </li>
    );
  });

  return <ul className="users__list">{x}</ul>;
};

export default UserList;
