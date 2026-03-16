{modalType === "yearlyBusiness" && (
  <>
    <h2>Yearly Business</h2>

    {!response && (
      <form className="modal-form">
        <div className="modal-form-item">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            name="year"
            placeholder="Enter Year"
            onChange={handleInputChange}
          />
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    )}

    {response && (
      <div>
        <div className="business-response-item">
          <div>Total Business: ₹</div>
          <div>{response?.yearlyBusiness?.totalBusiness?.toFixed(2)}</div>
        </div>

        <div className="business-response-item">
          <h5>Category Sales</h5>
        </div>

        {Object.keys(response?.yearlyBusiness?.categorySales || {}).map((key) => (
          <div key={key} className="business-response-item">
            <div>{key}</div>
            <div>{response?.yearlyBusiness?.categorySales[key]}</div>
          </div>
        ))}
      </div>
    )}

    <button onClick={onClose}>Cancel</button>
  </>
)}