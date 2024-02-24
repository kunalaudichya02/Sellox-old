
const Rent = () => {
  return (
    <div>
      <div>
        <div className="flex ">
          <form className="flex flex-col">
            <label>Product name
              <input type="text" placeholder="enter product name" />
            </label>
            <label>Details
              <input type="text" placeholder="enter details of product" />
            </label>
            <label>Description
              <input type="text" name="" id="" placeholder="enter discription of like condition" />
            </label>
            <p>select duration
              <select name="" id="">
                <option value="hourly">hourly</option>
                <option value="daily">daily</option>
              </select>
            </p>
            <label>Set a price
              <input type="number" />
            </label>
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Rent
