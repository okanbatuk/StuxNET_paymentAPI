const sql = require("../mssqlConnector")
const mssql = require('mssql');

module.exports.payments = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('subsID', mssql.BigInt, data.subsID)
            .execute('SP_debt_query')
            return result;
    } catch (error) {
        return {status: 404, message: error.originalError.info.message };
    }
}