import { useState } from "react";

const AddHeroForm = ({ onAddHero }) => {
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [role, setRole] = useState();
  const [base, setBase] = useState();
  const [hp, setHp] = useState();
  const [armor, setArmor] = useState();
  const [shield, setShield] = useState();
  const [passive, setPassive] = useState();
  const [ultimate, setUltimate] = useState();
  const [image, setImage] = useState();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onAddHero({
      name: name,
      gender: gender,
      role: role,
      baseOfOperations: base,
      hp: hp,
      armor: armor,
      shield: shield,
      passiveAbility: passive,
      ultimateAbility: ultimate,
      image: image,
    });

    setName("");
    setBase("");
    setHp(0);
    setArmor(0);
    setShield(0);
    setPassive("");
    setUltimate("");
    setImage("");
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="name">
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </label>
        <label htmlFor="gender">
          Gender
          <input
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            type="text"
          />
        </label>
        <label htmlFor="role">
          Role
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            name="role"
            id="role"
          >
            <option value="Damage">Damage</option>
            <option value="Tank">Tank</option>
            <option value="Support">Support</option>
          </select>
        </label>
        <label htmlFor="Base of operations">
          Base of operations
          <input
            value={base}
            onChange={(e) => setBase(e.target.value)}
            type="text"
          />
        </label>
        <label htmlFor="hp">
          HP
          <input
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            type="number"
          />
        </label>
        <label htmlFor="armor">
          Armor
          <input
            value={armor}
            onChange={(e) => {
              setArmor(e.target.value);
            }}
            type="number"
          />
        </label>
        <label htmlFor="shields">
          Shield
          <input
            value={shield}
            onChange={(e) => setShield(e.target.value)}
            type="number"
          />
        </label>
        <label htmlFor="passive ability">
          Passive Ability
          <input
            value={passive}
            onChange={(e) => setPassive(e.target.value)}
            type="text"
          />
        </label>
        <label htmlFor="ultimate ability">
          Ultimate Ability
          <input
            value={ultimate}
            onChange={(e) => setUltimate(e.target.value)}
            type="text"
          />
        </label>
        <label htmlFor="image">
          Image Link
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddHeroForm;
