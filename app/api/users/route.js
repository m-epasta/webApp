import initDatabase from '/home/m-epasta/StopSinDir/WebApp/stop-sin/app/api/database/database.js';


export async function GET(request) {
    if (!process.env.DB_ENCRYPTION_KEY) {
        return new Response(JSON.stringify({ error: 'Database encryption key is not set.'})), { status: 500 };
        }
    if (process.env.ENABLE_DATABASE !== 'true') {
        return new Response(JSON.stringify({ message : 'Database is disabled.'})), { status: 200 };
    } else {
        const db = initDatabase();
        if (!db) {
            return new Response(JSON.stringify({ error : 'Failed to initialize database.'})), { status: 500 };
        }
        try {
            const rows = db.prepare('SELECT * FROM users').all();
            return new Response(JSON.stringify(rows)), { status: 200 };
        } catch (error) {
            console.error('Database query error:', error);
            return new Response(JSON.stringify({ error: 'Database query failed.'})), { status: 500}
        }
    }
    }
    