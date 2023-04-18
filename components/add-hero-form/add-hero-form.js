const AddHeroForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">
          Name
          <input type="text" />
        </label>
        <label htmlFor="gender">
          Gender <input type="text" />
        </label>
        <label htmlFor="role">
          Role
          <select name="role" id="role">
            <option value="Damage">Damage</option>
            <option value="Tank">Tank</option>
            <option value="Support">Support</option>
          </select>
        </label>
        <label htmlFor="Base of operations">
          Base of operations <input type="text" />
        </label>
        <label htmlFor="hp">
          HP
          <input type="number" />
        </label>
        <label htmlFor="armor">
          Armor
          <input type="number" />
        </label>
        <label htmlFor="shields">
          Shields <input type="number" />
        </label>
      </form>
      <label htmlFor="passive ability">
        Passive Ability
        <input type="text" />
      </label>
      <label htmlFor="ultimate ability">
        Ultimate Ability <input type="text" />
      </label>
    </div>
  );
};

export default AddHeroForm;
