import "reflect-metadata"
import {DataSource} from "typeorm"
import UserForm from "./entities/UserForm";
import {DataSourceOptions} from "typeorm/data-source/DataSourceOptions";

export const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    //I understand that these values here should be coming from the environment variables, however for the sake of simplicity and time I'm hardcoding them here
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "changeme",
    database: "test",
    entities: [UserForm],
}

export const getDataSource = async (sync = false): Promise<DataSource> => {
    const dataSource = new DataSource({
        ...dataSourceOptions,
        synchronize: sync,
        logging: sync,
    });

    try {
        // I'm not sure if this is the best way to initialize the database, but ideally we would separate the database
        // initialization from the database connection and synchronize the database only when necessary
        await dataSource.initialize();
        return dataSource;
    } catch (error: any) {
        console.error("Error while initializing the database: ", error);
        throw error;
    }
}

