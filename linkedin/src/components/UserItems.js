import '../stylesheets/UserItems.scss';

const UserItems = (props) => {
  console.log(props.datitos);

  const handleChange = (event) => {
    const genderValue = event.target.value;
    const nameValue = props.datitos.name;

    return props.handleGender2(genderValue, nameValue);
  };

  return (
    <article className="users__card">
      <div className="users__card--imgContainer">
        <img className="users__card--img" src={props.datitos.image} alt="" title="" />
      </div>
      <h4 className="users__card--title">{props.datitos.name}</h4>
      <p className="users__card--description">
        {props.datitos.city.toUpperCase()} / {props.datitos.country}
      </p>
      <form action="get" className="users__card--imgContainer">
        <label htmlFor="male" className="users__card--description">
          Male
        </label>
        <input id="male" type="radio" name="gender" value="male" onChange={handleChange} />
        <label htmlFor="female">Female</label>
        <input id="female" type="radio" name="gender" value="female" onChange={handleChange} />
      </form>
    </article>
  );
};

export default UserItems;
