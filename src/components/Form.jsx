const Form = () => {
    return (
      <section className="form-section bg-gray-800 text-white py-8">
        <h2 className="text-xl font-bold text-center mb-6">Form</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
          <input
            type="number"
            placeholder="Number"
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
          <textarea
            placeholder="Notes"
            rows="4"
            className="w-full p-2 bg-gray-700 text-white rounded"
          ></textarea>
          <button type="submit" className="w-full bg-blue-600 p-2 rounded text-white">
            Save
          </button>
        </form>
      </section>
    );
  };
  
  export default Form;
  