import 'jsonwebtoken';
import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';


export async function GET(request) {
    var authHeader = request.headers.get('authorization') || request.headers.get('Authorization');

    if (!authHeader) {
        return new Response(JSON.stringify({ error: 'Authorization header is missing.'}), { status: 401 });
    }
    if (!process.env.DB_ENCRYPTION_KEY) {
        return new Response(JSON.stringify({ error: 'Database encryption key is not set.'}), { status: 500 });
    }
    if (process.env.ENABLE_DATABASE !== 'true') {
        return new Response(JSON.stringify({ message : 'Database is disabled.'}), { status: 200 });
    } else {
        prepareSummaryDatabase();
        
        }
    }

    
async function prepareSummaryDatabase() {
    const dbPath = path.join(process.cwd(), 'app', 'api', 'database', 'summary_database.db');

    if (!fs.existsSync(dbPath)) {
        return new Response(JSON.stringify({ error: 'Summary database not found. It may need to be generated first.' }), { status: 404 });
    }

    let db;
    try {
        db = new Database(dbPath, { readonly: true });
        const summaryData = db.prepare('SELECT * FROM summary').get();
        return new Response(JSON.stringify(summaryData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
            });
    } finally {
        if (db) db.close();}
}
