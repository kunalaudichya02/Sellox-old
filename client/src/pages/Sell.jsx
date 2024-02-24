
const Sell = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create FormData object from the form data
    const formData = new FormData(event.target);

    try {
      const response = await fetch('http://localhost:3000/user/sell', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <div className="flex ">
        <form encType="multipart/form-data" className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="image">Upload Image:</label>
          <input type="file" name="image" id="image" accept="image/*" required />

          <label htmlFor="productName">Productname</label>
          <input type="text" name="productName" id="productName" required />

          <label htmlFor="sellerName">sellername</label>
          <input type="text" name="sellerName" id="sellerName" required />

          <label htmlFor="details">Tdetails</label>
          <input type="text" name="details" id="details" required />

          <label htmlFor="price">price</label>
          <input type="number" name="price" id="price" required />

          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  )
}

export default Sell
