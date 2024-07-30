import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

export const updateUserBalances = async (userId: string, amount: number) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const res = await client.query('SELECT balance FROM users WHERE id = $1', [userId]);
        
        let balance = res.rows[0].balance;
        if ((balance - amount) < 0) {
            throw new Error("Not enough money");
        } else {
            balance -= amount;
            await client.query('UPDATE users SET balance = $1 WHERE id = $2', [balance, userId]);
            await client.query('COMMIT');
            return balance;
        }
    } catch (err) {
        await client.query('ROLLBACK');
        throw err;
    } finally {
        client.release();
    }
};
