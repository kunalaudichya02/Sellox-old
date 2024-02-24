
const Sell = () => {
  return (
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
          <label>Set a price
            <input type="number" />
          </label>
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  )
}

export default Sell
