const sql = require('../mssqlConnection');
const mssql = require('mssql');

/* module.exports.payments = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('subsID', mssql.BigInt, data.subsID)
            .execute('SP_debt_query')
            return result;
    } catch (error) {
        return {status: 404, message: error.originalError.info.message };
    }
} */

module.exports.accounts = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('tc', mssql.BigInt, data.tc)
            .execute('SP_account_list')
            return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}