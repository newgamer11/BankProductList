const Bankheaderfilter = ({ categoryfilter }) => {

    const filtername = (event) => {
        categoryfilter(event.target.value);
    }

    return (
        <select name="Listname" id="Listname" className="ml-10" onChange={filtername}>
            <option value="ALL">ALL</option>
            <option value="Deposit">예금</option>
            <option value="Saving">적금</option>
            <option value="Loan">대출</option>
        </select>
    )
}

export default Bankheaderfilter;