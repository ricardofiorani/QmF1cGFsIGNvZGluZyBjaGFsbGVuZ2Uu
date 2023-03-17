import {getDataSource} from "./adapter/out/database/dataSource";

(async () => {
    /**
     * For the first time you have to manually go to the PG Admin and create the database "test" before running this
     */
    const dataSource = await getDataSource(true);
})()