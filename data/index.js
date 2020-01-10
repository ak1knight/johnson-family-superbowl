const getDynamoDBClient = () => {
    // important to require the sdk here rather than a top level import
    // this is to prevent the app from requiring the aws-sdk client side.
    const AWS = require("aws-sdk");

    // dynamodb is replicated across us-west-2 and eu-west-2
    // use us-west-2 for us regions or eu-west-2 for eu regions
    // you can tweak this to suit your needs
    const edgeRegion = process.env.AWS_REGION || "us-west-1";
    const dynamoDbRegion = "us-west-1";

    const options = {
        convertEmptyValues: true,
        region: process.env.dbRegion
    };

    const client = process.env.LOCAL_DYNAMO_DB_ENDPOINT
        ? new AWS.DynamoDB.DocumentClient({
            ...options,
            endpoint: process.env.LOCAL_DYNAMO_DB_ENDPOINT
        })
        : new AWS.DynamoDB.DocumentClient(options);

    return client;
};

module.exports = {
    readEntries: async () => {
        const { Items } = await getDynamoDBClient()
            .scan({
                TableName: process.env.dbName
            })
            .promise();

        return Items;
    },
    getEntry: async entryId => {
        const { Items } = await getDynamoDBClient()
            .scan({
                TableName: process.env.dbName
            })
            .promise();

        const entry = Items.find(entry => entry.id == entryId);

        return entry;
    },
    createEntry: async entry => {
        await getDynamoDBClient()
            .put({
                TableName: process.env.dbName,
                Item: {
                    id: Date.now(),
                    entry
                }
            })
            .promise();
    }
};