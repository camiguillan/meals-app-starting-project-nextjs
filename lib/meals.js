import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve)  => setTimeout(resolve, 2000) )
    // throw new Error('Loading meals failed')
    return db.prepare('SELECT * FROM meals').all(); //run is only used for pushing data into the db. 
}


export function getMeal(slug){
    // await new Promise((resolve)  => setTimeout(resolve, 2000) )

    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug); //other wise we are open to sql injection 
}